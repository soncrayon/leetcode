class BinaryTree {
    constructor(value){
        this.value = value
        this.leftChild = null
        this.rightChild = null 
    }

    insertLeft = (value) => {
        if (this.leftChild == null) {
            this.leftChild = new BinaryTree(value)
        }
        let newNode = new BinaryTree(value)
        newNode.leftChild = this.leftChild
        this.leftChild = newNode
    }

    insertRight = (value) => {
        if (this.rightChild == null) {
            this.rightChild = new BinaryTree(value)
        }
        let newNode = new BinaryTree(value)
        newNode.rightChild = this.rightChild
        this.rightChild = newNode
    }

    preOrder = () => {
        console.log(this.value)
        if (this.leftChild) {
            this.leftChild.preOrder()
        }
        if (this.rightChild) {
            this.rightChild.preOrder()
        }
    }


    // addNewNodeToTree = (treeNode) => {
    //     Object.keys(treeNode).forEach((key) => {
    //         if (!this[key]) {
    //             this[key] = treeNode[key]
    //             // this.addNewNodeToTree(treeNode[key])
    //         }
    //         // set up recursive function to check each level of tree for value and if not add to appropriate level
    //     })
    // }
}

let aNode = new BinaryTree('a')
let bNode = new BinaryTree('b')
let cNode = new BinaryTree('c')
let dNode = new BinaryTree('d')
let eNode = new BinaryTree('e')
let fNode = new BinaryTree('f')
aNode.insertLeft('b')
aNode.insertRight('c')
bNode.insertRight('d')
cNode.insertLeft('e')
cNode.insertRight('f')



console.log(aNode.preOrder())

console.log(cNode.leftChild.value)
