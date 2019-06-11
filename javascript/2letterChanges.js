/*
Challenge
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
Sample Test Cases
Input:"hello*3"

Output:Ifmmp*3


Input:"fun times!"

Output:gvO Ujnft!
*/

function LetterChanges(str) { 

    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let vowels = ['a', 'e','i','o','u'];
    let cleanStr = str.toLowerCase();
    let newStr = '';
    
    for (i = 0; i <= str.length -1; i++){
        //check if digit is a letter
        if (alpha.includes(cleanStr[i])) {
            let index = alpha.indexOf(cleanStr[i]);
            let letter = ''
            
            //return a is the input letter is z
            if (index === str.length){
                letter = alpha[0];
            } else {
                letter = alpha[index+1];
            }
  
            //check if the letter is a vowel and return Uppercase if so
            if (vowels.includes(letter)) {
                newStr += letter.toUpperCase()
              } else {
                  newStr += letter;      
              }
          }else {
              newStr += str[i];
          }
    }
    return newStr; 
  }
     
  // keep this function call here 
  LetterChanges(readline());