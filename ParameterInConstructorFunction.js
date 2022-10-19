// Membuat dan mengirim data melalui parameter yang ada di constructor Function.

function CreateObject(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.callName = function (name) {
    console.log(`Hello ${name} my name is ${this.firstName}`);
  };
}

let myFirstCallObject = new CreateObject("Zuleriqhbal","Hendri");

myFirstCallObject.callName("khamzat");
