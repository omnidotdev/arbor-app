"use client";

import { Check, Copy, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

import { Button } from "@/components/ui/button";

interface FileViewerProps {
  content: string;
  filename: string;
  owner: string;
  repo: string;
  branch: string;
  path: string;
}

/**
 * Get Shiki language identifier from filename.
 */
function getLanguage(filename: string): string {
  const ext = filename.split(".").pop()?.toLowerCase();

  const languageMap: Record<string, string> = {
    // JavaScript/TypeScript
    js: "javascript",
    jsx: "jsx",
    mjs: "javascript",
    cjs: "javascript",
    ts: "typescript",
    tsx: "tsx",
    mts: "typescript",
    cts: "typescript",
    // Python
    py: "python",
    pyw: "python",
    // Rust
    rs: "rust",
    // Go
    go: "go",
    // Data formats
    json: "json",
    jsonc: "jsonc",
    yaml: "yaml",
    yml: "yaml",
    toml: "toml",
    xml: "xml",
    // Web
    html: "html",
    htm: "html",
    css: "css",
    scss: "scss",
    sass: "sass",
    less: "less",
    // Markdown
    md: "markdown",
    mdx: "mdx",
    // Shell
    sh: "bash",
    bash: "bash",
    zsh: "bash",
    fish: "fish",
    // Config
    dockerfile: "dockerfile",
    gitignore: "gitignore",
    env: "dotenv",
    // Other
    sql: "sql",
    graphql: "graphql",
    gql: "graphql",
    c: "c",
    cpp: "cpp",
    cc: "cpp",
    h: "c",
    hpp: "cpp",
    java: "java",
    kt: "kotlin",
    swift: "swift",
    rb: "ruby",
    php: "php",
    lua: "lua",
    vim: "viml",
    makefile: "makefile",
  };

  // Handle special filenames
  const lowerFilename = filename.toLowerCase();
  if (lowerFilename === "dockerfile") return "dockerfile";
  if (lowerFilename === "makefile") return "makefile";
  if (lowerFilename.startsWith(".env")) return "dotenv";
  if (lowerFilename === ".gitignore") return "gitignore";

  return languageMap[ext ?? ""] ?? "text";
}

/**
 * File viewer with beautiful syntax highlighting powered by Shiki.
 */
export function FileViewer({
  content,
  filename,
  owner,
  repo,
  branch,
  path,
}: FileViewerProps) {
  const [highlightedHtml, setHighlightedHtml] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // Check if file ends with newline and trim it for display
  const hasTrailingNewline = content.endsWith("\n");
  const displayContent = hasTrailingNewline ? content.slice(0, -1) : content;
  const lineCount = displayContent.split("\n").length;
  const language = getLanguage(filename);

  useEffect(() => {
    let cancelled = false;

    async function highlight() {
      setIsLoading(true);
      try {
        const html = await codeToHtml(displayContent, {
          lang: language,
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
          defaultColor: false,
        });

        if (!cancelled) {
          setHighlightedHtml(html);
        }
      } catch {
        // Fallback to plain text if language not supported
        if (!cancelled) {
          const escaped = displayContent
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
          setHighlightedHtml(
            `<pre class="shiki"><code>${escaped}</code></pre>`,
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    highlight();

    return () => {
      cancelled = true;
    };
  }, [displayContent, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rawUrl = `/api/git/${owner}/${repo}/raw/${branch}/${path}`;

  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2.5">
        <div className="flex items-center gap-4 text-sm">
          <span className="font-medium">{filename}</span>
          <span className="text-muted-foreground">
            {lineCount} {lineCount === 1 ? "line" : "lines"}
          </span>
          <span className="text-muted-foreground">
            {formatBytes(new TextEncoder().encode(content).length)}
          </span>
          <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-muted-foreground text-xs">
            {language}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 gap-2 px-2.5"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-green-500 text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="h-8 gap-2 px-2.5"
          >
            <a href={rawUrl} download={filename}>
              <Download className="h-4 w-4" />
              <span className="text-xs">Raw</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-h-[600px] overflow-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : (
          <>
            <div
              className="shiki-wrapper text-sm [&_.shiki]:m-0 [&_.shiki]:overflow-visible [&_.shiki]:bg-transparent [&_.shiki]:p-4 [&_.shiki]:leading-relaxed [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki generates safe HTML
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
            {!hasTrailingNewline && (
              <div className="flex items-center gap-2 border-t bg-muted/30 px-4 py-1.5 text-muted-foreground text-xs">
                <span className="rounded bg-destructive/10 px-1.5 py-0.5 font-mono text-destructive">
                  ⊘
                </span>
                <span>No newline at end of file</span>
              </div>
            )}
          </>
        )}

        {/* Line numbers gutter effect via CSS */}
        <style>{`
          .shiki-wrapper .shiki code {
            counter-reset: line;
          }
          .shiki-wrapper .shiki code > .line::before {
            counter-increment: line;
            content: counter(line);
            display: inline-block;
            width: 3rem;
            margin-right: 1.5rem;
            text-align: right;
            color: var(--color-muted-foreground);
            opacity: 0.5;
            font-size: 0.75rem;
            user-select: none;
          }
          .shiki-wrapper .shiki {
            background: transparent !important;
          }
          /* Support for dual themes */
          .dark .shiki,
          .dark .shiki span {
            color: var(--shiki-dark) !important;
            background-color: transparent !important;
          }
          :root:not(.dark) .shiki,
          :root:not(.dark) .shiki span {
            color: var(--shiki-light) !important;
            background-color: transparent !important;
          }
        `}</style>
      </div>
    </div>
  );
}

/**
 * Format bytes to human readable string.
 */
function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Number.parseFloat((bytes / k ** i).toFixed(1))} ${sizes[i]}`;
}
