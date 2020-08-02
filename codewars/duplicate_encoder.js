function duplicateEncode(word){
    let result = "";
    let lowercased = "";
    for (let i=0;i<word.length;i++){
        lowercased = lowercased + word[i].toLowerCase();
    }
    for(let i=0;i<lowercased.length;i++){
        if (lowercased.indexOf(lowercased[i])==lowercased.lastIndexOf(lowercased[i])){
            result = result + "(";
        } else {
            result = result + ")";
        }
    }
    return result;
}



console.log(duplicateEncode("SSSdzSIJ)SubS!Sw"));
//console.log(duplicateEncode("recede"),"()()()");
//console.log(duplicateEncode("Success"),")())())","should ignore case");
//console.log(duplicateEncode("(( @"),"))((");