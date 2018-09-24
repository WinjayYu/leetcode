// 未完成
var threeSum = function(nums) {
    let sorted = nums.sort((a, b) => a - b);
    let result = [];

    let i = 0;
    let j;
    let k = sorted.length - 1;
    let sum;

    while(i < sorted.length - 2) {
    	// if(sorted[i] === sorted[i + 1]) i++;
    	j = i + 1;
        k =  sorted.length - 1;
    	sum = 0 - sorted[i];
    	while(j < k) {
            if(sorted[j] == sorted[j + 1]){
                console.log(j)
                j++;
            } else {
               if(sorted[j] + sorted[k] == sum) {
                    result.push([sorted[i], sorted[j], sorted[k]]);
                    j++;
                    k =  sorted.length - 1;
                } else {
                    k--;
                } 
            }
    		
    	}
    	i++;
    }
   return result;
};

console.log(threeSum( [-1,0,1,2,-1,-4]))
// [-4, -1, -1, 0, 1, 2]