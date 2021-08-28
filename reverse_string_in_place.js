const reverseString = (str) => {
    str = str.split('');
    let i = 0, j = str.length - 1; 
    while ( j > i ){
        let temp = str[i]; 
        str[i] = str[j]; 
        str[j] = temp; 
        i++;
        j--; 
    }
    return str.join('')
}

console.log(reverseString("camouflage"));  