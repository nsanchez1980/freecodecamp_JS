function steamrollArray(arr) {
    let result = [];

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            for (let y=0;y<arr[i].length;y++){
                result.push(steamrollArray(arr[i])[y]);
            }
        } else
        {
            result.push(arr[i]);
        }
    }
    return result;
  }
  
  console.log(steamrollArray([1, {}, [3, [[4]]]]));