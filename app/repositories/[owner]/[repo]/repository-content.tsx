'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GitBranchIcon, GitCommitIcon, ListIcon, NetworkIcon, CircleIcon, AlertCircleIcon, CheckCircleIcon, GitPullRequestIcon, FolderIcon, FileIcon, ChevronRightIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Highlight } from 'prism-react-renderer';
import { useRouter } from 'next/navigation';

const GraphView = dynamic(() => import('@/components/graph-view'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] items-center justify-center bg-muted/50">
      Loading graph view...
    </div>
  ),
});

export default function RepositoryContent({
  params,
}: {
  params: { owner: string; repo: string };
}) {
  const [viewType, setViewType] = useState<'list' | 'graph'>('list');
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const fileSystem = {
    src: {
      type: 'directory',
      content: {
        'components': {
          type: 'directory',
          content: {
            'Button.tsx': {
              type: 'file',
              content: 'export function Button() {\n  return <button>Click me</button>;\n}',
              lastCommit: 'Add button component',
              updated: '2 days ago'
            }
          },
          lastCommit: 'Update component structure',
          updated: '2 days ago'
        },
        'App.tsx': {
          type: 'file',
          content: 'import { Button } from "./components/Button";\n\nexport function App() {\n  return (\n    <div>\n      <h1>Hello World</h1>\n      <Button />\n    </div>\n  );\n}',
          lastCommit: 'Initial commit',
          updated: '3 days ago'
        }
      },
      lastCommit: 'Update component structure',
      updated: '2 days ago'
    },
    tests: {
      type: 'directory',
      content: {
        'App.test.tsx': {
          type: 'file',
          content: 'import { render } from "@testing-library/react";\nimport { App } from "../src/App";\n\ntest("renders hello world", () => {\n  const { getByText } = render(<App />);\n  expect(getByText("Hello World")).toBeInTheDocument();\n});',
          lastCommit: 'Add tests',
          updated: '3 days ago'
        }
      },
      lastCommit: 'Add integration tests',
      updated: '3 days ago'
    },
    'README.md': {
      type: 'file',
      content: '# Example Repository\n\nThis is an example repository showing the file structure.',
      lastCommit: 'Update documentation',
      updated: '1 day ago'
    },
    'package.json': {
      type: 'file',
      content: '{\n  "name": "example",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.0.0"\n  }\n}',
      lastCommit: 'Bump dependencies',
      updated: '5 days ago'
    },
    'tsconfig.json': {
      type: 'file',
      content: '{\n  "compilerOptions": {\n    "strict": true\n  }\n}',
      lastCommit: 'Enable strict mode',
      updated: '1 week ago'
    }
  };

  const getCurrentDirectory = useCallback(() => {
    let current: any = fileSystem;
    for (const path of currentPath) {
      current = current[path].content;
    }
    return current;
  }, [currentPath]);

  const handleItemClick = (name: string, type: 'file' | 'directory') => {
    if (type === 'directory') {
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

  return (
    <div className="container max-w-7xl mx-auto px-6 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          {params.owner}/{params.repo}
        </h1>
        <div className="mt-4 flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <GitBranchIcon className="mr-2 h-4 w-4" />
            master
          </Button>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <GitCommitIcon className="h-4 w-4" />
            <span>Last commit: 2h ago</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="code" className="space-y-4">
        <TabsList>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="prs">Pull Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="code" className="w-full space-y-4">
          <div className="flex justify-between">
            <div className="space-x-2">
              <Button
                variant={viewType === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewType('list')}
              >
                <ListIcon className="mr-2 h-4 w-4" />
                List View
              </Button>
              <Button
                variant={viewType === 'graph' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewType('graph')}
              >
                <NetworkIcon className="mr-2 h-4 w-4" />
                Graph View
              </Button>
            </div>
            <Button variant="outline" size="sm">
              Clone
            </Button>
          </div>

          {viewType === 'graph' ? (
            <GraphView />
          ) : (
            <div className="w-full rounded-lg border">
              <div className="p-3 bg-muted/50">
                <div className="flex items-center space-x-2 text-sm">
                  <GitBranchIcon className="h-4 w-4" />
                  <button
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
                      <ChevronRightIcon className="h-4 w-4" />
                      <button
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
                  <div className="p-4 bg-muted/50">
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
                  <ScrollArea className="h-[500px] w-full">
                    <pre className="p-4 text-sm">
                      <Highlight
                        code={getCurrentDirectory()[selectedFile].content}
                        language={selectedFile.endsWith('.tsx') ? 'tsx' : selectedFile.endsWith('.json') ? 'json' : 'markdown'}
                      >
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                          <code className={className} style={style}>
                            {tokens.map((line, i) => (
                              <div key={i} {...getLineProps({ line })}>
                                {line.map((token, key) => (
                                  <span key={key} {...getTokenProps({ token })} />
                                ))}
                              </div>
                            ))}
                          </code>
                        )}
                      </Highlight>
                    </pre>
                  </ScrollArea>
                </div>
              ) : (
                <div className="divide-y">
                  {Object.entries(getCurrentDirectory()).map(([name, item]: [string, any]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between p-3 hover:bg-muted/50 cursor-pointer"
                      onClick={() => handleItemClick(name, item.type)}
                    >
                      <div className="flex items-center space-x-3">
                        {item.type === 'directory' ? (
                          <FolderIcon className="h-4 w-4 text-primary" />
                        ) : (
                          <FileIcon className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="font-medium">{name}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="hidden md:inline">{item.lastCommit}</span>
                        <span>{item.updated}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="issues" className="w-full space-y-4">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-2xl font-semibold mb-2">Issues Coming Soon</h3>
            <p className="text-muted-foreground">
              We're working hard to bring you a full-featured issue tracking system.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="prs" className="w-full space-y-4">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-2xl font-semibold mb-2">Pull Requests Coming Soon</h3>
            <p className="text-muted-foreground">
              We're working hard to bring you a full-featured pull request system.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}