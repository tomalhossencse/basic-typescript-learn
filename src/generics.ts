// dynamically generize

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. A", "Mr. B", "Mr. C"];
// const friends: Array<string> = ["Mr. A", "Mr. B", "Mr. C"];
const friends: GenericArray<string> = ["Mr. A", "Mr. B", "Mr. C"];

// const RollNumbers: number[] = [4, 7, 11];
// const RollNumbers: Array<number> = [4, 7, 11];
const RollNumbers: GenericArray<number> = [4, 7, 11];

// const isRight: boolean[] = [true, false, true];
// const isRight: Array<boolean> = [true, false, true];
const isRight: GenericArray<boolean> = [true, false, true];

type User = { name: string; age: number };
const userList: GenericArray<User> = [
  {
    name: "Habibur Rahman",
    age: 34,
  },
  {
    name: "Khan Shaheb",
    age: 23,
  },
  {
    name: "Kabir Hossen",
    age: 35,
  },
];

console.log({ friends, RollNumbers, isRight });

type Coordinates<A, B> = [A, B];
const coordinates: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

console.log({ coordinates, coordinates2 });
