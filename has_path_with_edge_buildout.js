const validPath = (edges, start, end) => {
    const graph = buildGraph(edges);
    const visited = new Set(); 
   return hasPath(graph, start, end, visited); 
};


const hasPath = (graph, start, end, visited) => {
    if (start === end) return true; 
    if (visited.has(start)) return false;
    visited.add(start); 
     for ( let neighbor of graph[start] ) {
        if (hasPath(graph, neighbor, end, visited) === true) {
            return true; 
        }
    }
    return false; 
}

const buildGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        graph[a] ? graph[a].push(b) : graph[a] = [b]; 
        graph[b] ? graph[b].push(a) : graph[b] =[a]; 
    }
    return graph; 
}