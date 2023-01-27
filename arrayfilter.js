/*

Write a function that takes a list of strings as an argument and returns a filtered list 
containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your 
function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as 
those provided, and some elements may be repeated.  */




//MY SOLUTION: 

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
  };


  const array = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
  console.log(removeGeese(array)); // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]







  //Another example: 

  const numbers = [1,2,3,4,5,6]

  const even = numbers.filter(isEven);

  function isEven(value) {
      return value % 2 === 0;
  }
  console.log(even)               // [2,4,6]




  //Another example: 

  const people = [
      {
          name: 'Angel',
          age: 20
      },
      {
        name: 'Bob',
        age: 18
    },
    {
        name: 'Kyle',
        age: 12
    }
  ];

  const adults = people.filter(person => person.age >= 18);

  console.log(adults);


  /*Output:

  {
          name: 'Angel',
          age: 20
      },
      {
        name: 'Bob',
        age: 18
    },

    */