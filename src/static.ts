// static

// class Counter {
//   static count: number = 0;

//   increament() {
//     return (Counter.count = Counter.count + 1);
//   }

//   decreament() {
//     return (Counter.count = Counter.count - 1);
//   }
// }

// const instance1 = new Counter(); //  use one memory without static
// console.log(instance1.increament());
// console.log(instance1.increament());
// console.log(instance1.increament());
// console.log(instance1.increament());

// const instance2 = new Counter(); // use another memory without static
// console.log(instance2.increament());
// console.log(instance2.increament());
// console.log(instance2.increament());
// console.log(instance2.increament());

class Counter {
  static count: number = 0;

  static increament() {
    return (Counter.count = Counter.count + 1);
  }

  static decreament() {
    return (Counter.count = Counter.count - 1);
  }
}
console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());

console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());
