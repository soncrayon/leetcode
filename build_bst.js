class BST{
	constructor( value ){
		this.value = value;
		this.left = null;
		this.right = null;
	}
	
	insert( value ){
        if ( this.value > value ) {
            if ( this.left === null ){
                this.left = new BST( value ); 
            } else {
                this.left.insert( value );
            }
        } else if ( this.value <= value ){
            if (this.right === null ){
                this.right = new BST( value );
            } else {
                this.right.insert( value ); 
            }
        }
    }
	
}

const myBST = new BST(10); 

myBST.insert(4); 
myBST.insert(2);
myBST.insert(15);
myBST.insert(9);
myBST.insert(1);
myBST.insert(3);

console.log(myBST)