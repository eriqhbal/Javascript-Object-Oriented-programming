class Person {

   constructor(firstName, age) {
      this.firstName = firstName;
      this.age = age;

      return `hello ${this.firstName} my old now is ${this.age}`
   }
}

let eriqh = new Person("Zuleriqhbal", 21);
let hendri = new Person("Sutoyo", 38);

console.info(eriqh);
console.log(hendri);
