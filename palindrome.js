
//Write a function that checks if a given string (case insensitive) 
//is a palindrome.









//MY SOLUTION:

function isPalindrome(x) {
    return x.toLowerCase() == x.toLowerCase().split('').reverse().join('');
  }