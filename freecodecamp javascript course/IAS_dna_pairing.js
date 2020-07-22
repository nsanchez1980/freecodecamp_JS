
function pairElement(str) {
    let result = [];
    let AT = ["A", "T"];
    let TA = ["T", "A"];
    let CG = ["C", "G"];
    let GC = ["G", "C"];

    for (let i=0;i<str.length;i++){
        switch(str[i]){
            case "A":
                result.push(AT);
                break;
            case "T":
                result.push(TA);
                break;
            case "C":
                result.push(CG);
                break;
            case "G":
                result.push(GC);
                break;
        }
    }

    return result;
  }
  
  console.log(pairElement("GCG"));