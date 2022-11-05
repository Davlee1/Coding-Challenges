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


====================in-progress: 3:20 PM 11/5/2022================================*/

function checkCashRegister(price, cash, cid) {
  let tid;
  let change = cash - price;
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
    if(change > tid | change < 0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }

//adds change in coins and bills to changeGiven
  while(change > 0){
    if(cid[b][0] =="ONE HUNDRED" && change >= cid[b][1]){
      changeGiven[8][1] += 100;
      change -= 100;
      cid[b][1] -= 100;
      continue;
    }
    if(cid[b][0] =="TWENTY" && change >= cid[b][1]){
      changeGiven[7][1] += 20;
      change -= 20;
      cid[b][1] -= 20;
      continue;
    }
    if(cid[b][0] =="TEN" && change >= cid[b][1]){
      changeGiven[6][1] += 10;
      change -= 10;
      cid[b][1] -= 10;
      continue;
    }
    if(cid[b][0] =="FIVE" && change >= cid[b][1]){
      changeGiven[5][1] += 5;
      change -= 5;
      cid[b][1] -= 5;
      continue;
    }
    if(cid[b][0] =="ONE" && change >= cid[b][1]){
      changeGiven[4][1] += 1;
      change -= 1;
      cid[b][1] -= 1;
      continue;
    }
    if(cid[b][0] =="QUARTER" && change >= cid[b][1]){
      changeGiven[3][1] += .25;
      change -= .25;
      cid[b][1] -= .25  ;
      continue;
    }
    if(cid[b][0] =="DIME" && change >= cid[b][1]){
      changeGiven[2][1] += .1;
      change -= .1;
      cid[b][1] -= .1;
      continue;
    }
    if(cid[b][0] =="NICKEL" && change >= cid[b][1]){
      changeGiven[1][1] += .05;
      change -= .05;
      cid[b][1] -= .5;
      continue;
    }
    if(cid[b][0] =="PENNY" && change >= cid[b][1]){
      changeGiven[0][1] += .01;
      change -= .01;
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
if(chang)



  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);