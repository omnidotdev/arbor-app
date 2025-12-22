'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { GitBranchIcon, SearchIcon, UserCircle } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-6 flex h-14 items-center">
        <div className="flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GitBranchIcon className="h-6 w-6" />
            <span className="font-bold">GitMesh</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/repositories"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/repositories")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Repositories
            </Link>
          </nav>
        </div>
        <div className="flex-1" />
        <div className="flex items-center justify-end space-x-2">
          <Button variant="ghost" size="icon">
            <SearchIcon className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <UserCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}