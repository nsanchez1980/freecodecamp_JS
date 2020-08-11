function incrementString (strng) {
    let a = ["0","1","2","3","4","5","6","7","8","9"];
    let j = 0;
    if (strng[strng.length-1] in a) {
        let j = parseInt(strng.slice(strng.search(/[0-9]/)))+1;
        let result = strng.slice(0,strng.search(/[0-9]/)).concat(j.toString());
        let append = "";
        if (result.length!=strng.length){
            let diff = strng.length - result.length;
            for (let i=0;i<diff;i++){
                append = append + "0";
            }
            result = result.slice(0,strng.search(/[0-9]/)).concat(append,j.toString());
            return result;
        } else {
            return result;
        }
        
    } else {
        return strng.concat("1");
    }
  }



console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");