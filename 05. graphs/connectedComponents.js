const connectedComponents = (graph) => {
    let count = 0
    const visited = new Set()
    for (let node in graph){
        if(explore(graph, node, visited) === true) count++
    }
    return count 
}

const explore = (graph, curr, visited ) => {
    if (visited.has(curr)) return false
    visited.add(curr)
    for (let neighbor of graph[curr]) {
        explore (graph, neighbor, visited)
    }
    return true
}