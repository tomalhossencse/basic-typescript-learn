// oop : instance of type guard / type narrowing
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  doSleep(hour: number) {
    console.log(`${this.name} Sleep ${hour} hours `);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(hour: number) {
    console.log(`${this.name} study ${hour} hours `);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(hour: number) {
    console.log(`${this.name} take class ${hour} hours `);
  }
}

// function guard
const isStudent = (user: Person) => {
  return user instanceof Student;
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

// const getUserInfo = (user: Person) => {
//   if (user instanceof Student) {
//     user.doStudy(10);
//   } else if (user instanceof Teacher) {
//     user.takeClass(12);
//   } else {
//     user.doSleep(10);
//   }
// };

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(12);
  } else {
    user.doSleep(10);
  }
};

const student1 = new Student("mr. student");
const teacher1 = new Teacher("mr. teacher");
const person1 = new Person("mr. person");
getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);
