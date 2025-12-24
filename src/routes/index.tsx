import { createFileRoute } from "@tanstack/react-router";

import appConfig from "@/lib/config/app.config";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 font-bold text-4xl">{appConfig.name}</h1>
      <p className="text-muted-foreground">{appConfig.description}</p>
    </div>
  );
}
