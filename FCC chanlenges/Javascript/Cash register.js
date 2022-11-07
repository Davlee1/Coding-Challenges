/*
Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]


====================in-progress: 11:57 PM 11/5/2022================================*/

function checkCashRegister(price, cash, cid) {
  let tid;
  let theChange = cash - price;
  let changeGiven = [  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]];

//counts total in drawer
    for(let a = 0; a < cid.length; a++){
        tid += cid[a][1];
    }

//checks if there is enough in the drawer or if enough cash was given
    if(theChange > tid | theChange < 0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }

//adds change in coins and bills to changeGiven
  let b = ;
  while(theChange > 0){
    if(cid[b][0] =="ONE HUNDRED" && theChange >= cid[b][1]){
      changeGiven[8][1] += 100;
      theChange -= 100;
      cid[b][1] -= 100;

      continue;
    }
    if(cid[b][0] =="TWENTY" && theChange >= cid[b][1]){
      changeGiven[7][1] += 20;
      theChange -= 20;
      cid[b][1] -= 20;
      continue;
    }
    if(cid[b][0] =="TEN" && theChange >= cid[b][1]){
      changeGiven[6][1] += 10;
      theChange -= 10;
      cid[b][1] -= 10;
      continue;
    }
    if(cid[b][0] =="FIVE" && theChange >= cid[b][1]){
      changeGiven[5][1] += 5;
      theChange -= 5;
      cid[b][1] -= 5;
      continue;
    }
    if(cid[b][0] =="ONE" && theChange >= cid[b][1]){
      changeGiven[4][1] += 1;
      theChange -= 1;
      cid[b][1] -= 1;
      continue;
    }
    if(cid[b][0] =="QUARTER" && theChange >= cid[b][1]){
      changeGiven[3][1] += .25;
      theChange -= .25;
      cid[b][1] -= .25  ;
      continue;
    }
    if(cid[b][0] =="DIME" && theChange >= cid[b][1]){
      changeGiven[2][1] += .1;
      theChange -= .1;
      cid[b][1] -= .1;
      continue;
    }
    if(cid[b][0] =="NICKEL" && theChange >= cid[b][1]){
      changeGiven[1][1] += .05;
      theChange -= .05;
      cid[b][1] -= .5;
      continue;
    }
    if(cid[b][0] =="PENNY" && theChange >= cid[b][1]){
      changeGiven[0][1] += .01;
      theChange -= .01;
      cid[b][1] -= .01;
      continue;
    }
    //returns "INSUFFICIENT_FUNDS" if change can't be obtained
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  for(let c = 0; c < changeGiven.length; c++){
    if(changeGiven[c][1] == 0){
      changeGiven.splice(c,1);
    }

  }

  //resets change to initial value
  theChange = cash - price;

if(theChange == tid)
  return {status: "CLOSED", change: changeGiven};
else{
  return {status: "OPEN", change: changeGiven};
}



  return theChange;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);