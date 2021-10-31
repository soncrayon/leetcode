const minimalTree = ( arr ) => {
    console.log(arr)
	if ( arr.length <= 1) return new BST( arr[0] ); 
	let mid = Math.floor( arr.length / 2); 
    let root = new BST( arr[mid] ); 
    root.left = minimalTree( arr.slice(0, mid) );
    root.right = minimalTree( arr.slice(mid + 1)); 
    return root;
}

class BST {
	constructor( value ) {
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}


console.log(minimalTree([1,2,3,4,5,6,7,8])); 