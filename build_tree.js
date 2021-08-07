class Tree {
    constructor(){
        {}
    }

    addNewNodeToTree = (treeNode) => {
        Object.keys(treeNode).forEach((key) => {
            if (!this[key]) {
                this[key] = treeNode[key]
                // this.addNewNodeToTree(treeNode[key])
            }
            // set up recursive function to check each level of tree for value and if not add to appropriate level
        })
    }
}

let newTree = new Tree

console.log(newTree)

newTree.addNewNodeToTree({'newNode': [{'just':['testing'], 'how':['works?']}]})
newTree.addNewNodeToTree({'secondNode': [{'just2':['testing2'], 'how2':['works?2']}]})
newTree.addNewNodeToTree({'just2':['colors']})




console.log(newTree)