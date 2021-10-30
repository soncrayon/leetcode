class Stack {
	constructor(number) {
		this.stack = [ {value: number, min: number} ];
}

pop(){
	let poppedNum = this.stack.pop()
	return poppedNum.value; 
}

push(number){
	let peek = this.stack[this.stack.length - 1];
    let currentMin = peek.min; 
	if ( number < currentMin ) {
	this.stack.push({value: number, min: number});
} else {
	this.stack.push({value: number, min: currentMin}); 
}
}

min(){
	let peek = this.stack[this.stack.length - 1]; 
	return peek.min; 
    }
}

const myStack = new Stack(6); 

console.log(myStack); 

myStack.push(3)
myStack.push(-1)
myStack.pop()
myStack.push(8)

console.log(myStack)

console.log(myStack.min()); 
