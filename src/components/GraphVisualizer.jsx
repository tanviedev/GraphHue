import { useState } from "react";
import { greedyColoring } from "../utils/graphAlgorithms";

const palette = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#5f27cd", "#48dbfb"];

export default function GraphVisualizer() {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [colors, setColors] = useState([]);

    // ➕ Add Node
    const addNode = () => {
        const newNode = {
            id: nodes.length,
            x: Math.random() * 500,
            y: Math.random() * 400
        };
        setNodes([...nodes, newNode]);
    };

    // 🔗 Add Edge
    const addEdge = (u, v) => {
        setEdges([...edges, { u, v }]);
    };

    // 🎨 Color Graph
    const colorGraph = () => {
        let graph = {};
        nodes.forEach(n => graph[n.id] = []);

        edges.forEach(e => {
            graph[e.u].push(e.v);
            graph[e.v].push(e.u);
        });

        const result = greedyColoring(graph, nodes.length);
        setColors(result);
    };

    return (
        <div>
            <h2>Graph Colouring Visualizer</h2>

            <button onClick={addNode}>Add Node</button>
            <button onClick={colorGraph}>Color Graph</button>

            <svg width="600" height="500">
                {/* Edges */}
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
                            stroke="#aaa"
                        />
                    );
                })}

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <circle
                        key={i}
                        cx={node.x}
                        cy={node.y}
                        r="20"
                        fill={palette[colors[i]] || "#ccc"}
                    />
                ))}
            </svg>
        </div>
    );
}