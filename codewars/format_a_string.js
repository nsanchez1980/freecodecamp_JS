function list(names){
    if (names.length==1){
        return names[0]["name"];
    }
    if (names.length==0){
        return "";
    }
    result = "";
    for (let i=0; i<names.length-1; i++){
        result = result + ", " + names[i]["name"];
    }
    result = result + " & " + names[names.length-1]["name"];
    return result.slice(2);
}


console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
"Must work with two names")
console.log(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
console.log(list([]), '', "Must work with no names")