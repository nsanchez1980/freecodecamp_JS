function bouncer(arr) {
    let arr2 = [];
    for (let i = 0; i<arr.length; i++){
        if (!!arr[i]!=false){
            arr2.push(arr[i]);
        }
    }
    return arr2;
  }
  
  console.log(bouncer([false, null, 0, NaN, undefined, ""]));