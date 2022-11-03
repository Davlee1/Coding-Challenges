/*Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.


===========================Completed: 1:10 PM 10/30/2022============================*/
function palindrome(str) {
  const arrStr = str.trim().toLowerCase().replace(/[\W_]+|\s+/g, '').split("");
  
  //return arrStr;
  for(let x = 0; x < arrStr.length; x++){
    if(arrStr[x] !== arrStr[arrStr.length - x - 1]) return false;
  }
  return true;
}

console.log(palindrome("_eye"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));