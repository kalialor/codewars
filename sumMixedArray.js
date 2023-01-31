/* 
Given an array of integers as strings and numbers, return the sum of the array 
values as if all were numbers.

Return your answer as a number.



MY SOLUTION:
The '+val' operation converts 'val' to a number if it's a string, or returns the same
vale if it's already a number
The 'reduce' method iterates over the array 'x' and accumulates the sume of the 
elements.


*/



function sumMix(x) {
    return x.reduce((sum, val) => sum + (+val), 0);
}


