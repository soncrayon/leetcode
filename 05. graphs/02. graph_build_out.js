// iterative depth first using stack (LIFO)
const depthFirstSearch = (graph, src) => {
    const stack = [ src ]

    while (stack.length > 0) {
        const current = stack.pop()
        console.log(current)
        for (let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
    
}

// recursive depth first
const depthFirstRecursive = (graph, src) => {
    console.log(src)
    for (let neighbor of graph[src]){
        depthFirstRecursive(graph, neighbor)
    }
}

// breadth first search using a queue (FIFO)
const breadthFirstSearch = (graph, src) => {
    const queue = [ src ]
    while (queue.length > 0) {
        const current = stack.shift()
        console.log(current)
        for (let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
}

// no recursive solution for breadth first search b/c recursion will always use a stack

// set up adjacency list to represent graph
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// depthFirstSearch(graph, 'a')
// depthFirstRecursive(graph, 'a')
breadthFirstSearch(graph, 'a')