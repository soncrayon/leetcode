const reverse_string_recursive = (str) => {
    if ( str.length <= 1 ) {
        return str; 
    }

    return str.charAt(str.length - 1) + reverse_string_recursive(str.substring(0, str.length - 1)); 

}

console.log(reverse_string_recursive('hello'))