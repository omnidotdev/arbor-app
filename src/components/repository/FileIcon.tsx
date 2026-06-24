import {
  Code,
  File,
  FileCode,
  FileJson,
  FileText,
  Folder,
  Image,
  Settings,
} from "lucide-react";

interface FileIconProps {
  name: string;
  type: "blob" | "tree" | "commit";
  className?: string;
}

/**
 * Icon component for files and folders in the file browser.
 */
export function FileIcon({ name, type, className = "h-4 w-4" }: FileIconProps) {
  if (type === "tree") {
    return <Folder className={`${className} text-blue-500`} />;
  }

  const ext = name.split(".").pop()?.toLowerCase();

  // Programming languages
  const codeExtensions = [
    "js",
    "jsx",
    "ts",
    "tsx",
    "py",
    "rb",
    "go",
    "rs",
    "java",
    "c",
    "cpp",
    "h",
    "hpp",
    "cs",
    "php",
    "swift",
    "kt",
    "scala",
    "zig",
  ];
  if (ext && codeExtensions.includes(ext)) {
    return <FileCode className={`${className} text-green-500`} />;
  }

  // Config files
  const configExtensions = ["json", "yaml", "yml", "toml", "ini", "env"];
  if (ext && configExtensions.includes(ext)) {
    return <FileJson className={`${className} text-yellow-500`} />;
  }

  // Web files
  const webExtensions = ["html", "css", "scss", "sass", "less"];
  if (ext && webExtensions.includes(ext)) {
    return <Code className={`${className} text-orange-500`} />;
  }

  // Text/docs
  const textExtensions = ["md", "txt", "rst", "doc", "docx", "pdf"];
  if (ext && textExtensions.includes(ext)) {
    return <FileText className={`${className} text-gray-500`} />;
  }

  // Images
  const imageExtensions = ["png", "jpg", "jpeg", "gif", "svg", "webp", "ico"];
  if (ext && imageExtensions.includes(ext)) {
    return <Image className={`${className} text-purple-500`} />;
  }

  // Config-like files by name
  const configNames = [
    "dockerfile",
    "makefile",
    "gemfile",
    "rakefile",
    "procfile",
    ".gitignore",
    ".dockerignore",
    ".env",
    ".editorconfig",
  ];
  if (configNames.includes(name.toLowerCase())) {
    return <Settings className={`${className} text-gray-500`} />;
  }

  return <File className={`${className} text-gray-400`} />;
}
