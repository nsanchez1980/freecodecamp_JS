<<<<<<< HEAD
function titleCase(str) {
    let result = []
    for (let i=0;i<str.split(" ").length;i++){
        result[i] = str.split(" ")[i][0].toUpperCase()+str.split(" ")[i].slice(1).toLowerCase();
    }

    return result.join(" ");
  }
  
=======
function titleCase(str) {
    let result = []
    for (let i=0;i<str.split(" ").length;i++){
        result[i] = str.split(" ")[i][0].toUpperCase()+str.split(" ")[i].slice(1).toLowerCase();
    }

    return result.join(" ");
  }
  
>>>>>>> Remote-name/master
  console.log(titleCase("I'm a little tea pot"));