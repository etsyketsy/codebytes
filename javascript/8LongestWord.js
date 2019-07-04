/*
Challenge
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
Sample Test Cases
Input:"fun&!! time"

Output:time


Input:"I love dogs"

Output:love
*/

function LongestWord(sen) {

    let inputArray = sen.split(' ');
    let longestWord = inputArray[0];
    let count = 0;
    let tempCount = 0;
    let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    // loop through words in array comparing length
    for (i = 0; i <= inputArray.length-1; i++) {
        if (count < inputArray[i].length){
            //reset tempCount and check length of word without punctuation 
            tempCount = 0;
            for (j = 0; j <= inputArray[i].length-1; j++){
                if (alpha.includes(inputArray[i][j])){
                    tempCount += 1;
                }
            }
            
            //compare tempCount with longestWord count

            if (tempCount > count){
                count = tempCount;
                longestWord = inputArray[i]
            }            
        }
    }
    return longestWord;
}
