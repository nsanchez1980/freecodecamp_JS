function isPrime(num) {
    for(let i=2; i<num; i++){
        if(num%i==0) {
            return false;
        }
    }
    return true;
}

function primeFactors(n){
    let result="";
    let optimumprimes=[];
    let i=2;
    let temp=0;
    let count=1;
    while (i<n) {
        if (n%i==0){
            if (isPrime(i)){
                optimumprimes.push(i);
                n = n/i;
            } else {
                i++;
            }
        } else {
            i++;
        }
    }
    optimumprimes.push(i);
    temp = optimumprimes[0]
    for(let x=1;x<=optimumprimes.length;x++){
        if (optimumprimes[x]==temp){
            count++;
        } else {
            if (count==1){
                result = result + "(" + temp + ")";
            }
            else {
                result = result + "(" + temp + "**" + count + ")";
            }
            count=1;
            temp = optimumprimes[x];

        }
    }
    return result;
}

console.log(primeFactors(988787865498321))