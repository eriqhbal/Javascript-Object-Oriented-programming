// Pada materi ini kita akan menulis materi mengenai super Constructor. Dimana akan mewarisi property yang ada di constructor parent classnya.
// walaupun di parent classnya tidak ada constructor dia akan tetap dipanggil di child classnya.

class Person {
  constructor(firstName) {
   this.firstName = firstName;
  }
  sayHello(name) {
    console.log(`Hello ${name} my name is ${this.firstName}`);
  }
}

class People extends Person {
   constructor(firstName, lastName) {
      super(firstName);
      this.lastName = lastName;
   }

   sayHello(name) {
      console.log(`Hello ${name} my name is ${this.firstName} and my lasName is ${this.lastName}`);
   }
 
}

let mine = new Person("Zuleriqhbal");
mine.sayHello("Abdurrab");

let them = new People("hendri", "karim");
them.sayHello("Ronaldo");
