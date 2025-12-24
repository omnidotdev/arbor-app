"use client";

import { useCallback } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";

import type { Edge, Node } from "reactflow";

const initialNodes: Node[] = [
  {
    id: "main-repo",
    data: { label: "Arbor Core" },
    position: { x: 250, y: 0 },
    className: "bg-primary/10 border-primary/20",
  },
  {
    id: "frontend",
    data: { label: "Web Interface" },
    position: { x: 100, y: 100 },
    className: "bg-chart-1/10 border-chart-1/20",
  },
  {
    id: "api",
    data: { label: "API Service" },
    position: { x: 400, y: 100 },
    className: "bg-chart-2/10 border-chart-2/20",
  },
  {
    id: "docs",
    data: { label: "Documentation" },
    position: { x: 250, y: 200 },
    className: "bg-chart-3/10 border-chart-3/20",
  },
  {
    id: "utils",
    data: { label: "Utilities" },
    position: { x: 100, y: 300 },
    className: "bg-chart-4/10 border-chart-4/20",
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "main-repo",
    target: "frontend",
    animated: true,
    className: "stroke-chart-1",
  },
  {
    id: "e1-3",
    source: "main-repo",
    target: "api",
    animated: true,
    className: "stroke-chart-2",
  },
  {
    id: "e2-4",
    source: "frontend",
    target: "docs",
    animated: true,
    className: "stroke-chart-3",
  },
  {
    id: "e3-4",
    source: "api",
    target: "docs",
    animated: true,
    className: "stroke-chart-3",
  },
  {
    id: "e2-5",
    source: "frontend",
    target: "utils",
    animated: true,
    className: "stroke-chart-4",
  },
  {
    id: "e3-5",
    source: "api",
    target: "utils",
    animated: true,
    className: "stroke-chart-4",
  },
];

const flowStyles = {
  backgroundColor: "transparent",
};

export function GraphView() {
  const onNodesChange = useCallback(() => {}, []);
  const onEdgesChange = useCallback(() => {}, []);

  return (
    <div className="h-[600px] rounded-lg border bg-background">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        style={flowStyles}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
