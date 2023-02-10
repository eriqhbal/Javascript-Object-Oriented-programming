/*
   chapter ini membahas tentang teknik penulisan try-catch dan try-finally.
   untuk try-finally bisa dilakukan tanpa harus ada block catch namun biasanya digunakan dalam kasus tertentu.
*/

class Counter {

   static sum(...value){
      if(value === 0) {
         throw new Error("Value tidak boleh kurang dari 1");
      }

      let result = 0;
      for(let number of value) {
         result += number;
      }
      return result;
   }
}

// Penggunaan try catch
try {
   console.info(Counter.sum());
   console.info(Counter.sum(4,3,5));
}catch(error) {
   console.error(`pesan error : ${error}`);
} finally { // Penulisan finally disini option.
   console.log("selesai..");
}

class CounterAttack {
   #myValue = 1;
   sumMethod() {
      try {
         return this.#myValue;
      } finally {
         return this.#myValue++;
      }
   }
}

let myValues = new CounterAttack();

console.log(myValues.sumMethod());
console.log(myValues.sumMethod());
console.log(myValues.sumMethod());
console.log(myValues.sumMethod());