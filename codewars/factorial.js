function factorial(n)
{
    let result=1;
    if ((n<0) || (n>12)){
    throw new RangeError("Error");
    } else if (n==0){
        return 1;
    } else{
        for(let i=1;i<=n;i++){
            result=result*(n-i+1);
        }
        return result;
    }
}


console.log(factorial(0), 1, "factorial for 0 is 1");
console.log(factorial(1), 1, "factorial for 1 is 1");
console.log(factorial(2), 2, "factorial for 2 is 2");
console.log(factorial(3), 6, "factorial for 3 is 6");