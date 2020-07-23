function uniteUnique(arr) {
    let result = []

    for (let i=0;i<arguments.length;i++){
        for (let y=0;y<arguments[i].length;y++){
            if (result.indexOf(arguments[i][y])==-1){
                result.push(arguments[i][y]);
            }
        }
    }

    return result;
  }
  
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
  