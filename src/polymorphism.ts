// polymorphism : different face

class Person {
  getSleep() {
    console.log(`I am normal man. I sleep for 8 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a Student. I sleep 7 hours`);
  }
}

class NextLevelDeveloper extends Person {
  getSleep() {
    console.log(`I am a Next Level Developer. I sleep 6 hours`);
  }
}

const getSleepingHours = (person: Person) => {
  person.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

const shape0 = new Shape();
const shape1 = new Circle(12);
const shape2 = new Rectangle(12, 12);

console.log(shape0.getArea());
console.log(shape1.getArea());
console.log(shape2.getArea());
