var str = "5gtycabacihuu";

var longestPalindrome = function(s) {
	if(s.length === 1) return s;
	var maxLength = 0, flag = 0;

	var pointer = function(s, i, j) {
		while(i >= 0 && j < s.length) {
			if(s.charAt(i) === s.charAt(j)) {
				i--;
				j++;
			} else {
				break;
			}	
		}
		if(maxLength < j - i - 1) {
				maxLength = j - i - 1;
				flag = i + 1;
		}
	}

	for(var i = 0; i < s.length; i++) {
		pointer(s, i, i);
		pointer(s, i, i + 1);
	}
	console.log(flag);
	return s.substring(flag, flag + maxLength)
	
};



console.time("time  ");
console.log(longestPalindrome(str));
console.timeEnd("time end");