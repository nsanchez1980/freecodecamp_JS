function dropElements(arr, func) {
  let result = [];
  let i = 0;

  while(i<arr.length){
    if (func(arr[i])){
      for (let y=i;y<arr.length;y++){
        result.push(arr[y])
      }
      return result;
    }
    i++;
  }
  return result;
}
  
  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
  