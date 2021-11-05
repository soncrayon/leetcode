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

//refactor with sliding window below


 const lengthOfLongestSubstring = (s) => {
    const hash = {}; 
    let longestStringLength = -Infinity; 
    let windowStart = 0; 
    for ( let windowEnd = 0; windowEnd < s.length; windowEnd++ ){
        hash[s[windowEnd]] ? hash[s[windowEnd]] ++ : hash[s[windowEnd]] = 1; 
        while ( hash[s[windowEnd]] > 1 && windowStart < windowEnd ){
            longestStringLength = Math.max ( longestStringLength, windowEnd - windowStart); 
            hash[s[windowStart]]--; 
            windowStart++;
        }
        longestStringLength = Math.max ( longestStringLength, windowEnd - windowStart + 1); 
    }
    return longestStringLength === -Infinity ? 0 : longestStringLength; 
};