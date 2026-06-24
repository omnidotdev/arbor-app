import { FileText } from "lucide-react";

interface ReadmeDisplayProps {
  content: string;
  filename: string;
}

/**
 * Display README content with basic markdown rendering.
 * For now, displays as preformatted text. Can be enhanced with a proper
 * markdown renderer like react-markdown.
 */
export function ReadmeDisplay({ content, filename }: ReadmeDisplayProps) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="flex items-center gap-2 border-b bg-muted/30 px-4 py-2">
        <FileText className="h-4 w-4" />
        <span className="font-medium text-sm">{filename}</span>
      </div>
      <div className="p-6">
        <pre className="whitespace-pre-wrap font-mono text-sm">{content}</pre>
      </div>
    </div>
  );
}
