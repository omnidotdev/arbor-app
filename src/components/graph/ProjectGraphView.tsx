"use client";

import { useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

import type { Edge, Node } from "reactflow";

interface RelationshipEdge {
  rowId: string;
  confidence: number;
  versionConstraint?: string | null;
  relationshipType?: {
    name: string;
    isDirected: boolean;
  } | null;
  targetRepository?: {
    rowId: string;
  } | null;
}

/**
 * A member repository of a project along with its outgoing dependency
 * relationships. Only edges whose target is also a member of the same project
 * are rendered, so the graph stays scoped to the project.
 */
export interface ProjectGraphRepository {
  rowId: string;
  name: string;
  slug: string;
  visibility: string;
  owner?: {
    username: string;
  } | null;
  organization?: {
    idpOrganizationId: string;
  } | null;
  outgoingRelationships: RelationshipEdge[];
}

interface ProjectGraphViewProps {
  repositories: ProjectGraphRepository[];
}

const RELATIONSHIP_COLORS: Record<string, string> = {
  dependency: "stroke-blue-500",
  "api-consumer": "stroke-green-500",
  "data-producer": "stroke-purple-500",
  "shared-library": "stroke-orange-500",
  "deployment-dependency": "stroke-red-500",
  default: "stroke-gray-400",
};

const NODE_COLORS = [
  "bg-blue-100 border-blue-300 dark:bg-blue-900/30 dark:border-blue-700",
  "bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-700",
  "bg-purple-100 border-purple-300 dark:bg-purple-900/30 dark:border-purple-700",
  "bg-orange-100 border-orange-300 dark:bg-orange-900/30 dark:border-orange-700",
  "bg-pink-100 border-pink-300 dark:bg-pink-900/30 dark:border-pink-700",
];

const flowStyles = {
  backgroundColor: "transparent",
};

// Arrange nodes in a square-ish grid layout
function getNodePosition(index: number, total: number) {
  const cols = Math.ceil(Math.sqrt(total));
  const row = Math.floor(index / cols);
  const col = index % cols;
  const spacing = 200;

  return {
    x: col * spacing + 50,
    y: row * spacing + 50,
  };
}

/**
 * ReactFlow graph of a project's member repositories and the dependency
 * relationships between them. Mirrors the styling of the global repository
 * GraphView but is scoped to a single project's members.
 */
export function ProjectGraphView({ repositories }: ProjectGraphViewProps) {
  const { nodes, edges } = useMemo(() => {
    if (repositories.length === 0) {
      return {
        nodes: [
          {
            id: "placeholder",
            data: { label: "No repositories in this project" },
            position: { x: 250, y: 100 },
            className: "bg-muted border-muted-foreground/20",
          },
        ] as Node[],
        edges: [] as Edge[],
      };
    }

    // Only repositories that belong to the project are valid edge endpoints
    const memberIds = new Set(repositories.map((repo) => repo.rowId));

    const graphNodes: Node[] = repositories.map((repo, index) => {
      const ownerName =
        repo.organization?.idpOrganizationId ?? repo.owner?.username ?? "";
      const label = ownerName ? `${ownerName}/${repo.name}` : repo.name;

      return {
        id: repo.rowId,
        data: {
          label,
          visibility: repo.visibility,
        },
        position: getNodePosition(index, repositories.length),
        className: `${NODE_COLORS[index % NODE_COLORS.length]} rounded-lg border-2 px-4 py-2 shadow-sm`,
        style: {
          fontSize: "12px",
          fontWeight: 500,
        },
      };
    });

    const graphEdges: Edge[] = [];
    const seenEdges = new Set<string>();

    repositories.forEach((repo) => {
      repo.outgoingRelationships.forEach((rel) => {
        const target = rel.targetRepository;
        // Keep the graph scoped to project members
        if (!target || !memberIds.has(target.rowId)) return;

        const typeName = rel.relationshipType?.name ?? "default";
        const edgeId = `${repo.rowId}-${target.rowId}-${typeName}`;

        if (seenEdges.has(edgeId)) return;
        seenEdges.add(edgeId);

        const isDirected = rel.relationshipType?.isDirected ?? true;
        const colorClass =
          RELATIONSHIP_COLORS[typeName] || RELATIONSHIP_COLORS.default;

        graphEdges.push({
          id: edgeId,
          source: repo.rowId,
          target: target.rowId,
          animated: true,
          className: colorClass,
          label: rel.versionConstraint
            ? `${typeName} ${rel.versionConstraint}`
            : typeName,
          labelStyle: { fontSize: "10px", fill: "currentColor" },
          labelBgStyle: { fill: "var(--background)", fillOpacity: 0.8 },
          markerEnd: isDirected
            ? {
                type: MarkerType.ArrowClosed,
                width: 20,
                height: 20,
              }
            : undefined,
          style: {
            strokeWidth: Math.max(1, rel.confidence * 2),
          },
        });
      });
    });

    return { nodes: graphNodes, edges: graphEdges };
  }, [repositories]);

  return (
    <div className="h-125 rounded-lg border bg-background">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        style={flowStyles}
        nodesDraggable
        nodesConnectable={false}
        elementsSelectable
      >
        <Background />
        <Controls />
        <MiniMap
          // theme-aware so it does not render as a bright white box in dark mode
          style={{ backgroundColor: "var(--card)" }}
          maskColor="color-mix(in oklch, var(--background) 70%, transparent)"
          nodeStrokeColor="var(--border)"
          nodeColor={(node) => {
            if (node.id === "placeholder") return "var(--muted-foreground)";
            return "var(--primary)";
          }}
        />
      </ReactFlow>
    </div>
  );
}
