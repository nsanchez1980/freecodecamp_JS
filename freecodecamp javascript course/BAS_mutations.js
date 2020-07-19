<<<<<<< HEAD
function mutation(arr) {
    
    for (let l of arr[1].toLowerCase()){
        if (arr[0].toLowerCase().search(l)==-1){
            return false;
        }
    }
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));
=======
function mutation(arr) {
    
    for (let l of arr[1].toLowerCase()){
        if (arr[0].toLowerCase().search(l)==-1){
            return false;
        }
    }
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));
>>>>>>> Remote-name/master
  