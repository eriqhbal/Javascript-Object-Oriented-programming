// Teknik penulisan dan pengertian dari public class field.
// Pembuatan public class field ini akan disimpan didalam instance object yang kita buat.

class People {
   firstName;
   lastName;
   balance = 0;

}

let eriqh = new People();
eriqh.firstName = "Zuleriqhbal";
console.log(eriqh);

let iqhbal = new People();
iqhbal.lastName = "hendri";
console.log(iqhbal);