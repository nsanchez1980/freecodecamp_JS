function telephoneCheck(str) {
    function checkTenDigits(str){
        if (str.slice(0).search(/^\d{10}/)==0){
            str = str.slice(10);
            return (str=="");
        }
    }
    if (checkTenDigits(str)) {
        return true;
    }
    if (str.search("1")==0){
        str = str.slice(1);
        if (str.search(" ")==0){
            str = str.slice(1);
        }
    }
    if (str[0]=="(" && str[4]==")"){
        str = str.replace("(","");
        str = str.replace(")","");
    }
    str = str.replace(/\s/g,"");
    str = str.replace(/[-]/g,"");
    return (checkTenDigits(str));
}
  
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));  
console.log(telephoneCheck("1 555 555 5555"));