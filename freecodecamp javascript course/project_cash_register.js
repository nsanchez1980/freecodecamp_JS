function checkCashRegister(price, cash, cid) {
    let change = {
        status: "",
        change: [
            ["PENNY", 0],
            ["NICKEL", 0],
            ["DIME", 0],
            ["QUARTER", 0],
            ["ONE", 0],
            ["FIVE", 0],
            ["TEN", 0],
            ["TWENTY", 0],
            ["ONE HUNDRED", 0]
        ]
    }
    let result = [];
    let cuantohay = 0;
    let vuelto = cash - price;

    for (let x in cid){
        cuantohay = cuantohay + cid[x][1];
    }
    if(cuantohay.toFixed(2)<vuelto){
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
        return change;
    }
    if (cuantohay.toFixed(2)==vuelto){
        change.status = "CLOSED";
        change.change = cid;
        return change;
    }
    change.status = "OPEN";
    vuelto = vuelto.toFixed(2);
    let vueltoanterior = 0;
    let vueltonuevo = 0;
    let valores = [100,20,10,5,1,0.25,0.1,0.05,0.01];
    while (vuelto>0){
        vueltoanterior=vuelto;
        for (let v=0;v<valores.length;v++){
            if (vuelto>=valores[v]){
                if (cid[8-v][1]>=valores[v]){
                    cid[8-v][1] = cid[8-v][1] - valores[v];
                    change.change[8-v][1] = change.change[8-v][1] + valores[v];
                    vuelto = vuelto - valores[v];
                    vuelto = vuelto.toFixed(2);
                    v--;
                }
            }
        }
        vueltonuevo=vuelto;
        if (vueltoanterior==vueltonuevo){
            change.status = "INSUFFICIENT_FUNDS";
            change.change = [];
            return change;            
        }
    }
    for (let i in change.change){
        if (change.change[i][1]!=0){
            result.push(change.change[i]);
        }
    }
    change.change = result.slice().reverse();
    return change;
}
//  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));