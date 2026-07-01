"use client";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
} from "reactflow";
import { useTheme } from "next-themes";

const nodeBaseStyle = {
  border: "1px solid",
  padding: "10px 15px",
  borderRadius: "8px",
  fontSize: "12px",
  fontFamily: "var(--font-mono)",
};

const getInitialNodes = (isDark: boolean): Node[] => [
  {
    id: "1",
    position: { x: 0, y: 100 },
    data: { label: "📱 React Client" },
    type: "input",
    style: {
      ...nodeBaseStyle,
      borderColor: isDark ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.5)",
      background: isDark ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.1)",
      color: isDark ? "#34d399" : "#059669",
    },
  },
  {
    id: "2",
    position: { x: 250, y: 100 },
    data: { label: "⚙️ Express REST API" },
    style: {
      ...nodeBaseStyle,
      borderColor: isDark ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.5)",
      background: isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.1)",
      color: isDark ? "#60a5fa" : "#2563eb",
    },
  },
  {
    id: "3",
    position: { x: 500, y: 100 },
    data: { label: "🗄️ MongoDB" },
    type: "output",
    style: {
      ...nodeBaseStyle,
      borderColor: isDark ? "rgba(168, 85, 247, 0.3)" : "rgba(168, 85, 247, 0.5)",
      background: isDark ? "rgba(168, 85, 247, 0.1)" : "rgba(168, 85, 247, 0.1)",
      color: isDark ? "#c084fc" : "#7e22ce",
    },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: '#D4AF37' } },
  { id: "e2-3", source: "2", target: "3", animated: true, style: { stroke: '#D4AF37' } },
];

export default function ArchitectureDiagram() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div style={{ height: "250px" }} className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#050B14]/50">
      <ReactFlow nodes={getInitialNodes(isDark)} edges={initialEdges} fitView proOptions={{ hideAttribution: true }} nodesDraggable={false} nodesConnectable={false} panOnDrag={false} zoomOnScroll={false} zoomOnDoubleClick={false}>
        <Background color={isDark ? "#475569" : "#e2e8f0"} gap={16} />
        <MiniMap pannable />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}