// in order tree traversal (LEFT, ROOT, RIGHT)

const inOrderTraversal = (root) => {
    root.left && inOrderTraversal(root.left); 
    console.log(root.val); 
    root.right && inOrderTraversal(root.right); 
}

// pre-order tree traversal (ROOT, LEFT, RIGHT)

const preOrderTraversal = (root) => {
    console.log(root.val); 
    root.left && preOrderTraversal(root.left); 
    root.right && preOrderTraversal(root.right); 
}

// post-order tree traversal (LEFT, RIGHT, ROOT)

const postOrderTraversal = (root) => {
    root.left && postOrderTraversal(root.left); 
    root.right && postOrderTraversal(root.right);
    console.log(root.val); 
}



// the below have the same function names but I'm assuming an empty input array to be return with traversed tree nodes 
const inOrderTraversal = (root, array) => {
    if ( !root ) return; 
    array.push(inOrderTraversal(root.left, array));
    array.push(inOrderTraversal(root, array));
    array.push(inOrderTraversal(root.right, array);
    return array; 

}

// pre-order tree traversal (ROOT, LEFT, RIGHT)

const preOrderTraversal = (root) => {
    console.log(root.val); 
    root.left && preOrderTraversal(root.left); 
    root.right && preOrderTraversal(root.right); 
}

// post-order tree traversal (LEFT, RIGHT, ROOT)

const postOrderTraversal = (root) => {
    root.left && postOrderTraversal(root.left); 
    root.right && postOrderTraversal(root.right);
    console.log(root.val); 
}

