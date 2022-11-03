/*Roman Numeral Converter

Convert the given number into a roman numeral.
Roman numerals 	Arabic numerals
M 	1000
CM 	900
D 	500
CD 	400
C 	100
XC 	90
L 	50
XL 	40
X 	10
IX 	9
V 	5
IV 	4
I 	1

All roman numerals answers should be provided in upper-case.


=========in-progress: 10:07 PM 10/30/2022============================*/

function convertToRoman(num) {
  let x = num;
  let romNum = "";
  while(x > 0){
    if(x >= 1000){
      romNum = romNum.concat('M');
      x -= 1000;
      continue;
    }
    if(x >= 900){
      romNum = romNum.concat('CM');
      x -= 900;
      continue;
    }
    if(x >= 500){
      romNum = romNum.concat('D');
      x -= 500;
      continue;
    }
    if(x >= 400){
      romNum = romNum.concat('CD');
      x -= 400;
      continue;
    }
    if(x >= 100){
      romNum = romNum.concat('C');
      x -= 100;
      continue;
    }
    if(x >= 90){
      romNum = romNum.concat('XC');
      x -= 90;
      continue;
    }
    if(x >= 50){
      romNum = romNum.concat('L');
      x -= 50;
      continue;
    }
    if(x >= 40){
      romNum = romNum.concat('XL');
      x -= 40;
      continue;
    }
    if(x >= 10){
      romNum = romNum.concat('X');
      x -= 10;
      continue;
    }
    if(x >= 9){
      romNum = romNum.concat('IX');
      x -= 9;
      continue;
    }
    if(x >= 5){
      romNum = romNum.concat('V');
      x -= 5;
      continue;
    }
    if(x >= 4){
      romNum = romNum.concat('IV');
      x -= 4;
      continue;
    }
    if(x >= 1){
      romNum = romNum.concat('I');
      x -= 1;
      continue;
    }

  }
 return romNum;
}

console.log(convertToRoman(3667));