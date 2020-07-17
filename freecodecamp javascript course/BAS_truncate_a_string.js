function truncateString(str, num) {
    if (num>=str.length){
        return str;
    }
    else if (str.length>num) {
        return str.slice(0,num) + "...";        
    }
    return "";
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));