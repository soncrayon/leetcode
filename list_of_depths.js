const listOfDepths = ( binaryTree ) => {
    const linkedLists = []; 
    const depths = {};
    let root = binaryTree.value; 
    const queue = [ [root, 0 ] ];
    while ( queue.length > 0 ){
        let curr = queue.shift(); 
        depths[curr[1]] ? depths[curr[1]].push(curr) : depths[curr[1]] = [ curr ]; 
        for ( let neighbor of binaryTree[curr]) {
            queue.push([neighbor, curr[1] + 1]); 
        }
    }
    for ( let depth in depths ){
        linkedLists.push( createLL( depth )); 
    }
    return linkedLists; 
}

const createLL = ( arr ) => {
    let head = new LinkedList(arr[0][0]); 
    let curr = head; 
    for ( let i = 1; i < arr.length; i++ ){
        curr.next = new LinkedList(arr[i][0]);
        curr = curr.next; 
    }
    return head; 
}

class LinkedList {
    constructor( value ){
        this.value = value;
        this.next = null; 
    }
}

//

listOfDepths(binaryTree); 