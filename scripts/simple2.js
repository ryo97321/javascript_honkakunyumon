var Member = function(firstName, lastname) {
  this.firstName = firstName;
  this.lastName = lastname;
  this.getName = function() {
    return this.lastName + ' ' + this.firstName;
  }
};

var mem = new Member('太郎', '山田');
console.log(mem.getName());