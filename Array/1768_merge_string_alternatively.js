function mergeAlternately(word1, word2) {
  // Step 1 break down the problem into subproblems

  // Iterate through the first string, on the 0th index check whether
  // the second string has same index, if it does place it in a position next to
  // current element which is i+1 and store it in a variable initialized earlier.

  // But the problem with this approach is that when we place the new element in
  // i+1th position, for example if we place "p" in 0+1 = 1st index position that means
  // "apbc" so the next element q will be placed in 1+1 which is 2nd index of the initialized string
  // which is the position of b so the result will be "apqbc" which is not the desired result

  // To solve this problem we have to iterate the placement index every time there is a match
  // in both the strings. When there is no match we have to append the remaining elements in word2
  // if there is any to word 1 or leave it as it is.

  let mergeString = word1.split("");
  let placementIndex = 1;

  for (let i = 0; i < word1.length; i++) {
    // if there are truthy value in the corresponding index of both the string

    mergeString.splice(i + placementIndex, 0, word2[i]);
    placementIndex++;

    if (i === word1.length - 1 && word2.length > word1.length) {
      mergeString.splice(
        i + placementIndex,
        0,
        ...word2.slice(i + 1).split("")
      );
    }
  }

  return mergeString.join("");
}

//Different Solution

function mergeStringAlternately(word1, word2) {
  const mergeString = "";
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) mergeString += word1[i];
    if (i < word2.length) mergeString += word2[i];
  }

  return mergeString;
}

console.log(mergeAlternately("abcd", "pq"));
