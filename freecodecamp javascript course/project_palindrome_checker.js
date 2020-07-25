function palindrome(str) {
    let cleanstring = "";
    for (let i=0;i<str.length;i++){
        if (str[i].search(/[A-Za-z0-9]/)!=-1){
            cleanstring = cleanstring + str[i].toLowerCase();
        }
    }
    if (cleanstring.split("").reverse().join("")==cleanstring){
        return true;
    }
    return false;
  }
  
  
  
  console.log(palindrome("A man, a plan, a canal. Panama"));
  