// Membuat Method didalam sebuah class dan tersimpan secara otomatis didalam prototype sih class Personnya.
class Person {
   
   constructor(name,age) {
      this.name = name;
      this.age = age;
   }

   sayHello(name) {
      console.log(`hello ${name} my name is ${this.name} and my old is ${this.age}`);
   }
}

let eriqh = new Person("Zuleriqhbal Hendri",21);
eriqh.sayHello("Jokowi");

let hendri = new Person("Karim Benzema",34);
hendri.sayHello("courtois");

