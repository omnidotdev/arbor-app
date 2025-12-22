'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GitBranchIcon, SearchIcon, StarIcon, NetworkIcon, ListIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import dynamic from 'next/dynamic';

const GraphView = dynamic(() => import('@/components/graph-view'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] items-center justify-center bg-muted/50">
      Loading graph view...
    </div>
  ),
});

export default function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewType, setViewType] = useState<'list' | 'graph'>('list');
  const [starredRepos, setStarredRepos] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('starredRepos');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
    return new Set();
  });
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('starredRepos', JSON.stringify([...starredRepos]));
    }
  }, [starredRepos]);

  const toggleStar = (owner: string, name: string) => {
    const repoKey = `${owner}/${name}`;
    const isStarred = starredRepos.has(repoKey);

    if (isStarred) {
      setStarredRepos(prev => {
        const next = new Set(prev);
        next.delete(repoKey);
        return next;
      });

      toast({
        description: `Unstarred ${repoKey}`,
      });
    } else {
      setStarredRepos(prev => new Set(prev).add(repoKey));

      toast({
        description: `Starred ${repoKey}`,
      });
    }
  };

  // Example repositories data
  const repositories = [
    {
      owner: 'example',
      name: 'project-one',
      description: 'A sample repository to demonstrate the UI',
      stars: 128,
      lastUpdated: '2024-03-20',
    },
    {
      owner: 'demo',
      name: 'awesome-app',
      description: 'Another example repository with some sample content',
      stars: 256,
      lastUpdated: '2024-03-19',
    },
  ];

  return (
    <div className="container max-w-5xl mx-auto py-6 px-6">
      <div className="mb-6 space-y-4">
        <h1 className="text-3xl font-bold">Your Repositories</h1>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Find a repository..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
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
          <Button>
            <GitBranchIcon className="mr-2 h-4 w-4" />
            New
          </Button>
        </div>
      </div>

      {viewType === 'graph' ? (
        <GraphView />
      ) : (
        <div className="space-y-4">
          {repositories.map((repo) => (
            <div
              key={`${repo.owner}/${repo.name}`}
              className="rounded-lg border bg-card p-4"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <Link
                    href={`/repositories/${repo.owner}/${repo.name}`}
                    className="text-xl font-semibold hover:underline"
                  >
                    {repo.owner}/{repo.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {repo.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleStar(repo.owner, repo.name)}
                >
                  <StarIcon
                    className={`mr-2 h-4 w-4 ${
                      starredRepos.has(`${repo.owner}/${repo.name}`)
                        ? "fill-primary"
                        : ""
                    }`}
                  />
                  {starredRepos.has(`${repo.owner}/${repo.name}`)
                    ? "Starred"
                    : "Star"}
                </Button>
              </div>
              <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <StarIcon className="mr-1 h-4 w-4" />
                  {repo.stars}
                </div>
                <div>Updated {repo.lastUpdated}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}