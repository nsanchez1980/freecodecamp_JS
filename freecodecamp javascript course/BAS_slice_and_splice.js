<<<<<<< HEAD
function frankenSplice(arr1, arr2, n) {
    
    let arr3 = arr2.slice();
    for (let i=0;i<arr1.length;i++){
        arr3.splice(n+i,0,arr1[i]);
    }
    
    console.log(arr2);
    return arr3;
  }
  
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
=======
function frankenSplice(arr1, arr2, n) {
    
    let arr3 = arr2.slice();
    for (let i=0;i<arr1.length;i++){
        arr3.splice(n+i,0,arr1[i]);
    }
    
    console.log(arr2);
    return arr3;
  }
  
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
>>>>>>> Remote-name/master
  