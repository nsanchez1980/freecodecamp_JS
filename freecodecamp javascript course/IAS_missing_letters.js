function fearNotLetter(str) {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0;i<str.length;i++){
        if (str[i]!=abc[i+abc.indexOf(str[0])]){
            return abc[i+abc.indexOf(str[0])];
        }
    }
  }
  
  console.log(fearNotLetter("abcdefghjklmnoe"));
  