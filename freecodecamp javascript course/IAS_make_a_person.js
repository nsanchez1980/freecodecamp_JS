var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let lastName = firstAndLast.split(" ")[1];
    let firstName = firstAndLast.split(" ")[0];
    this.setFirstName = function (first) {
        if (typeof(first)=="string"){
            firstName = first;
        }
    }
    this.setLastName = function (last) {
        if (typeof(last)=="string"){
            lastName = last;
        }
    }
    this.setFullName = function (firstAndLast){
        firstName = firstAndLast.split(" ")[0];
        lastName = firstAndLast.split(" ")[1];
    }
    this.getFullName = function() {
        return firstName + " " + lastName;
    };
    this.getFirstName = function() {
        return firstName;
    }
    this.getLastName = function() {
        return lastName;
    }
    firstAndLast = firstName + " " + lastName;
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.getFirstName());
  