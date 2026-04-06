import { useState } from "react";
import { greedyColoring } from "../utils/graphAlgorithms";
import "../styles/graph.css";

const palette = ["#fffabf", "#89d385", "#6cd1f0", "#a1a1f7", "#efccea"];

export default function GraphVisualizer() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  // 🟢 Add node
  const handleCanvasClick = (e) => {
    if (e.target.tagName === "circle") return;

    const rect = e.currentTarget.getBoundingClientRect();

    const newNode = {
      id: nodes.length,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    setNodes([...nodes, newNode]);
  };

  // 🔵 Create edge
  const handleNodeClick = (id) => {
    if (selectedNode === null) {
      setSelectedNode(id);
    } else {
      if (selectedNode !== id) {
        setEdges([...edges, { u: selectedNode, v: id }]);
      }
      setSelectedNode(null);
    }
  };

  // 🟡 Build graph
  const buildGraph = () => {
    let graph = {};
    nodes.forEach((n) => (graph[n.id] = []));

    edges.forEach((e) => {
      graph[e.u].push(e.v);
      graph[e.v].push(e.u);
    });

    return graph;
  };

  // 🔴 Color graph
  const colorGraph = () => {
    const graph = buildGraph();
    const result = greedyColoring(graph, nodes.length);
    setColors(result);
  };

  // ♻ Reset
  const resetGraph = () => {
    setNodes([]);
    setEdges([]);
    setColors([]);
    setSelectedNode(null);
  };

  return (
    <div className="container">
      
      {/* 🔥 Header */}
      <div className="header">
        <h1>Graph Colouring Visualizer</h1>

        <p>Click anywhere to create nodes • Click two nodes to connect edges</p>
      </div>

      <div className="main">

        {/* 🎮 Sidebar */}
        <div className="sidebar">
          <h3>Controls</h3>

          <button className="btn primary" onClick={colorGraph}>
            🎨 Color Graph
          </button>

          <button className="btn secondary" onClick={resetGraph}>
            ♻ Reset
          </button>

          {/* 📊 Info */}
          <div className="infoBox">
            <p><strong>Nodes:</strong> {nodes.length}</p>
            <p><strong>Edges:</strong> {edges.length}</p>

            {colors.length > 0 && (
              <p>
                <strong>Chromatic No:</strong>{" "}
                {Math.max(...colors) + 1}
              </p>
            )}
          </div>

          {/* 🎨 Legend */}
          <div className="legend">
            <h4>Color Legend</h4>

            {palette.map((color, i) => (
              <div key={i} className="legendItem">
                <span
                  className="colorDot"
                  style={{ background: color }}
                ></span>
                Color {i}
              </div>
            ))}
          </div>
        </div>

        {/* 🖥 Canvas */}
        <div className="canvasContainer">
          <svg
            width="700"
            height="500"
            onClick={handleCanvasClick}
            className="canvas"
          >
            {/* 🔗 Edges */}
            {edges.map((e, i) => {
              const n1 = nodes[e.u];
              const n2 = nodes[e.v];

              return (
                <line
                  key={i}
                  x1={n1.x}
                  y1={n1.y}
                  x2={n2.x}
                  y2={n2.y}
                  stroke="#888"
                  strokeWidth="2"
                />
              );
            })}

            {/* 🔵 Nodes */}
            {nodes.map((node) => (
              <circle
                key={node.id}
                cx={node.x}
                cy={node.y}
                r="20"
                fill={palette[colors[node.id]] || "#555"}
                stroke={selectedNode === node.id ? "#fff" : "#222"}
                strokeWidth="3"
                className="node"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick(node.id);
                }}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}