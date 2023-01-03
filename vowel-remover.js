//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//Examples
//"hello"     -->  "hll"
//"codewars"  -->  "cdwrs"
//"goodbye"   -->  "gdby"
//"HELLO"     -->  "HELLO"


//My solution

function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }