const buildAdjacency = (edges) => {
    const adjacency = {}; 
    for ( let i = 0; i < edges.length; i++ ){
        for ( let edge of edges[i] ) {
            if (adjacency[i]) {
                adjacency[i].push(edge);
            } else {
                adjacency[i] = [ edge ]; 
            }
        }
        if ( !adjacency[i] ) adjacency[i] = []; 
    }
    return adjacency; 
}

const findCycle = ( adjacency ) => {
    const seen = new Set(); 
    let hasCycle = dfs ( adjacency, '0', seen );
    return hasCycle; 
}

const dfs = ( adjacency, node, seen ) => {
    const stack = [ node ];
    while ( stack.length > 0 ) {
        console.log(stack)
        const curr = stack.pop(); 
        if ( seen.has (curr)) {
            return true;
            break; 
        } 
        seen.add(String(curr)); 
        for ( neighbor of adjacency[node]){
            stack.push(neighbor); 
        }
    }
    return false;
}

const edges = [
      [1, 3],
      [2, 3, 4],
      [0],
      [],
      [2, 5],
      []
    ]; 

console.log(findCycle( buildAdjacency(edges)));  

