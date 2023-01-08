//DIRECTIONS

//Simple, remove the spaces from the string, then return the resultant string.



//MY SOLUTION:

//  \s is the regex for "whitespace"
//  g is the "global" flag, it matches all whitespaces, it looks through the entire string
//  what goes inside / / is the pattern



function removeSpace(x){
  return x.replace(/\s/g, '');
}



let removeSpace = (x) => x.replace(/\s/g,'')

