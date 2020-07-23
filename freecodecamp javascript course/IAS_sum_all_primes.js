function isPrime(num) {
    for(let i=2; i<num; i++){
        if(num%i==0) {
            return false;
        }
    }
    return true;
}

function sumPrimes(num) {
    let result = 0;
    for (let i=2; i<=num; i++){
        if (isPrime(i)){
            result = result + i;
        }
    }
    return result;
  }

console.log(sumPrimes(977));
  