/*
Challenge
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 
Sample Test Cases
Input:"coderbyte"

Output:etybredoc


Input:"I Love Code"

Output:edoC evoL I
*/

function FirstReverse(str) { 
    let tempStr = []
  for (i = str.length - 1; i >= 0; i--) {
      tempStr.push(str[i]);
  } 
  reverseStr = tempStr.join('')
  return reverseStr; 
         
}
   
// keep this function call here 
FirstReverse(readline());