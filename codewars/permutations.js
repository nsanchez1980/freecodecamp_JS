function swap(arr,x,y){
    let temp=arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
    for(i=0;i<arr.length;i++){
        if (arr[i]==undefined){
            arr.splice(i,1);
        }
    }
    return arr;
}

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

function permutations(input) {
    if (input.length==1){
        let result = [];
        result.push(input);
        return result;
    }
    let result = [];
    let result2=[];
    let arreglo = input.split("");
    let y = 0;
    while (y<factorial(input.length)/(input.length*2)){
        for (let i=0;i<arreglo.length;i++) {
            result.push(swap(arreglo, arreglo.length-i, arreglo.length-i-1).join(""));
        }
        result.push(swap(arreglo,arreglo.length-1,arreglo.length-2).join(""));
        for (let i=0;i<arreglo.length;i++) {
            result.push(swap(arreglo, i, i+1).join(""));
        }
        result.push(swap(arreglo,0,1).join(""));
        y++;
    }

    for(let i=0;i<result.length;i++){
        if(result2.indexOf(result[i])==-1){
            result2.push(result[i]);
        }
    }
    return result2;
}
//console.log(permutations('a'));
//console.log(permutations('ab'));
console.log(permutations('a'));