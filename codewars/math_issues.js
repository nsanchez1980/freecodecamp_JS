Math.round = function(number) {
    a = parseInt(number);
    if (number-a<0.5){
        return parseInt(number);
    }
    else {
        return parseInt(number)+1;
    }
}
  
Math.ceil = function(number) {
    a = parseInt(number);
    if (number==a){
        return parseInt(number);
    }
    else {
        return parseInt(number)+1;
    }
}
  
Math.floor = function(number) {
    return parseInt(number);
}


console.log(Math.round(0.4), 0, 'Math.round(0.4)');
console.log(Math.round(0.5), 1, 'Math.round(0.5)');
  
console.log(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
console.log(Math.ceil(0.5), 1, 'Math.ceil(0.5)');
  
console.log(Math.floor(0.4), 0, 'Math.floor(0.4)');
console.log(Math.floor(0.5), 0, 'Math.floor(0.5)');