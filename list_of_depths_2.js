// given a binary tree, generate separate linked lists for the nodes at each level and return as either a hash or array of arrays

//the example input is the binary tree above and so the linked lists would look like the below:

// A --> null
// B --> C --> null
// D --> E --> F --> G --> null
// H --> I --> J --> K --> L --> M --> N --> O --> null 

// can either do a depth or breadth-first traversal on the tree to visit the nodes and build the linked lists
// instantiate a link list class that has value and next attributes
// instantiate a hash to hold the linked lists for each level 
// do a breadth-first traversal since we're building linked list by level--a bit more efficient
// instantiate a queue containing an object with two keys representing the root of the binary tree 
// the first key points to the tree node
// the second key points to the depth of 1 (or 0)
// while the queue is not empty, shift out the queue and set as the current element
// check the result hash for whether the depth (key) exists in the hash
// if not, create a new LL object with the value of the current element
// set the value in the result hash as an object containing a head key and a list key
// initialy the head and list should both be this new LL node
// if the key DOES exist in the result hash, set the current tail's next to the current tree node and set current tree node as the new tail
// continue this process until all the nodes have been visited
// return the LLs for each key in an array or print them to the console

class binaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const root = new binaryTree('a')
root.left = new binaryTree('b')
root.right = new binaryTree('c')
root.left.left = new binaryTree('d')
root.left.left.left = new binaryTree('h')
root.left.left.right = new binaryTree('i')
root.left.right = new binaryTree('e')
root.left.right.left = new binaryTree('j')
root.left.right.right = new binaryTree('k')
root.right.left = new binaryTree('f')
root.right.left.left = new binaryTree('l')
root.right.left.right = new binaryTree('m')
root.right.right = new binaryTree('g')
root.right.right.right = new binaryTree('o')
root.right.right.left = new binaryTree('n')

const listOfDepths = ( tree ) => {
    const result = [], hash = {}, queue = [{node: tree, depth: 1}];
    while ( queue.length > 0 ) {
        let currentNode = queue.shift(); 
        let newLLNode =  new LinkedList(currentNode.node.value);
        if ( hash[currentNode.depth] ) {
            hash[currentNode.depth].tail.next = newLLNode;
            hash[currentNode.depth].tail = newLLNode; 
        } else {
            hash[currentNode.depth] = {
                head: newLLNode,
                tail: newLLNode
            }
        }
        if ( currentNode.node.left !== null ) {
            queue.push({node: currentNode.node.left, depth: currentNode.depth + 1})
        }
        if ( currentNode.node.right !== null ) {
            queue.push({node: currentNode.node.right, depth: currentNode.depth + 1})
        }
    }

    for ( const item in hash ) {
        result.push(hash[item].head);
    }

    return result;
}



console.log(listOfDepths(root)[1]); 