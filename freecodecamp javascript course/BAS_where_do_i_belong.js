function getIndexToIns(arr, num) {
    if(arr==""){
        return 0;
    }    
    arr.sort(function(a,b) {return a - b});
    if(num>arr[arr.length-1]){
      return arr.length;
    }
    for (let i=0;i<arr.length;i++){
        if (arr[i]>=num){
            return i;
        }
    }
  }
  
  console.log(getIndexToIns([5, 3, 20, 3], 5));