var threeSum = function(nums) {
    let sorted = nums.sort((a, b) => a - b);
    let result = [];

    let i = 0;
    let j;
    let k = sorted.length - 1;
    let sum;

    while(i < sorted.length - 2) {
    	while(i > 0 && sorted[i] === sorted[i - 1]) i++;
    	j = i + 1;
        k =  sorted.length - 1;
    	sum = 0 - sorted[i];
    	while(j < k) {
           if(sorted[j] + sorted[k] == sum) {
                result.push([sorted[i], sorted[j], sorted[k]]);
                while(sorted[j] == sorted[j + 1]) j++;
                while(sorted[k] == sorted[k - 1]) k--;
                k--;
                j++;
            } else if(sorted[j] + sorted[k] < sum) {
                j++;
            }  else {
                k--;
            }
    	}
    	i++;
    }
   return result;
};

console.log(threeSum( [-4, -1, -1, 0, 1, 2]))
// [-4, -1, -1, 0, 1, 2]