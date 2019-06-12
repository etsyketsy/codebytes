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
    let alpha = "abcdefghijklmnopqrstuvwxyz".split('');

    // loop through words in array comparing length
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longest.length) {

            //count length of word without punctuation
            for (let j = 0; j < inputArray[i].length; i++) {
                if (alpha.includes(inputArray[i][j]){
                    tempCount += 1;
                }
                // check against original word count and reset temporary counter
                if (tempCount > count) {
                    longestWord = inputArray[i];
                    count = tempCount;
                    tempCount = 0;
                }
            }
        }
    }
    return longest;
}