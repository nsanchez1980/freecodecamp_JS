var min = function(list){
    let minimum = list[0];
    for(let i=0;i<list.length;i++){
        if (list[i]<minimum){
            minimum = list[i];
        }
    }
    return minimum;
}

var max = function(list){
    let maximum = list[0];
    for(let i=0;i<list.length;i++){
        if (list[i]>maximum){
            maximum = list[i];
        }
    }
    return maximum;
}



console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([4,6,2,1,9,63,-134,566]));
console.log(max([5]));
