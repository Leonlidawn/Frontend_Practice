// 11. Use JavaScript to print the first 10 numbers that are multiples of 4 but not 5 between 0 and 100.

function echo(a) {
  console.log(a);
}

var counter;
for (counter = 0; counter <= 100; counter++) {
  if (counter % 4 == 0 && counter % 5 > 0) {
    echo(counter);
  }
}



// 12. (TWO SUM) Given an array of integers, find two numbers such that they add up to a specific target number.
// The function twoSum should return an array of indices of the two numbers such that they add up to the target, 
// where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are zero-based.


echo('12.(TWO SUM) Given an array of integers, find two numbers such that they add up to a specific target number.\n\nThe function twoSum should return an array of indices of the two numbers such that they add up to the target,where index1 must be less than index2.Please note that your returned answers(both index1 and index2) are zero - based.')


//preconditions: only 2 numbers in the array can add up to target number.
//every occurance of the number can only be used once.
function tweSum(intArray, target) {

  var length = intArray.length;
  var counter1;
  var current;

  for (counter1 = 0; counter1 < length; counter1++) {
    current = intArray[counter1];
    var counter2;
    for (counter2 = counter1 + 1; counter2 < length; counter2++) {
      if (current + intArray[counter2] == target) {
        return [counter1, counter2];
      }
    }
  }
  return 'answer not found';
}



// 13. Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function shorterString(a, b) {

  return (a.length < b.length) ? a.length : b.length;

}

