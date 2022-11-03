/*Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


=====completed 5:24 PM 10/6/2022=============*/
function smallestCommons(arr) {
//functions used
  const isNotDivBy = (num, div) => {
    return (num % div !== 0? true: false);};

  const isDivBy = (num, div) => {
    return (num % div == 0? true: false);};

  const isDivByRang = (num, botm, top) =>{
    for(let a = botm; a <= top; a++){
      if(isNotDivBy(num, a))return false;
    }
    return true;}
//global variables
let smolComMul = -1;
const min = Math.min(arr[0], arr[1]);
const max = Math.max(arr[0], arr[1]);

//checks for common multiple
for(let a = max; smolComMul <0; a += max){
    if(isDivBy(a,min) && isDivByRang(a, min, max)){
      smolComMul = a;
    }
}

  return smolComMul;
}

smallestCommons([1,5]);