// Teknik penulisan bagaimana cara menulis private field yang ada didalam suatu class.
// tujuan teknik ini adalah agar field atau method yang kita buat tidak dapat diakses diluar class yang kita buat.
// karena secara otomatis sebenarnya field kita itu sifatnya public yang bisa diakses diluar class.
// untuk membuat sebuah private field gunakan symbol crash - #.

class Math {
   #plus = 0;

   increment() {
      this.#plus++;
   }
   decrement() {
      this.#plus--;
   }

   get result() {
      return this.#plus;
   }
}

let tangkap = new Math();
tangkap.increment();
tangkap.increment();
let save = tangkap.result;


console.info(save);
