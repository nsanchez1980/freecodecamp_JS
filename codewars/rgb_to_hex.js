function rgb(r, g, b){
    let result = "";
    for (i=0;i<arguments.length;i++){
        if (arguments[i]<0){
            arguments[i] = 0;
        }
        if (arguments[i]>255){
            arguments[i] = 255;
        }
    }

    for (i=0;i<arguments.length;i++){
        let temp = arguments[i].toString(16);
        if (temp.length==1){
            result = result + "0" + temp.toUpperCase();
        } else {
            result = result + temp.toUpperCase();
        }
    }
    return result;
  }


console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300,255,255), 'FFFFFF')
console.log(rgb(173,255,47), 'ADFF2F')