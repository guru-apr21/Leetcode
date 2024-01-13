function gcdStrings(str1, str2) {
  if (str1 === str2) return str1;

  if (str1.length < str2.length) {
    return gcdStrings(str2, str1);
  }

  if (str1.startsWith(str2)) {
    return gcdStrings(str1.slice(str2.length), str2);
  }

  return "";
}

gcdStrings("ABCABC", "ABC");
gcdStrings("ABABAB", "ABAB");
