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
    
    
      while(theChange >= 100){
        if(cid[8][1] < 100){
          return {status: "INSUFFICIENT_FUNDS", change: []}}

        changeGiven[8][1] += 100;
        theChange -= 100;
        cid[8][1] -= 100; 
      }
      
      while(theChange >= 20){
        if(cid[7][1] < 20){
          return {status: "INSUFFICIENT_FUNDS", change: []}}
          
        changeGiven[7][1] += 20;
        theChange -= 20;
        cid[7][1] -= 20; 
      }

      while(theChange >= 10){
        if(cid[6][1] < 10){
          return {status: "INSUFFICIENT_FUNDS", change: []}}
          
        changeGiven[6][1] += 10;
        theChange -= 10;
        cid[6][1] -= 10; 
      }
      while(theChange >= 5){
        if(cid[5][1] < 5){
          return {status: "INSUFFICIENT_FUNDS", change: []}}
          
        changeGiven[5][1] += 5;
        theChange -= 5;
        cid[5][1] -= 5; 
      }
      while(theChange >= 1){
        if(cid[4][1] < 1){
          return {status: "INSUFFICIENT_FUNDS", change: []}}
          
        changeGiven[4][1] += 1;
        theChange -= 1;
        cid[4][1] -= 1; 
      }
      while(theChange >= .25){
        if(cid[3][1] < .25){
          return {status: "INSUFFICIENT_FUNDS", change: []}}
          
        changeGiven[3][1] += .25;
        theChange -= .25;
        cid[3][1] -= .25; 
      }
      while(theChange >= .1){
        if(cid[2][1] < .1){
          return {status: "INSUFFICIENT_FUNDS", change: []}}
          
        changeGiven[2][1] += .1;
        theChange -= .1;
        cid[2][1] -= .1; 
      }
      while(theChange >= .05){
        if(cid[1][1] < .05){
          return {status: "INSUFFICIENT_FUNDS", change: []}}
          
        changeGiven[1][1] += .05;
        theChange -= .05;
        cid[1][1] -= .05; 
      }
      while(theChange >= .01){
        if(cid[0][1] < .01){
          return {status: "INSUFFICIENT_FUNDS", change: []}}
          
        changeGiven[0][1] += .01;
        theChange -= .01;
        cid[0][1] -= .01; 
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
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));