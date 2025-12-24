import { Link, createFileRoute } from "@tanstack/react-router";
import { KanbanSquare, Plus, Search } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

const projects = [
  {
    name: "Website Redesign",
    description: "Redesigning the company website with modern UI/UX",
    status: "In Progress",
    lastUpdated: "2024-03-20",
    progress: 65,
  },
  {
    name: "Mobile App Development",
    description: "Native mobile application for iOS and Android",
    status: "Planning",
    lastUpdated: "2024-03-19",
    progress: 25,
  },
];

function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container py-6">
      <div className="mb-6 space-y-4">
        <h1 className="font-bold text-3xl">Projects</h1>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-lg border bg-card p-4 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <Link
                  to="/projects"
                  className="font-semibold text-xl hover:underline"
                >
                  {project.name}
                </Link>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
              <KanbanSquare className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-muted-foreground text-sm">
                <span>{project.status}</span>
                <span>Updated {project.lastUpdated}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
