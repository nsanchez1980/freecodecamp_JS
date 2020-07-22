function spinalCase(str) {

    let result = "";
    let previouswasaspace=true;

    for (let i=0;i<str.length;i++){
        if (str[i]=="-"||str[i]=="_"){
            result = result + " ";
        } else {
            result = result + str[i];
        }
    }
    let arr = "";
    for(let i=0;i<result.length;i++){
        if(result[i]==" "){
            arr = arr + "-";
            previouswasaspace=true;
        }
        else if(result[i]===result[i].toUpperCase()){
            if (previouswasaspace) {
                arr = arr + result[i].toLowerCase();
                previouswasaspace=false;
            } else {
                arr = arr + "-" + result[i].toLowerCase();
                previouswasaspace=true;
            }
        } else if(result[i]===result[i].toLowerCase()){
            arr = arr + result[i];
            previouswasaspace=false;
        }
    }
    
 
    console.log(result);
    return arr;
  }
  
  console.log(spinalCase("This Is Spinal Tap"));
  console.log(spinalCase("thisIsSpinalTap"));
  console.log(spinalCase("The_Andy_Griffith_Show"));
  console.log(spinalCase("Teletubbies say Eh-oh"));
  console.log(spinalCase("AllThe-small Things"));  