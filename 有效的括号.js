var isValid = function(s) {
    let stack = [];
    let leftReg = /\(|\[|\{/;
    let rightReg = /\)|\]|\}/;

    let map = {
    	')': '(',
    	']': '[',
    	'}': '{'
    }

    let result = true;
    for(let i = 0; i < s.length; i++) {
    	if(leftReg.test(s.charAt(i))) {
    		stack.push(s.charAt(i))
    	}
    	if(rightReg.test(s.charAt(i))) {
    		let k = stack.pop();
    		if(map[s.charAt(i)] !== k) {
    			result = false; 
    		}
    	}
    }
    if(stack.length) {
    	result = false;
    }

    return result;
};

console.log(isValid('()[]{}('))