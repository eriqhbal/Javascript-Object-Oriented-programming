/*
pada teknik kali ini kita akan membuat dan membahas mengenai pengertian dari kata kunci static.
penggunaan kata kunci static sebelum nama field dan methodnya akan menjadi milik classnya itu sendiri
dan bukan lagi menjadi bagian dari instance objectnya. dan mengaksesnya pun tidak lagi melalui instance objectnya,
melainkan dari classnya itu sendiri. Dibawah ini adalah contoh dari penulisan kata kunci static untuk field/variable.
*/

class TestOne {
   static name = "Zuleriqhbal Hendri";
   static age = 21;
}

let eriqh = new TestOne();
console.info(eriqh.name); // undefined.
console.info(TestOne.name); // Zuleriqhbal Hendri.