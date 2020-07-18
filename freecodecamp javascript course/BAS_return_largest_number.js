function largestOfFour(arr) {
    
    let solution = [];
    let biggus = 0;
    for (let x=0;x<arr.length;x++){
        for (let y=0;y<arr[x].length;y++){
            if (y==0) {biggus=arr[x][y]}
            if (arr[x][y]>biggus) {
                biggus = arr[x][y];
            }
        }
        solution[x] = biggus;
    } 
    return solution;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));