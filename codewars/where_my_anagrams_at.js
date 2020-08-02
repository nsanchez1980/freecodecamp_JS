function anagrams(word, words) {
    let result = [];
    let temp = "";
    for(let i=0;i<words.length;i++){
        temp = words[i];
        for(let y=0;y<word.length;y++){
            if (temp.indexOf(words[i][y])!=-1){
                temp = temp.replace(words[i][y],"")
            }
        }
        if (temp.length==0){
            result.push(words[i]);
        }
    }
    return result;
}



console.log(anagrams("abba",["aabb","bbaa","abbab","abbath","laconchadetumadreallboys"]));
