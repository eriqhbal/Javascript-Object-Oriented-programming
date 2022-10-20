// teknik penulisan private method 

class Person {
   say(name) {
      if(name) {
         this.#withName(name);
      } else {
         this.#withoutName();
      }
   }

   #withoutName () {
      console.log("Hello");
   }
   #withName(name) {
      console.log(`Hello ${name}`);
   }
}

let eriqh = new Person();
eriqh.say("Zuleriqhbal");