/*9. Two Sum
Write a method that takes an array of numbers. If a
pair of numbers in the array sums to zero, return the
positions of those two numbers. If no pair of numbers
sums to zero, return null.*/

function two_sum(nums) {
  var zeroSums = [];

  for (var i = 0; i < nums.length; ++i){
    for (var j = 0; j <nums.length; ++j){
      if (nums[i] + nums[j] === 0){
        zeroSums.push([i, j]);
      }
    }
  }if (zeroSums.length === 0){
    return null;
  }else{
    return zeroSums;
  }
}
//question: How can I to stop the loop from going through the results and adding duplicates

two_sum([1, 3 , -1, 5]) // [[0, 2]]
two_sum([1, 3, -1, 5, -3])// [[0, 2], [1, 4]]
two_sum([1, 5, 3, -4]) // null
