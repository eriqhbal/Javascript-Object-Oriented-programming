// teknik penulisan menggunakan instanceof untuk mengecek apakah object tersebut merupakan objek dari instance tertentu atau bukan.
// penggunaan instanceof akan menghasilkan nilai boolean, true jika object tersebut merupakan bagian dari instance objeknya, dan 
// false jika bukan.

class CheckInstance {

}

class CheckChild {

}

class CheckAgain extends CheckInstance {

}

let mine = new CheckInstance();
let yours = new CheckChild();
let them = new CheckAgain();

console.log(mine instanceof CheckInstance); // true
console.log(yours instanceof CheckInstance); // false

console.log(them instanceof CheckInstance); // true
console.log(them instanceof CheckAgain); // true