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

interface Repository {
  rowId: string;
  name: string;
  slug: string;
  description?: string | null;
  visibility: string;
  owner?: {
    rowId: string;
    username: string;
  } | null;
  organization?: {
    rowId: string;
    idpOrganizationId: string;
  } | null;
  outgoingRelationships?: {
    nodes: Array<{
      rowId: string;
      confidence: number;
      versionConstraint?: string | null;
      targetRepository?: {
        rowId: string;
        name: string;
        slug: string;
        owner?: { username: string } | null;
        organization?: { idpOrganizationId: string } | null;
      } | null;
      relationshipType?: {
        rowId: string;
        name: string;
        isDirected: boolean;
      } | null;
    }>;
  } | null;
}

interface GraphViewProps {
  repositories?: Repository[];
  selectedTypes?: string[];
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

function getNodePosition(index: number, total: number) {
  // Arrange nodes in a circular/grid layout
  const cols = Math.ceil(Math.sqrt(total));
  const row = Math.floor(index / cols);
  const col = index % cols;
  const spacing = 200;

  return {
    x: col * spacing + 50,
    y: row * spacing + 50,
  };
}

export function GraphView({
  repositories = [],
  selectedTypes,
}: GraphViewProps) {
  const { nodes, edges } = useMemo(() => {
    if (repositories.length === 0) {
      // Return placeholder data when no repositories
      return {
        nodes: [
          {
            id: "placeholder",
            data: { label: "No repositories with relationships" },
            position: { x: 250, y: 100 },
            className: "bg-muted border-muted-foreground/20",
          },
        ] as Node[],
        edges: [] as Edge[],
      };
    }

    const repoMap = new Map<string, Repository>();
    repositories.forEach((repo) => repoMap.set(repo.rowId, repo));

    // Create nodes for each repository
    const graphNodes: Node[] = repositories.map((repo, index) => {
      const ownerName =
        repo.organization?.idpOrganizationId ?? repo.owner?.username ?? "";
      const label = ownerName ? `${ownerName}/${repo.name}` : repo.name;

      return {
        id: repo.rowId,
        data: {
          label,
          description: repo.description,
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

    // Create edges for each relationship
    const graphEdges: Edge[] = [];
    const seenEdges = new Set<string>();

    repositories.forEach((repo) => {
      const relationships = repo.outgoingRelationships?.nodes ?? [];

      relationships.forEach((rel) => {
        if (!rel.targetRepository) return;

        const typeName = rel.relationshipType?.name ?? "default";

        // Filter by selected types if provided
        if (selectedTypes && selectedTypes.length > 0) {
          if (!selectedTypes.includes(typeName)) return;
        }

        const edgeId = `${repo.rowId}-${rel.targetRepository.rowId}-${typeName}`;

        // Avoid duplicate edges
        if (seenEdges.has(edgeId)) return;
        seenEdges.add(edgeId);

        const isDirected = rel.relationshipType?.isDirected ?? true;
        const colorClass =
          RELATIONSHIP_COLORS[typeName] || RELATIONSHIP_COLORS.default;

        graphEdges.push({
          id: edgeId,
          source: repo.rowId,
          target: rel.targetRepository.rowId,
          animated: true,
          className: colorClass,
          label: typeName,
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
  }, [repositories, selectedTypes]);

  return (
    <div className="h-150 rounded-lg border bg-background">
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
          nodeColor={(node) => {
            if (node.id === "placeholder") return "var(--muted)";
            return "var(--primary)";
          }}
        />
      </ReactFlow>
    </div>
  );
}
