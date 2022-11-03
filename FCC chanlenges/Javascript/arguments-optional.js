/*Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

==============Completed: 11:50 PM 10/25/2022======================================*/
function addTogether() {
const [first, second] = arguments;

return arguments.length > 1?
  ((typeof(first) == "number" && typeof(second) == "number")?
     first + second : undefined)
  :typeof(first) == "number"?
      (second) => addTogether(first, second)
      : undefined;
}

console.log(addTogether(2,3));