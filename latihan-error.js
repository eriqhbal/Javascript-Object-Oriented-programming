/*
   teknik penulisan throw new Error. teknik ini digunakan untuk memberikan pesan error yang ada di program kita.
   jika kita gunakan throw error dan terjadi error beneran di program kita maka secara otomatis program kita akan 
   terhenti di line code error yang kita dapatkan, sehingga program kita akan berhenti. inilah salah satu kelebihan
   dari throw new Error.
*/

class MathUtil {
  static sum(...value) {
    let total = 0;
    if (value === 0) {
      throw new Error("Nilai yang dimasukkan harus lebih dari nol");
    }
    for (let number of value) {
      total += number;
    }
    return total;
  }
}


console.info(MathUtil.sum()); // akan menghasilkan output yang kita tulis di line 12.

let eriqh = MathUtil.sum(2, 54, 32, 1, 4);
console.info(eriqh);
