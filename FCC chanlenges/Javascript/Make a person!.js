/*Make a person!!

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

========================Completed: 4:20 PM 10/29/2022============================*/

const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  this.getFirstName = function() {
    return firstAndLast.split(' ').shift();
  };

  this.getLastName = function() {
    return firstAndLast.split(' ').pop();
  };

  this.getFullName = function() {
    return firstAndLast;
  };

  this.setFirstName = function(x) {
    const last = firstAndLast.split(' ').pop();
    firstAndLast = x.concat(" " + last);
  };

  this.setLastName = function(x) {
    const first = firstAndLast.split(' ').shift();
    firstAndLast = first.concat(" " + x);
    
  };

  this.setFullName = function(x) {
   firstAndLast = x;
  };


  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
bob.setFullName("Dale Gribble");
console.log(bob.getFullName());
bob.setFirstName("Hank");
console.log(bob.getFullName());
bob.setLastName("Hill");
console.log(bob.getFullName());