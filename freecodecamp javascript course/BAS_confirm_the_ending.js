function confirmEnding(str, target) {

    return str.substr(str.length-target.length,target.length)==target;
  }
  
  console.log(confirmEnding("Bastian", "an"));