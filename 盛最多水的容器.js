var arr = [1,8,6,2,5,4,8,3,7];

/**
* 思路：暴力求解
*/
var maxArea = function(height) {
    let min = 0, s = 0;
    let len = height.length;
    if(len === 1) return height(0);
    for(let i = 0; i < len - 1; i++){
    	for(let j = i + 1; j < len; j++) {
    		min = Math.min(height[i], height[j]);
    		let tem =  (j - i) * min;
    		if(s < tem) {
    			s = tem;
    		}
    	}
    }
    return s;
};

/**
* 思路：如果height[i] <  height[j], 此时就不用固定i的位置了，因为此时j继续减小面积只会越来越小.
*/
var maxArea2 = function(height) {
    let max = 0, i = 0;
    let j = height.length - 1;
    if(j === 0) return height(0);

    while(i < j) {
    	max = Math.max(max, (j - i) * Math.min(height[i], height[j]));

    	if(height[i] < height[j]) {
    		i++;
    	} else {
    		j--;
    	}
    }
    
    return max;
};

// console.log(maxArea(arr);
console.log(maxArea2(arr));