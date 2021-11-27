const buildCipher = () => {
    const alphas = 'abcdefghijklmnopqrstuvwxyz';
    const cipher = {};
    for ( let i = 1; i < alphas.length + 1; i++ ){
    cipher[alphas[i - 1]] = i; 
    }
    return cipher; 
}

console.log(buildCipher()); 

