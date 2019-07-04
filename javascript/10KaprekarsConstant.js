function KaprekarsConstant(num) {
    let count = 0;

    //recursive function to loop throuh each step
    let calculateDifference = (num, count) => {
        if (num === 6174){
            return count;
        } 

        //convert number to string for sorting
        let currentNumber = num.toString().split('');

        //add zeroes if num is not 4 digits long
        while (currentNumber.length < 4) {
            currentNumber.push('0');
        }

        //sort numbers and calculate new number
        let asc = currentNumber.sort().join('');
        let desc = currentNumber.reverse().join('');
        let diff = desc - asc;

        return calculateDifference(diff, count + 1);
    }

    return calculateDifference(num, count);

}

// keep this function call here 
KaprekarsConstant(3524);
