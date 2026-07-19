"use client";

import DOMPurify from "dompurify";
import { FileText } from "lucide-react";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

import { cn } from "@/lib/utils";

interface ReadmeDisplayProps {
  content: string;
  filename: string;
}

/**
 * GitHub-like prose styling applied to the sanitized markdown HTML. Uses
 * Tailwind arbitrary variants so the design tokens resolve, rather than
 * @tailwindcss/typography (not installed).
 */
const proseClasses = cn(
  "readme-prose max-w-none text-foreground text-sm leading-relaxed",
  // First and last block should not add extra outer spacing
  "[&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
  // Headings
  "[&_h1]:mt-6 [&_h1]:mb-4 [&_h1]:border-b [&_h1]:pb-2 [&_h1]:font-semibold [&_h1]:text-2xl",
  "[&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:border-b [&_h2]:pb-2 [&_h2]:font-semibold [&_h2]:text-xl",
  "[&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-lg",
  "[&_h4]:mt-4 [&_h4]:mb-2 [&_h4]:font-semibold [&_h4]:text-base",
  "[&_h5]:mt-4 [&_h5]:mb-2 [&_h5]:font-semibold [&_h5]:text-sm",
  "[&_h6]:mt-4 [&_h6]:mb-2 [&_h6]:font-semibold [&_h6]:text-muted-foreground [&_h6]:text-sm",
  // Text blocks
  "[&_p]:my-3",
  "[&_strong]:font-semibold",
  "[&_hr]:my-6 [&_hr]:border-border",
  // Links use the brand emerald accent, matching the rest of the app
  "[&_a]:text-primary-600 [&_a]:underline-offset-2 [&_a:hover]:underline dark:[&_a]:text-primary-400",
  // Lists
  "[&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6",
  "[&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:my-1 [&_li>ul]:my-1 [&_li>ol]:my-1",
  // Inline code chips (code not inside a pre block)
  "[&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-muted [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:font-mono [&_:not(pre)>code]:text-[0.85em]",
  // Fenced code blocks
  "[&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:bg-muted/40 [&_pre]:p-4 [&_pre]:text-[0.85em] [&_pre]:leading-relaxed",
  "[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:font-mono",
  // Blockquotes
  "[&_blockquote]:my-4 [&_blockquote]:border-border [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground [&_blockquote]:italic",
  // Tables
  "[&_table]:my-4 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm",
  "[&_thead]:bg-muted/50",
  "[&_th]:border [&_th]:border-border [&_th]:px-3 [&_th]:py-1.5 [&_th]:text-left [&_th]:font-semibold",
  "[&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-1.5",
  // Images
  "[&_img]:my-3 [&_img]:max-w-full [&_img]:rounded",
);

/**
 * Highlight a single code block with Shiki, falling back to a plain (still
 * Shiki-styled) block when the language is unknown so every fence renders
 * consistently. Returns the HTML string, or null if highlighting failed.
 */
async function highlightCode(
  code: string,
  lang: string,
): Promise<string | null> {
  const themes = { light: "github-light", dark: "github-dark" } as const;

  try {
    return await codeToHtml(code, { lang, themes, defaultColor: false });
  } catch {
    try {
      return await codeToHtml(code, {
        lang: "text",
        themes,
        defaultColor: false,
      });
    } catch {
      return null;
    }
  }
}

/**
 * Parse markdown, swap fenced code blocks for Shiki-highlighted markup, then
 * sanitize the whole document before it is injected. Runs client-side only
 * (needs DOMParser and a DOM for DOMPurify), gated behind the mounted flag.
 */
async function renderMarkdown(content: string): Promise<string> {
  const rawHtml = marked.parse(content, { async: false, gfm: true });
  const doc = new DOMParser().parseFromString(rawHtml, "text/html");

  for (const codeEl of doc.querySelectorAll("pre > code")) {
    const languageClass = Array.from(codeEl.classList).find((name) =>
      name.startsWith("language-"),
    );
    const lang = languageClass
      ? languageClass.slice("language-".length).toLowerCase()
      : "text";
    // marked appends a trailing newline to fenced code content
    const code = (codeEl.textContent ?? "").replace(/\n$/, "");

    const highlighted = await highlightCode(code, lang);
    if (!highlighted) continue;

    const holder = doc.createElement("div");
    holder.innerHTML = highlighted;
    const shikiPre = holder.firstElementChild;
    const originalPre = codeEl.parentElement;
    if (shikiPre && originalPre?.parentElement) {
      originalPre.parentElement.replaceChild(shikiPre, originalPre);
    }
  }

  return DOMPurify.sanitize(doc.body.innerHTML, {
    // Keep Shiki's inline styles/custom props and class hooks, drop anything
    // that could execute
    ADD_ATTR: ["class", "style", "tabindex"],
    FORBID_TAGS: ["script", "style", "iframe", "object", "embed", "form"],
    FORBID_ATTR: ["onerror", "onload", "onclick"],
  });
}

/**
 * Display README (and other markdown) content rendered GitHub-style: parsed
 * markdown with Shiki-highlighted code fences. Markdown parsing, Shiki
 * highlighting and DOMPurify sanitization all run client-side only, so the
 * server and first client render show a plain-text fallback.
 */
export function ReadmeDisplay({ content, filename }: ReadmeDisplayProps) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    renderMarkdown(content)
      .then((result) => {
        if (!cancelled) setHtml(result);
      })
      .catch(() => {
        // Leave the plain-text fallback in place on failure
      });

    return () => {
      cancelled = true;
    };
  }, [content]);

  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="flex items-center gap-2 border-b bg-muted/30 px-4 py-2">
        <FileText className="h-4 w-4" />
        <span className="font-medium text-sm">{filename}</span>
      </div>
      <div className="p-6">
        {html ? (
          <div
            className={proseClasses}
            // biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized with DOMPurify in renderMarkdown
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <pre className="whitespace-pre-wrap font-mono text-sm">{content}</pre>
        )}
      </div>

      {/* Dual-theme Shiki color switching, scoped to this component */}
      <style>{`
        .readme-prose .shiki,
        .readme-prose .shiki span {
          background-color: transparent !important;
        }
        .dark .readme-prose .shiki,
        .dark .readme-prose .shiki span {
          color: var(--shiki-dark) !important;
        }
        :root:not(.dark) .readme-prose .shiki,
        :root:not(.dark) .readme-prose .shiki span {
          color: var(--shiki-light) !important;
        }
      `}</style>
    </div>
  );
}
