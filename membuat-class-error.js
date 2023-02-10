// Membuat class error sendiri

class SintaksError extends Error {
   constructor(message, field) {
      super(message);
      this.field = field;
   }
}

class Counter {
  static sum(...value) {
    if (value === 0) {
      throw new SintaksError("Value tidak boleh kurang dari 1");
    }

    let result = 0;
    for (let number of value) {
      result += number;
    }
    return result;
  }
}

// Penggunaan try catch
try {
  console.info(Counter.sum());
  console.info(Counter.sum(4, 3, 5));
} catch (error) {
  console.error(`pesan error : ${error.message}`);
} finally {
  // Penulisan finally disini option.
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