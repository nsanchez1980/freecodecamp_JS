function myReplace(str, before, after) {
    let result = [];
    for (let i=0;i<str.split(" ").length;i++){
        if (str.split(" ")[i].toLowerCase()==before.toLowerCase()){
            if (str.split(" ")[i]===str.split(" ")[i].toLowerCase()){
                result.push(after);
            }else{
                result.push(after.slice(0,1).toUpperCase() + after.slice(1));
            }
        } else {
            result.push(str.split(" ")[i]);
        }
    }
    return result.join(" ");
  }
  
  console.log(myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));