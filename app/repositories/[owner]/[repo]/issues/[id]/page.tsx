'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AlertCircleIcon, CheckCircleIcon, MessageSquareIcon } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function IssueDetailsPage({
  params,
}: {
  params: { owner: string; repo: string; id: string };
}) {
  const router = useRouter();
  const [comment, setComment] = useState('');

  // Mock issue data - in a real app, this would come from an API
  const issue = {
    id: parseInt(params.id),
    title: 'Improve graph visualization performance',
    status: 'open',
    author: 'johndoe',
    created: '2 days ago',
    description: 'The graph visualization is currently slow when handling large repositories. We need to implement virtualization and optimize the rendering process.',
    labels: ['enhancement', 'performance'],
    comments: [
      {
        id: 1,
        author: 'janedoe',
        content: 'I agree, we should also consider using WebGL for better performance.',
        created: '1 day ago',
      },
      {
        id: 2,
        author: 'johndoe',
        content: "Good suggestion! I'll look into Three.js or similar libraries.",
        created: '12 hours ago',
      },
    ],
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement comment submission
    setComment('');
  };

  return (
    <div className="container max-w-4xl mx-auto px-6 py-6">
      <div className="mb-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              {issue.title}
              <span className="text-xl text-muted-foreground">#{issue.id}</span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                {issue.status === 'open' ? (
                  <AlertCircleIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <CheckCircleIcon className="h-5 w-5 text-purple-500" />
                )}
                <span className="font-medium">{issue.status}</span>
              </span>
              <span className="text-muted-foreground">
                {issue.author} opened this issue {issue.created}
              </span>
            </div>
          </div>
          <Button variant="outline" onClick={() => router.back()}>
            Back to Issues
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border bg-card">
          <div className="p-4 flex items-start gap-4">
            <div className="flex-1">
              <div className="prose dark:prose-invert max-w-none">
                <p>{issue.description}</p>
              </div>
              <div className="mt-4 flex gap-1">
                {issue.labels.map((label) => (
                  <Badge key={label} variant="outline">
                    {label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <MessageSquareIcon className="h-5 w-5" />
            Comments
          </h2>

          <ScrollArea className="h-[400px] rounded-lg border">
            {issue.comments.map((comment) => (
              <div key={comment.id} className="p-4 border-b last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-sm text-muted-foreground">
                    {comment.created}
                  </span>
                </div>
                <p>{comment.content}</p>
              </div>
            ))}
          </ScrollArea>

          <form onSubmit={handleSubmitComment} className="space-y-4">
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Leave a comment..."
              rows={4}
            />
            <div className="flex justify-end">
              <Button type="submit">Comment</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}