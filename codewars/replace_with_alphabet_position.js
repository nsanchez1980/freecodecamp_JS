function alphabetPosition(text) {
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    result = ""
    text = text.toLowerCase();
    for (let i=0;i<text.length;i++){
        if (alphabet.indexOf(text[i])!=-1){
            result = result + String(alphabet.indexOf(text[i])+1) + " ";
        }
    }
    return result.slice(0,result.length-1);
  }



  console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
  console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");