/*Steamroller

Flatten a nested array. You must account for varying levels of nesting.

==============Completed: 2:05 AM 10/18/2022=======================*/

function steamrollArray(arr) {
const newArr = [];
  
for(let a = 0; a < arr.length; a++){
if(Array.isArray(arr[a])){
  newArr.push(...steamrollArray(arr[a]));
}
else {
  newArr.push(arr[a]);}
}

return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);