import RepositoryContent from './repository-content';

// This function is required for static site generation
export function generateStaticParams() {
  // Generate static pages for example repositories
  return [
    { owner: 'example', repo: 'project-one' },
    { owner: 'demo', repo: 'awesome-app' }
  ];
}

export default function RepositoryPage({
  params,
}: {
  params: { owner: string; repo: string };
}) {
  return <RepositoryContent params={params} />;
}