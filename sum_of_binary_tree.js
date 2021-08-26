const sumBinaryTree = (root) => {
    if (root === null) return 0; 

    const leftSum = sumBinaryTree(root.left); 
    const rightSum = sumBinaryTree(root.right);

    return root.val + leftSum + rightSum; 
}


const maxHeightBinaryTree = (root) => {
    if (root === null) return 0; 

    const leftHeight = maxHeightBinaryTree(root.left);
    const rightHeight = maxHeightBinaryTree(root.right);

    return 1 + Math.max(leftHeight, rightHeight)
}

const valueExistsInTree = (root, value) => {
    if (root === null) return false; 

    const existLeft = valueExistsInTree(root.left, value);
    const existRight = valueExistsInTree(root.right, value);

    return root === value || existLeft || existRight; 

}

const reverseBinaryTree = (root) => {
    if (root === null) return null;

    reverseBinaryTree(root.left);
    reverseBinaryTree(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp; 

}
