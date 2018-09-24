var longestCommonPrefix = function(strs) {
    let prefix = '';
    let len = strs.length;
    if(len === 0) return '';
    let i = 0, j = 0;
    let tem = strs[0].charAt(0);
    while(i < len) {
    	if(strs[i].charAt(j) === tem){
    		if(!strs[i].charAt(j)) {
    			break;
    		}
    		if(i === len - 1) {
    			prefix += strs[i].charAt(j);
    		}
    	} else {
    		break;
    	}
    	i++;
    	if(i === len) {
    		i = 0; 
    		j++;
    		tem = strs[i].charAt(j);
    	}
    }
    return prefix;
};

console.log(longestCommonPrefix(['']))