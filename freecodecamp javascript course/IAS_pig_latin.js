function translatePigLatin(str) {
    if (str.search(/[aeiou]/i)==0){
        return str + "way";
    }
    else if (str.search(/[aeiou]/i)==-1){
        return str + "ay";
    }
    else {
        return str.slice(str.search(/[aeiou]/i))+str.slice(0,str.search(/[aeiou]/i))+"ay";
    }
  }
  
  console.log(translatePigLatin("rhythm"));
  