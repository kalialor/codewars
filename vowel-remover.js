//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//Examples
//"hello"     -->  "hll"
//"codewars"  -->  "cdwrs"
//"goodbye"   -->  "gdby"
//"HELLO"     -->  "HELLO"


//My solution

/*the letters in the brackets tell the function to look for letters in the string
the // what goes inside is the pattern
g are flags that tell the function to look for match over the entire string
(will otherwise break at the first match).
replace vowels with an empty '' */


function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }


//Arrow Function

let shortcut = (string) => string.replace(/[aeiou]/g,'')


