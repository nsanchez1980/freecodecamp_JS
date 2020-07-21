function sumAll(arr) {
    let sum = 0;
    if (arr[0]>arr[1]){
        arr.reverse();
    }
    for (let i=arr[0];i<=arr[1];i++){
        sum = sum + i;
    }
    return sum;
  }
  
console.log(sumAll([10, 5]));
  