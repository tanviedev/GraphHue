export function greedyColoring(graph, V) {
  const result = new Array(V).fill(-1);
  result[0] = 0;

  for (let u = 1; u < V; u++) {
    let used = new Array(V).fill(false);

    for (let neighbor of graph[u]) {
      if (result[neighbor] !== -1) {
        used[result[neighbor]] = true;
      }
    }

    let color;
    for (color = 0; color < V; color++) {
      if (!used[color]) break;
    }

    result[u] = color;
  }

  return result;
}