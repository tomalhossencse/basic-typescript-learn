// inheritance => 1st piller of OOP

class Parent {
  name: string;
  age: number;
  adress: string;
  number: string;
  constructor(name: string, age: number, address: string, number: string) {
    this.name = name;
    this.adress = address;
    this.age = age;
    this.number = number;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} sleeps ${numOfHours} hours`);
  }
}

class Student extends Parent {}

const student1 = new Student("kamal", 24, "Kanapur", "290238409");

student1.getSleep(23);

class Developer extends Parent {
  designation: string; //own

  constructor(
    name: string,
    age: number,
    adress: string,
    number: string,
    designation: string,
  ) {
    super(name, age, adress, number);
    this.designation = designation;
  }

  makeProject(hour: number) {
    console.log(`${this.name} make a  project within ${hour} hours `);
  } //own
}

const developer1 = new Developer(
  "Tomal Hossen",
  23,
  "Konabari, Gazipur",
  "204823094",
  "Frontend Developer",
);

developer1.makeProject(12);
