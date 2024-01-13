# Solution

## Time Complexity

1. ### Comparisons and Slicing

   The function performs string comparisons and the `startsWith` method in each recursive call.

   The time complexity of a string comparison in most of the programming language including Javascript, is generally O(n), where n is the length of the shorter string involved in the comparison.

   Similarly the time complexity of the `startWith` method is O(n) as well, where n is the length of the substring being checked.

   The `slice` method also takes O(n)(n is the length of the new substring), time in the worst case, as it creates a new substring.

   The number of recursive calls depends on the length of `str1` and `str2`. In the worst case the function makes a recursive call with new `str1` that is shorter by the length of `str2`. This could lead to a number of recursive calls approximately equal to the length of `str1` divided by the length of `str2`.

   Given that the length of `str1` is N and the length of `str2` is M, and assuming that M is much smaller than N, the time complexity can be approximated to O(N/M\*N) = O(N^2/M). In worst case, where M is very small compared to N, this could approach O(N^2).
