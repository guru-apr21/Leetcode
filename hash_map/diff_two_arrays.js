// 2215. Find the Difference of Two Arrays
function findDifference(nums1, nums2) {
  let distinctNums1 = [],
    distinctNums2 = [];

  for (let number of nums1) {
    if (!nums2.includes(number) && !distinctNums1.includes(number))
      distinctNums1.push(number);
  }

  for (let number of nums2) {
    if (!nums1.includes(number) && !distinctNums2.includes(number))
      distinctNums2.push(number);
  }

  return [distinctNums1, distinctNums2];
}

//Optimal Solutions

function findDiff(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let distinctNums1 = nums1.filter((num) => !set2.has(num));
  let distinctNums2 = nums2.filter((num) => !set1.has(num));

  return [[...new Set(distinctNums1)], [...new Set(distinctNums2)]];
}
