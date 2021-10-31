const listOfDepths = ( binaryTree ) => {
    let root = binaryTree.root; 
    const queue = [ root ];
    while ( queue.length > 0 ){
        let curr = queue.shift(); 
        for ( let neighbor of binaryTree[curr]) {
            queue.push(neighbor); 
        }
    }
}