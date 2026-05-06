// mapped types

// map

const arrayOfNumber: number[] = [1, 2, 5, 6];
const arrayOfString: string[] = ["1", "2", "5", "6"];

const arrayOfStringUsingMap: string[] = arrayOfNumber.map((number) =>
  number.toString(),
);

console.log(arrayOfStringUsingMap);

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"];

type AreaOfSting = {
  height: string;
  width: string;
};

// type AreaOfString = {
//   [key in "height" | "width"]: string;
// };

// type Area = {
//   [key in keyof AreaOfNum]: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ hieght: number; width: string }> = {
  hieght: 40,
  width: "50",
};
