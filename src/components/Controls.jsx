import { useState } from "react";

export default function Controls({ addEdge }) {
    const [u, setU] = useState("");
    const [v, setV] = useState("");

    return (
        <div>
            <input placeholder="Node U" onChange={(e) => setU(e.target.value)} />
            <input placeholder="Node V" onChange={(e) => setV(e.target.value)} />

            <button onClick={() => addEdge(Number(u), Number(v))}>
                Add Edge
            </button>
        </div>
    );
}