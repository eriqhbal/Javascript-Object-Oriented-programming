/*
Teknik penulisan static method hampir sama dengan static field dan semuanya sama mulai dari cara pembuatannya
sampai dengan cara mengaksesnya.
*/

class MathUtil {

   static sum(...value) {
      let total = 0;
      for(let number of value) {
         total += number
      }
      return total;
   }
}

let eriqh = MathUtil.sum(2,54,32,1,4);
console.info(eriqh);