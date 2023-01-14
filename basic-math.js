/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */




//MY SOLUTION:


function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
console.log(basicOp('+', 2, 2))




/*
Switch Statements is the perfect solution for long, nested if/else statments. The value of the expression is 
then compared with the values of each case in the structure. If there is a match, the associated block of code is 
executed. 




if you see a break; in a switch statement then that means it will execute the case and the next one;
to prevent that, you type in break

if you see the world 'default' then it means if switch statment doesn't match any of the cases, 
it will go to the default statment








EXAMPLE:


This will print out 'This animal will go to Noah's Ark' because Giraffe is list in the case 
You can change out the variable


let Animal = 'Giraffe';


switch (Animal) {
    case 'Cow':
    case 'Giraffe':
    case 'Dog':
        console.log('This animal will go on Noah\'s Ark.');
        break;
    case 'Spoon':
        console.log('A spoon is not an animal!');
        break;
    case 'Dinosaur':
    default: 
        console.log('This animal will not go on Noah\'s Ark.');
        break;
}

















*/
