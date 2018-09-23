let str = "cdds"

var lengthOfLongestSubstring = function(s) {
	if(s.length === 0) return 0;
	if(s.trim().length === 0) return 1;
	let obj = {}, max = 0;
	for(let i = 0, j = 0; i < s.length; i++) {
		if(obj[s.charAt(i)] !== undefined) {
			j = Math.max(j, obj[s.charAt(i)] + 1);
		}
		obj[s.charAt(i)] = i;
		max = Math.max(max, i - j + 1)
	}
	return max; 
};

console.log(lengthOfLongestSubstring(str));