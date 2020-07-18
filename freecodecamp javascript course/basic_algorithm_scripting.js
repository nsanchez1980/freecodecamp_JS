function reverseString(str) {
    let array = [];
    let solution = "";
    for (let i=str.length-1;i>=0;i--){
        array.push(str[i])
    }
    //for (let i=0;i<array.length;i++){
    //    solution = solution + array[i];
    //}

    return array.join("");
  }
  
  console.log(reverseString("hello"));