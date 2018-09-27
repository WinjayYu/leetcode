var threeSumClosest = function (nums, target) {
  let sorted = nums.sort((a, b) => a - b);
  let sum, min, len = sorted.length;
  let result = sorted[0] + sorted[1] + sorted[len - 1];

  for(let i = 0; i < sorted.length - 2; i++) {
    let j = i + 1, k = len - 1;
    while (j < k) {
      sum = sorted[i] + sorted[j] + sorted[k];
      if(sum > target) {
        k--;
      } else {
        j++;
      }
      if(Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
    }

  }
  return result;
};

console.log(threeSumClosest([-1,2,1,-4], 1))
