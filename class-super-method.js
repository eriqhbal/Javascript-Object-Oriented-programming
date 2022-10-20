// Teknik penulisan kata kunci super dalam memanggil method yang ada di parent classnya.
class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }
  kulkas() {
    console.info("ini adalah sebuah kulkas");
  }
}

class People extends Person {
   lemari() {
      super.kulkas(); // sifatnya optional mau dipanggil atau tidak.
      console.info("ini adalah sebuah function lemari")
   }
}

let eriqh1 = new People();
eriqh1.lemari();
