function rot13(str) {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let i=0;i<str.length;i++){
        if (abc.indexOf(str[i])==-1){
            result = result + str[i];
        } else {
            result = result + abc[(abc.indexOf(str[i])+13)];
        }
    }
    return result;
  }
  
  console.log(rot13("SERR YBIR?"));
  