/*Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.



===============completed 8:06 PM 10/7/2022===============================*/
function dropElements(arr, func) {

    while(arr.length > 0 && !func(arr[0])){

    arr.shift();
  }
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));