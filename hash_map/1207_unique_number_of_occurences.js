var uniqueOccurrences = function (arr) {
  // Initialize an empty object
  // Iterate through the entire array
  // check if the current element is an existing key in the object, if current
  // element is an existing key increment the value by 1. If not initialize it to one.
  // After the iteration create a new array for the values in the object
  // If there are any duplicates in the array return false or return true

  let occurenceObj = {};

  for (let i = 0; i < arr.length; i++) {
    occurenceObj[arr[i]] =
      arr[i] in occurenceObj ? occurenceObj[arr[i]] + 1 : 1;
  }

  const occurences = Object.values(occurenceObj);
  const uniqueOccurences = new Set(occurences);

  return occurences.length === uniqueOccurences.size;
};
