function convertToRoman(num) {
    let result = "";
    while (num>0){
        if (num>=1000){
            result=result +"M";
            num=num-1000;
        } else if (num>=900){
            result = result + "CM";
            num=num-900;
        } else if (num>=500){
            result=result+"D";
            num=num-500;
        } else if (num>=400){
            result = result + "CD";
            num=num-400;
        } else if (num>=100){
            result=result+"C";
            num=num-100;
        } else if (num>=90){
            result = result + "XC";
            num=num-90;
        } else if (num>=50){
            result=result+"L";
            num=num-50;
        } else if (num>=40){
            result=result+"XL";
            num=num-40;
        } else if (num>=10){
            result = result + "X";
            num=num-10;
        } else if (num>=9){
            result = result + "IX";
            num=num-9;
        } else if (num>=5){
            result = result + "V";
            num=num-5;
        } else if (num>=4){
            result = result + "IV";
            num= num - 4;
        } else {
            result=result+"I";
            num=num-1;
        }
        
    }

    return result;
   }
   
   console.log(convertToRoman(3999));
   