/*
This kata is about multiplying a given number by eight if it is an even 
number and by nine otherwise.

*/


//MY SOLUTION: 

function simpleMultiplication(value){
    
    if(value%2===0 ){
     return value *8
    }
    else{
    return value* 9;
    }    
}