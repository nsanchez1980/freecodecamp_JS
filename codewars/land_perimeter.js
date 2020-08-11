function landPerimeter(arr) {
    let result = 0;
    for (let i=0;i<arr.length;i++){
        for (let y=0;y<arr[i].length;y++){
            if (arr[i][y]=="X"){
                result = result + 4;
                if (i<arr.length-1){
                    if (arr[i+1][y]=="X"){
                        result = result - 2;
                    }
                }

                if (y<arr[i].length-1){
                    if (arr[i][y+1]=="X"){
                        result = result - 2;
                    }
                }
                
            }
        }
    }

    return "Total land perimeter: " + result.toString();
}




console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]), "Total land perimeter: 60");
console.log(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]), "Total land perimeter: 52");
console.log(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]), "Total land perimeter: 40");
console.log(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]), "Total land perimeter: 54");
console.log(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]), "Total land perimeter: 40");
