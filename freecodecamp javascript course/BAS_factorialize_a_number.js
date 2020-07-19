function factorialize(num) {
    let result = 1;
    while (num>=1) {
        result = result * num;
        num--;
    }
    return result;
  }
  
  console.log(factorialize(10));