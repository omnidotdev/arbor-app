import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronRight,
  File,
  Folder,
  GitBranch,
  GitCommit,
  List,
  Network,
} from "lucide-react";
import { useCallback, useState } from "react";

import { GraphView } from "@/components/graph";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/repositories/$owner/$repo")({
  component: RepositoryPage,
});

type FileSystemItem = {
  type: "file" | "directory";
  content?: string | Record<string, FileSystemItem>;
  lastCommit: string;
  updated: string;
};

const fileSystem: Record<string, FileSystemItem> = {
  src: {
    type: "directory",
    content: {
      components: {
        type: "directory",
        content: {
          "Button.tsx": {
            type: "file",
            content:
              "export function Button() {\n  return <button>Click me</button>;\n}",
            lastCommit: "Add button component",
            updated: "2 days ago",
          },
        },
        lastCommit: "Update component structure",
        updated: "2 days ago",
      },
      "App.tsx": {
        type: "file",
        content:
          'import { Button } from "./components/Button";\n\nexport function App() {\n  return (\n    <div>\n      <h1>Hello World</h1>\n      <Button />\n    </div>\n  );\n}',
        lastCommit: "Initial commit",
        updated: "3 days ago",
      },
    },
    lastCommit: "Update component structure",
    updated: "2 days ago",
  },
  tests: {
    type: "directory",
    content: {
      "App.test.tsx": {
        type: "file",
        content:
          'import { render } from "@testing-library/react";\nimport { App } from "../src/App";\n\ntest("renders hello world", () => {\n  const { getByText } = render(<App />);\n  expect(getByText("Hello World")).toBeInTheDocument();\n});',
        lastCommit: "Add tests",
        updated: "3 days ago",
      },
    },
    lastCommit: "Add integration tests",
    updated: "3 days ago",
  },
  "README.md": {
    type: "file",
    content:
      "# Example Repository\n\nThis is an example repository showing the file structure.",
    lastCommit: "Update documentation",
    updated: "1 day ago",
  },
  "package.json": {
    type: "file",
    content:
      '{\n  "name": "example",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.0.0"\n  }\n}',
    lastCommit: "Bump dependencies",
    updated: "5 days ago",
  },
  "tsconfig.json": {
    type: "file",
    content: '{\n  "compilerOptions": {\n    "strict": true\n  }\n}',
    lastCommit: "Enable strict mode",
    updated: "1 week ago",
  },
};

function RepositoryPage() {
  const { owner, repo } = Route.useParams();
  const [viewType, setViewType] = useState<"list" | "graph">("list");
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const getCurrentDirectory = useCallback(() => {
    let current: Record<string, FileSystemItem> = fileSystem;
    for (const path of currentPath) {
      const item = current[path];
      if (item?.type === "directory" && typeof item.content === "object") {
        current = item.content as Record<string, FileSystemItem>;
      }
    }
    return current;
  }, [currentPath]);

  const handleItemClick = (name: string, type: "file" | "directory") => {
    if (type === "directory") {
      setCurrentPath([...currentPath, name]);
      setSelectedFile(null);
    } else {
      setSelectedFile(name);
    }
  };

  const navigateToPath = (index: number) => {
    setCurrentPath(currentPath.slice(0, index));
    setSelectedFile(null);
  };

  const currentDir = getCurrentDirectory();

  return (
    <div className="container mx-auto max-w-7xl px-6 py-6">
      <div className="mb-6">
        <h1 className="font-bold text-3xl">
          {owner}/{repo}
        </h1>
        <div className="mt-4 flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <GitBranch className="mr-2 h-4 w-4" />
            master
          </Button>
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <GitCommit className="h-4 w-4" />
            <span>Last commit: 2h ago</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="space-x-2">
            <Button
              variant={viewType === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewType("list")}
            >
              <List className="mr-2 h-4 w-4" />
              List View
            </Button>
            <Button
              variant={viewType === "graph" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewType("graph")}
            >
              <Network className="mr-2 h-4 w-4" />
              Graph View
            </Button>
          </div>
          <Button variant="outline" size="sm">
            Clone
          </Button>
        </div>

        {viewType === "graph" ? (
          <GraphView />
        ) : (
          <div className="w-full rounded-lg border">
            <div className="bg-muted/50 p-3">
              <div className="flex items-center space-x-2 text-sm">
                <GitBranch className="h-4 w-4" />
                <button
                  type="button"
                  className="hover:underline"
                  onClick={() => {
                    setCurrentPath([]);
                    setSelectedFile(null);
                  }}
                >
                  master
                </button>
                {currentPath.map((path, index) => (
                  <div key={path} className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4" />
                    <button
                      type="button"
                      className="hover:underline"
                      onClick={() => navigateToPath(index + 1)}
                    >
                      {path}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {selectedFile ? (
              <div className="divide-y">
                <div className="bg-muted/50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{selectedFile}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedFile(null)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
                <div className="h-[500px] w-full overflow-auto">
                  <pre className="p-4 text-sm">
                    <code>
                      {typeof currentDir[selectedFile]?.content === "string"
                        ? currentDir[selectedFile].content
                        : ""}
                    </code>
                  </pre>
                </div>
              </div>
            ) : (
              <div className="divide-y">
                {Object.entries(currentDir).map(([name, item]) => (
                  <div
                    key={name}
                    className="flex cursor-pointer items-center justify-between p-3 hover:bg-muted/50"
                    onClick={() => handleItemClick(name, item.type)}
                  >
                    <div className="flex items-center space-x-3">
                      {item.type === "directory" ? (
                        <Folder className="h-4 w-4 text-primary" />
                      ) : (
                        <File className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="font-medium">{name}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                      <span className="hidden md:inline">
                        {item.lastCommit}
                      </span>
                      <span>{item.updated}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
