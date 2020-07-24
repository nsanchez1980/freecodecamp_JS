function addTogether() {
    if (arguments.length==1){
        if (typeof(arguments[0])=="number"){
            let x = arguments[0];
            return function(n){
                if(typeof(n)=="number"){
                    return n + x;
                } else {
                    return undefined
                }
            }     
        }
        else{
            return undefined
        }
    }
    if (typeof(arguments[0])=="number" && typeof(arguments[1])=="number"){
        return arguments[0]+arguments[1];
    }
    return undefined
}

console.log(addTogether(2)([3]));
  