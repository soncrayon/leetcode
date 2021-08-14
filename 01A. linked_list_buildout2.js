class Node {
    constructor(val){
        this.val = val
        this.next = null 
    }
}

class LinkedList {
    constructor(node){
        this.head = node
    }

    traverseAndLog = (curr = this.head) => {
        if (curr.next === null) return curr.val
        if (curr.next != null){
            console.log(curr.val)
            return this.traverseAndLog(curr.next)
        }
    }

    findTail = (curr = this. head) => {
        if (curr.next === null) return curr
        if (curr.next != null){
            return this.findTail(curr.next)
        }
    }

    addNode = (val) => {
        const newNode = new Node(val)
        this.findTail().next = newNode
        return this.head
    }

    addNodeToFront = (val) => {
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        return this.head
    }

    addNodeAfterAnotherNode = (valNew, valAfter) => {
        let newNode = new Node(valNew)
        let valAfterNode = this.findNode(valAfter)
        newNode.next = valAfterNode.next
        valAfterNode.next = newNode
        return this.head

    }

    findNode = (val, curr = this.head) => {
        if (curr === null) return 'value not found'
        if (curr.val === val) return curr
        if (curr.val != val) {
            return this.findNode(val, curr.next)
        }
    }

    deleteNode = (val, curr = this.head) => {
        if (curr.next.val === val) {
            curr.next = curr.next.next
        } else {
            return this.deleteNode(val, curr.next)
        }  
    } 

    reverseList = (curr = this.head) => {
        let prev, temp
        while (curr != null){
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        return prev 
    }


}

const node1 = new Node('look at')
const linkedList1 = new LinkedList(node1)

// console.log(node1)
// linkedList1.traverseAndLog()
linkedList1.addNode('sure')
linkedList1.addNode('thing')
linkedList1.addNode('ok')
linkedList1.deleteNode('ok')
linkedList1.addNode('alright')
linkedList1.addNodeToFront("hey!")
linkedList1.addNodeAfterAnotherNode("this...here!", "look at")

console.log(linkedList1.traverseAndLog())

