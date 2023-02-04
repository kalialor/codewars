
//Write a function that checks if a given string (case insensitive) 
//is a palindrome.









//MY SOLUTION:

function isPalindrome(str) {
    str = str.toLowerCase()
    return str === str.split('').reverse().join('')
  }


