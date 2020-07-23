function sumFibs(num) {
    let sum = 0;
    let n1 = 1;
    let n2 = 0;
    let n3 = 0;
    while (n3<=num) {
        n3 = n1 + n2;
        if (n3<=num && n3%2!=0){
            sum = sum + n3;
        }
        n1 = n2;
        n2 = n3;
        console.log(sum);
    }
    return sum;
  }
  
  console.log(sumFibs(75025));