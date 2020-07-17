function findLongestWordLength(str) {
    
    let longest = 0;
    let words = str.split(" ");
    for (let i=0;i<words.length;i++){
        if (words[i].length>longest){
            longest = words[i].length;
        }
    }
    return longest;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));