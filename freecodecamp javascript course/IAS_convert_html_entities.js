function convertHTML(str) {
    let result = "";

    for (let i=0;i<str.length;i++){
        switch(str[i]){
            case "&":
                result = result + "&amp;"
                break;
            case "<":
                result = result + "&lt;"
                break;
            case ">":
                result = result + "&gt;"
                break;
            case "\"":
                result = result + "&quot;"
                break;
            case "\'":
                result = result + "&apos;"
                break;
            default:
                result = result + str[i]
        }
    }
    return result;
  }
  
  console.log(convertHTML("Schindler's List"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  