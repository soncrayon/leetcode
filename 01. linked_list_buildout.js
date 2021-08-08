//create head for linked list and Node class

class LinkedList {
  constructor(h) {
    this.head = h;
  }

  addNodeToFront = (d) => {
    let newNode = new Node(d);
    newNode.next = this.head;
    this.head = newNode;
  };

  addNodeAfterAnotherNode = (previousNode, d) => {
    if (previousNode == null) {
      return;
    }

    let newNode = new Node(d);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
  };

  addNodeToBack = (d) => {
    const traverseList = (node) => {
      if (node.next != null) {
        node = node.next;
        return traverseList(node);
      } else {
        return node;
      }
    };
    let newNode = new Node(d);
    let lastNode = traverseList(this.head);
    lastNode.next = newNode;
  };

  findNode = (d) => {
      const traverseList = (node) => {
          if (node.data != d) {
              return traverseList(node.next)
          } else {
              return node
          }
      }
      return traverseList(this.head)
  }

  deleteNode = (nodeToDelete) => {
      const traverseList = (node) => {
          if (node.next != nodeToDelete) {
              return traverseList(node.next)
          } else {
              return node
          }
      }
      let referenceNode = traverseList(this.head)
      return referenceNode.next = nodeToDelete.next 
  }
}

class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

let head = new Node ('a')
let linkedList = new LinkedList(head)
linkedList.addNodeToBack('c')
linkedList.addNodeToBack('e')
linkedList.addNodeToBack('g')
linkedList.addNodeAfterAnotherNode(linkedList.findNode('a'), 'b')
linkedList.addNodeAfterAnotherNode(linkedList.findNode('c'), 'd')
linkedList.addNodeAfterAnotherNode(linkedList.findNode('e'), 'f')

linkedList.deleteNode(linkedList.findNode('e'))


console.log(linkedList.findNode('d'))


