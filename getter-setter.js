// Pada materi ini kita akan belajar dan latihan mengenai penulisan getter & setter

class Computer {
   constructor(name,age) {
      this.name = name;
      this.age = age;
   }

   get peopleLook() {
      console.log(`my name is ${this.name}, my age is ${this.age}`);
   }

   set peopleLook(value) {
      let result = value.split(" ");
      this.name = result[0];
      this.age = parseInt(result[1]);
      
   }
}

let eriqh = new Computer("Zuleriqhbal Hendri",21);
console.log(eriqh);
 eriqh.peopleLook = "Zuleriqhbal 30";
 console.log(eriqh.peopleLook);