// debug
const decompressString = (str) => {
	let strArr = str.split('')
	const hashCheck = new Set(...strArr)
	if (!hashCheck.has('[') && !hashCheck.has(']')) return str
	let multiplier = null
	let strBuild = '' 
	let subString = ''
	let bracketOpen = false
	if (hashCheck.has('[') || hashCheck.has(']')) {
	for (let i = 0; i < str.length; i++){
		if (parseInt(str[i]) && multiplier != null) {
	multiplier = str[i]
}
if (str[i] === '['){
	bracketOpen = true 
}
if (str[i] === ']') {
	bracketOpen = false
	subString = dupconcatStr(subString)
}
if (bracketOpen === true){
	strBuild += str[i]
}
}
return decompressString(subString)
}
	
}



const dupconcatStr = (str, multiplier) => {
	if (multiplier === 1) return str
	while (multiplier > 1) {
	    return str + concatStr(str, multiplier - 1)  
    }
}


console.log(decompressString("3[abc]4[ab]c"))