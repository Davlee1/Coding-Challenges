/*Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


======================Completed: 4:00 PM 11/3/2022============================*/
function rot13(str) {

  let arr = str.split("");

  for(let x = 0; x < arr.length; x++){
    if(str.charCodeAt(x) < 65 | str.charCodeAt(x) > 90) {
      continue;}
    
    if(str.charCodeAt(x) <= 77){
      arr[x] = String.fromCharCode(str.charCodeAt(x)+13)
    }

      else{
    arr[x] = String.fromCharCode(str.charCodeAt(x)-13)
  }
  }

  return arr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));