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


const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

depthFirstLogIt(graph, 'a')
console.log('')
depthFirstLogRe(graph, 'a')