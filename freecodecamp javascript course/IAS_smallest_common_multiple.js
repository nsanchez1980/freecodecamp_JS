function isDivisible(num1,num2,num3){
    for (let i=num1;i<=num2;i++){
        if (num3%i!=0){
            return false;
        }
    }
    return true;
}

function gdc(x,y){
    let t = 0;
    while (y!=0){
        t = y;
        y = x%y;
        x = t;
    }
    return x;
}

function scd(a,b){
    return (a*b)/gdc(a,b);
}

function smallestCommons(arr) {
    let input = arr.slice();
    if(input[0]>input[1]){
        input.reverse()
    }
    let x1 = input[0];
    let y1 = input[1];
    let x2 = [];
    let y2 = [];
    let i = 1;
    while (true){
        if (isDivisible(x1,y1,scd(x1,y1)*i)){
            return scd(x1,y1)*i;
        } 
        i++;
    }    
  }
  
  
console.log(smallestCommons([23, 18]));
  