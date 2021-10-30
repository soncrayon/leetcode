const sortStack = (stack) => {
    const sortedStack = [ stack.pop() ];
    while ( stack.length !== 0 ){
        let temp = stack.pop(); 
        while ( sortedStack[sortedStack.length - 1] < temp ){
            stack.push(sortedStack.pop()); 
        }
        sortedStack.push(temp); 
    }
    return sortedStack; 
}

const stack = [4, 2, 5, 1, 0, 6, 7, 3];

console.log(sortStack(stack)); 