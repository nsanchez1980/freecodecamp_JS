function repeatStringNumTimes(str, num) {
    let result = "";
    for (let i=0;i<num;i++){
        result = result + str;
    }
    return result;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
  