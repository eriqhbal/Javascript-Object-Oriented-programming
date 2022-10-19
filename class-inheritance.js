// disini kita akan menerapkan inheritance menggunakan class yang ada di javascript menggunakan kata kunci extends.

class Person {
   sayHello(name) {
      console.log(`Hello ${name} my name is ${this.name}`);
   }
}

class People extends Person{

}

let mine = new Person();
mine.name = "Zuleriqhbal Hendri";
mine.sayHello("Abdurrab");

let them = new People();
them.name = "Lionel Messi";
them.sayHello("Ronaldo");