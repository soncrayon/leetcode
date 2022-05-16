// const minimalTree = ( arr ) => {
//     if ( arr.length === 0 ) return null; 
//     if ( arr.length === 1 ) return new BSTNode (arr[0]);
//     let start = 0, end = arr.length - 1;
//     let middle = Math.floor( (start + end) / 2 );
//     let currentParentNode = new BSTNode (arr[middle]); //TODO
//     currentParentNode.left = minimalTree(arr.slice(0, middle));
//     currentParentNode.right = minimalTree(arr.slice(middle + 1));
//     return currentParentNode; 
// }

// class BSTNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null; 
//     }
// }

// const arr = [2, 3, 5, 6, 8, 9, 11, 20];

// console.log(minimalTree(arr)); 

const graph = {
    a: ['i', 'b'],
    b: ['c'],
    c: ['i', 'd'],
    d: ['e'],
    e: [],
    f: ['g'],
    g: ['h'],
    h: [],
    i: ['c']
}

const routeBetweenNodes = ( graph, start, end ) => {
    const queue = [ start ];
    const visited = new Set(); 
    while ( queue.length > 0 ) {
        let currentNode = queue.shift();
        if ( currentNode === end ) {
            return true; 
        }
        for ( const child of graph[currentNode] ) {
            if ( !visited.has(child) ) {
                queue.push(child); 
            }
        }
        visited.add(currentNode); 
    }
    return false; 
}

console.log(routeBetweenNodes(graph, 'a', 'h'))
console.log(routeBetweenNodes(graph, 'e', 'i'))
console.log(routeBetweenNodes(graph, 'b', 'i'))
console.log(routeBetweenNodes(graph, 'b', 'e'))
console.log(routeBetweenNodes(graph, 'i', 'c'))
console.log(routeBetweenNodes(graph, 'c', 'h'))