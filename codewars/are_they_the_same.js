function comp(array1, array2){
    if (array1==null || array2==null || array1==[] || array2==[]){
      return false;
    }
    array1.sort(function(a,b){return a - b});
    array2.sort(function(a,b){return a - b});

    for (let i=0; i<array1.length; i++){
        if (array1[i]**2!=array2[i]){
            return false;
        }
    }
    return true;
}
let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
//let a1 = [100, 100, 25, 14, 12];
//let a2 = [10001, 10000, 625, 196, 144];
console.log(comp(a1, a2), true);

