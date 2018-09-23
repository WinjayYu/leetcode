var myAtoi = function(str) {
    let tem = str.trim();
   
    let strNum = '';
    let i = 0;
    let reg = /[0-9]/;
    let charZero = tem.charAt(0);
    let pre = '';
    if(charZero === '-') {
    	pre = '-';
    	tem = tem.substring(1);
    } else if(charZero === '+') {
    	tem = tem.substring(1);
    } else if(!reg.test(charZero)) {
    	return 0;
    }

    let len = tem.length;
    while(i < len) {
    	if(reg.test(tem.charAt(i))) {
    		strNum += tem.charAt(i);
    	} else {
    		break;
    	}
    	i++;
    }
    if(strNum) {
    	strNum = pre + strNum;
    } else {
    	return 0;
    }
    strNum = parseInt(strNum);
    strNum = strNum < Math.pow(-2, 31) ? Math.pow(-2, 31) : strNum;
    strNum = strNum > Math.pow(2, 31) - 1 ? Math.pow(2, 31) -1 : strNum;
    return strNum;
};

console.log(myAtoi("2147483648"));
