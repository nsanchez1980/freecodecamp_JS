function digital_root(n) {
    let result = 0;
    
    for(let i=0;i<String(n).length;i++){
        result = result + Number(String(n)[i]);
    }
    if (result>9){
        return digital_root(result);
    }    
    return result;
}



console.log( digital_root(493193), 7 )
console.log( digital_root(456), 6 )