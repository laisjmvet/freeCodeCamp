function checkCashRegister(price, cash, cid) {
  
  const cashChange = {
    status: "",
    change: [],

  }

  let change = (cash - price);
  let newCid = cid.reverse();
  let sumMoney = newCid[0][1]+newCid[1][1]+newCid[2][1]+newCid[3][1]+newCid[4][1]+newCid[5][1]+newCid[6][1]+newCid[7][1]+newCid[8][1];
  let arr = [];

  const cashVal = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  
  let a = newCid.map(function(subarray){
    return subarray.filter(num => num === change);
  })

  if(a.filter(num =>num.length > 0).length === 1) {

    cashChange.status = "CLOSED";
    cashChange["change"] = cid.reverse();
    return cashChange;
}

  for(let i = 0; i < newCid.length; i++){

    //console.log(newCid[i][1], change, cashVal[newCid[i][0]]);



    if(sumMoney < change) {
      cashChange.status = "INSUFFICIENT_FUNDS";
      return cashChange;

    }

    //console.log(cashVal[newCid[i][0]],newCid[i][1], change)
    let total = 0.0;
    if(cashVal[newCid[i][0]] <= change) {

      let sum = 0;
      let c = newCid.slice(i, newCid.length);
      for(let j = 0; j < c.length; j++){
        sum += c[j][1];
      }

      if(sum < change) {
        cashChange.status = "INSUFFICIENT_FUNDS";
        return cashChange;
      }
      //console.log(a, a.reduce((sum, num) => sum + num))

      change -= cashVal[newCid[i][0]];
      change = Number(change.toFixed(2));
      total += cashVal[newCid[i][0]];

      while(change >= cashVal[newCid[i][0]] && total < newCid[i][1]){
          change -= cashVal[newCid[i][0]];
          change = Number(change.toFixed(2));
          total += cashVal[newCid[i][0]];

      }

    cashChange["change"].push([newCid[i][0], total]);
    cashChange.status = "OPEN";

    }

  }

  return cashChange;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));