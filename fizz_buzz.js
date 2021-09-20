const fizzBuzz = (arr) => {
    return arr.map((num) => {
        if ( num % 3 === 0 && num % 5 === 0 ) {
            return "FizzBuzz"; 
        } else if ( num % 3 === 0 ){
            return "Fizz"; 
        } else if ( num % 5 === 0 ){
            return "Buzz"; 
        } else {
            return num; 
        }
    })
}

console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])); 