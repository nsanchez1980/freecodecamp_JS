//NOT PRETTY :S


function destroyer(arr) {
    let compare = []
    for (let x=1;x<arguments.length;x++){
        compare.push(arguments[x]);
    }
    function veremos(value,index,arreglo){
        if(compare.includes(value)){
            arreglo.splice(index,1);
        }
    }
    let x = arr.length;
    for(let i=0;i<=x;i++){
        arr.forEach(veremos);
    }
    return arr;
    
  }
  
  console.log(destroyer([2, 3, 2, 3], 2, 3));