/*

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers 
of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

*/





//MY SOLUTION:

function powersOfTwo(n){
    let result = [];
    for (let i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }
  console.log(powersofTwo(4))      //[1, 2, 4, 8, 16]




/*

The Math.pow() function is used to raise a number to a given power. The function takes two arguments: 
The base number and the exponent. 
  For example, 'Math.pow(2,3)' would return 8, which is 2 raiased to the power of 3 (2 * 2 * 2)

  In the example above, 'Math.pow(2,i)' is used to calculate 2 raised to the power of the current 
  loop variable 'i' for each iteration of the 'for' loop. The result is then added to the 'powers'
  array using the 'push()' method. 

  

push() method is used to add elements to the end of an array. It also returns the new length of the array
  ex. let dogBreeds = ['Pomsky', 'Pug'];
      dogBreeds.push('Shepherd');
      console.log(dogBreeds);
        ['Pomsky', 'Pug', 'Shepherd']


In the function powersOfTwo that I provided earlier, the push() method is used to add each calculated power of 
2 to the powers array.

It's worth noting that there are other ways to add elements to an array in JavaScript, such as using the 
spread operator, the concat() method, and the unshift() method which add element to the beginning of an array.
*/
