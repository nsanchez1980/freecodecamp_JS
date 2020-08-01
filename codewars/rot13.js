function rot13(str) {
    let abc = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i=0;i<str.length;i++){
        if (abc.indexOf(str[i].toLowerCase())==-1){
            result = result + str[i];
        } else {
            if (str[i]==str[i].toUpperCase()) {
                result = result + abc[abc.indexOf(str[i].toLowerCase())+13].toUpperCase();
            } else {
                result = result + abc[abc.indexOf(str[i])+13];
            }
        }
    }
    return result;
  }

  console.log(rot13("Test"));