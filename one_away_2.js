// const oneAway = (m, n) => {
//     let i = 0, j = 0, differences = 0;
//     if ( Math.abs(m.length - n.length) > 1 ) {
//         return false; 
//     }
//     const longer = m.length > n.length ? m : n;
//     const shorter = longer === m ? n : m;
//     while ( i < longer.length && j < shorter.length ) {
//         if ( longer[i] !== shorter[j] ) {
//             differences++;
//             if ( longer.length === shorter.length ) {
//                 i++;
//                 j++;
//             } else {
//                 i++;
//             }
//             continue;
//         }
//         i++;
//         j++;
//     }
//     return differences <= 1; 
// }

// console.log(oneAway('pale', 'bale')); 

const graph = {
  a: [ 'b', 'c'],
  b: ['d', 'e'],
  c: ['f', 'g'],
  d: ['h', 'i'],
  e: [],
  f: [],
  g: [],
  h: [],
  i: [], 
}

// this doesn't quite work but the idea is to pass down an updated list of managers to each iteration and then loop through the 
// manager arrays of the two employees at the end to find where they stop matching (then go back one if iterating)--that's the lowest common manager

// alternate approach--depth first search using recursion

const commonManager = ( graph, ceo, employee1, employee2 ) => {
   const managers = [];
    buildManagers( graph, ceo, employee1, employee2, managers, [] );
   const [employee1Managers, employee2Managers] = managers; 
   let i = 0, j = 0; 
   while ( i < employee1Managers.length && j < employee2Managers.length ) {
       if ( employee1Managers[i] !== employee2Managers[j] ){
           break; 
       }
       i++;
       j++;
   }
   return employee1Managers[i - 1]; 
}

const buildManagers = ( graph, currentEmployee, employee1, employee2, managers, currentMangers ) => {
    if (currentEmployee === employee1 || currentEmployee === employee2 ) {
        managers.push(currentMangers); 
    }
    if (graph[currentEmployee].length > 0) {
        currentMangers.push(currentEmployee); 
    }
    for ( const report of graph[currentEmployee] ){
        buildManagers( graph, report, employee1, employee2, managers, currentMangers ); 
    }
}

console.log(commonManager(graph, 'a', 'e', 'i'))