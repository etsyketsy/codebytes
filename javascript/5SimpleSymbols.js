/*
Challenge
Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 
Sample Test Cases
Input:"+d+=3=+s+"

Output:true


Input:"f++d+"

Output:false
*/

function SimpleSymbols(str) { 
    
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let cleanStr = str.toLowerCase();
    
    for (i = 0; i <= str.length; i++){
        if ((alpha.includes(cleanStr[i])) && ((cleanStr[i-1] !== '+') || (cleanStr[i+1] !== '+'))){
            return false;
        }
        else {
            continue
        }
    }
    return true; 
           
  }
     
  // keep this function call here 
  SimpleSymbols(readline());                            
  