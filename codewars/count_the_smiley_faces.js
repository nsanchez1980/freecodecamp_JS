function countSmileys(arr) {
    let count = 0;
    for (let i=0;i<arr.length;i++){
        if (arr[i].search(/[:|;][-|~]{0,1}[)|D]/)!=-1){
            count = count + 1;
        }
    }
    return count;
}




console.log(countSmileys([";o>" , ":>" , ";-)" , ":(" , ":D" , ":>" , ";o)"]), 0);
