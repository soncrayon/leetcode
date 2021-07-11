const strStr = (haystack, needle) => {
    if (needle.length === 0) {
        return 0 
    }
    for (let i = 0; i < haystack.length; i++){
        if (haystack.substring(i).slice(0,needle.length) === needle) {
            return i
        }
    }
    return -1
}