const calculator = ( str ) => {
    const stack1 = str.split(''); 
    const stack2 = []; 
    const operator = ['+', '-', '*', '/']; 
    
    while ( stack1.length > 0 ){
        let curr = stack1.shift(); 
        console.log(stack2)
        if ( operator.indexOf(curr) !== -1 ) {
           
          
            let firstNum = stack1.shift();
            let secondNum = stack2.pop(); 
            if ( curr === "*" ){
                stack2.push(firstNum * secondNum);
            } else  if ( curr === "/" ){
                stack2.push(firstNum / secondNum);
            } else  if ( curr === "+" ){
                stack2.push(firstNum + secondNum);
            } else  if ( curr === "-" ){
                stack2.push(firstNum - secondNum);
            }
        } else {
            stack2.push( curr ); 
        }
    }
    return stack2[stack2.length - 1]; 
}

console.log(calculator('2*3+5/6*3+15'));