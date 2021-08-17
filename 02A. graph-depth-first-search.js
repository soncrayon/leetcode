// iterative

const depthFirstLogIt = (graph, source) => {
    const stack = [ source ]
    while (stack.length > 0){
        const current = stack.pop()
        console.log(current)
        for (let neighbor of graph[current]){
            stack.push(neighbor)
        }

    }
}

// recursive
const depthFirstLogRe = (graph, source) => {
    console.log(source)
    for (let neighbor of graph[source]){
        depthFirstLogRe(graph, neighbor)
    }
}

// recursive
const depthFirstPath = (graph, src, dst) => {
    if (src === dst) return true
    for (let neighbor of graph[src]) {
        if (depthFirstPath(graph, neighbor, dst) === true) return true 
    }
    return false 
} 

// must be iterative
const breadthFirstPath = (graph, src, dst) => { 
    const queue = [ src ]
    while ( queue.length > 0 ) { 
        const current = queue.shift()
        if ( current === dst) return true
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
    return false
}


const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
    j: []
}

// returns false
console.log(depthFirstPath(graph, 'a', 'j'))

// returns true
console.log(breadthFirstPath(graph, 'a', 'f'))

