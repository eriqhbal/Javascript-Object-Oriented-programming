// Membuat bagaimana cara pemanggilan constructor function didalam constructor function lainnya.

function CreateObject(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.callName = function (name) {
    console.log(`Hello ${name} my name is ${this.firstName}`);
  };
}

function Child(age,citizen, firstName, lastName) {
   this.age = age;
   this.citizen = citizen;
   CreateObject.call(this, firstName, lastName);
   this.introduce = function() {
      console.log(`hello everyone my name is ${firstName} my old is ${this.age}`);
   }
}

let myFirstCallObject = new Child(21, "Indonesia", "Zuleriqhbal", "Hendri");

myFirstCallObject.introduce();
