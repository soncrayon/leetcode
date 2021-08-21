const lengthOfLongestSubstring = (s) => {
	if ( s.length === 0 ) return 0;
    let longestSubstr = 0; 
	const substring = []
	substring.push(s.charAt(0)); 
	let i = 0, j = 1; 
	while ( j < s.length) {
        while ( substring.includes(s.charAt(j)) ) {
            substring.shift()
            i++
        }
        substring.push(s.charAt(j)); 
        j++; 
        if ( substring.length > longestSubstr ) {
            longestSubstr = substring.length;
        }
    }
	return Math.max( longestSubstr, substring.length);
}