function moveZeroes(nums) {
  //Initialze a variable to keep track of the index where the next non zero element should be placed
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[nonZeroIndex];
      nums[nonZeroIndex] = temp;
      nonZeroIndex++;
    }
  }
}
