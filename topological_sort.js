const topological_sort = function(vertices, edges) {
    sortedOrder = [];
    const graph = buildGraph(edges); 
    const seen = new Set(); 
    for ( itm in graph ){
      buildSortedOrder( graph, itm, sortedOrder, seen ); 
    }
    return sortedOrder;
  };
  
  const buildSortedOrder = ( graph, curr, sortedOrder, seen ) => {
   if ( seen.has(curr) ) return; 
   seen.add(curr); 
   sortedOrder.push(curr); 
   if (graph[curr] === undefined ) return; 
   for ( let child of graph[curr] ){
     buildSortedOrder( graph, child, sortedOrder, seen ); 
   }
  }
  
  const buildGraph = (edges) => {
    const graph = {};
    for ( let i = 0; i < edges.length; i++ ) {
      graph[edges[i][0]] ? graph[edges[i][0]].push(edges[i][1]) : graph[edges[i][0]] = [edges[i][1]]; 
    }
    return graph; 
}