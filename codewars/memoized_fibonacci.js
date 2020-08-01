//This kata is silly

var fibonacci = function(n) {
    let sum = 0;
    let counter = 0;
    let n1 = 1;
    let n2 = 0;
    let n3 = 0;
    while (counter<=n-3){
        n3 = n1 + n2;
        sum = sum + n3;
        counter++;
        n1 = n2;
        n2 = n3;
    }
    return sum+1;
}
      
    




console.log(fibonacci(70), 190392490709135);
console.log(fibonacci(60), 1548008755920);
console.log(fibonacci(50), 12586269025);
