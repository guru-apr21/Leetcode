function findMaxAverage(nums, k) {
  let sum = 0;
  let maxSum = 0;

  // find the sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  // Initialize the maxSum to the first k elements
  maxSum = sum;

  // Start Sliding the window and update maxSum if necessary
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i]; // Slide the window by one element
    maxSum = Math.max(sum, maxSum); // Update the maxSum if the new sum is larger
  }

  //Return the maximum average which is maxSum divided by k
  return maxSum / k;
}

console.log(findMaxAverage([5], 1));
