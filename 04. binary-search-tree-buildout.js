class BinarySearchTreeNode {
    constructor (val) {
        this.val = val
        this.left = null
        this.right = null 
    }
}

class BinarySearchTree {
    constructor (node) {
        this.root = node
    }

    addNode = ( val, tail = this.root ) => {
        if ( val <= tail.val && tail.left ) {
            tail = tail.left
            this.addNode ( val, tail )
        } else if ( val <= tail.val ) {
            tail.left = new BinarySearchTreeNode ( val )
        } else if ( val > tail.val && tail.right) {
            tail = tail.right
            this.addNode ( val, tail )
        } else {
            tail.right = new BinarySearchTreeNode ( val )
        }
        return this.root
    }

    findNode = ( val, tail = this.root ) => {
        if ( val === tail.val ) return tail 
        if ( val <= tail.val && tail.left ) { 
            tail = tail.left
            return this.findNode ( val, tail )
        } else if (val > tail.val && tail.right) {
            tail = tail.right
            return this.findNode ( val, tail )
        }   
    }

    nodeExists = ( val ) => {
         return this.findNode( val ) ? true : false   
     }

}

const binaryTree1 = new BinarySearchTree ( new BinarySearchTreeNode(9) )
binaryTree1.addNode( 8 ) 
binaryTree1.addNode(15)
binaryTree1.addNode(4)

console.log(binaryTree1.nodeExists(7))
