const edges = [
    ['a', 'e'],
    ['b', 'e'],
    ['d', 'e'],
    ['c', 'a'],
    ['e', 'g']
]

const buildAdjacency = (edges) => {
    const adjacency = {}
    for (edge of edges){
        adjacency[edge[0]] ? adjacency[edge[0]].push(edge[1]) : adjacency[edge[0]] = [ edge[1] ]
        adjacency[edge[1]] ? adjacency[edge[1]].push(edge[0]) : adjacency[edge[1]] = [ edge[0] ]
    }
    return adjacency
}

console.log(buildAdjacency(edges))