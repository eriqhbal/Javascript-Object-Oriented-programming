// Membuat Method didalam constructor function

function CreateObject() {
  this.firstName = "";
  this.lastName = "";

  this.callName = function(name) {
   console.log(`Hello ${name} my name is ${this.firstName}`);
  } 
}

let myFirstCallObject = new CreateObject();
myFirstCallObject.firstName = "Zuleriqhbal Hendri";

myFirstCallObject.callName("khamzat");

