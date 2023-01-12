/* It's pretty straightforward. Your goal is to create a function 
that removes the first and last characters of a string. You're given one 
parameter, the original string. You don't have to worry with strings with 
less than two characters. */


//MY SOLUTION:

function removeChar(str) {
  return str.slice(1, -1);
}


// or

const removeChar = str => str.slice(1,-1)


// or


let poohBear = tigger => tigger.slice(3, -2)
  console.log(poohBear('we like honey'))



/*Syntax: 

slice(indexStart, indexEnd)



example: 

const poohBear = "We like honey";

const tigger = poohBear.slice(1, 8);
const rabbit = poohBear.slice(4, -2);
const pig = poohBear.slice(50);
const horse = poohBear.slice(-12. 11);

console.log(tigger);           //  e like ho 
console.log(rabbit);          //   ike hon
console.log(pig);            //    ''
console.log(horse);          //    e n






function pikachu(str) {
  return str.slice(1,-1)
}
  console.log(pikachu('We like honey'))


//ARROW NOTATION:

let pikachu = (str) => str.slice(1,-1)
  console.log(pikachu('We like honey))
*/