type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role; //intersection

// interface : only allowed to object data type :( array, function, object)

interface IUser {
  name: string;
  age: number;
}

// intersection with interface
interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: User = {
  name: "Kamal Hossen",
  age: 40,
};

const user2: User = {
  name: "Shafeyet",
  age: 50,
};

const user3: UserWithRole = {
  name: "Jamal Hossen",
  age: 39,
  role: "user",
};
const user4: IUser = {
  name: "Ajmal Hossen",
  age: 39,
};

const user5: IUserWithRole = {
  name: "Anwar Hossen",
  age: 67,
  role: "admin",
};

console.log({ user1, user2, user3, user4, user5 });

// type alies

type IsAdmin = boolean; // we can't use here interface (because interface is not allowed to Primitive data type.)

const isAdmin: IsAdmin = true;
console.log({ isAdmin });

// function with type alias

type Add = (num1: number, num2: number) => number;

// interface with function

interface IAdd {
  (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => {
  return num1 + num2;
};

const add2: IAdd = (num1, num2) => {
  return num1 + num2;
};

const resultAdd1 = add(12, 13);
const resultAdd2 = add(42, 13);

console.log({ resultAdd1, resultAdd2 });

// array with type alies

type Friends = string[];

const friends: Friends = ["Tomal", "Rakib", "Tauhid"];

// array with interface

interface IFriends {
  [index: number]: string;
}
const friends2: IFriends = ["Rahim", "Rahman", "Kamal", "Jamal"];

console.log({ friends, friends2 });
