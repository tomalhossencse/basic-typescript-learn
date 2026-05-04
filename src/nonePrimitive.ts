// array, object

// ts - tuple

let playerList = ["Musfiqur", "Mahamudullah", "Sakib Al Hasan"];

const mixedArr: (string | number | boolean)[] = ["Tomal", 4.72, "Rakib", 5.0];
mixedArr.push(true);

let coordinates: [number, number] = [12, 14];
let twin: [string, string] = ["Parot", "Parot"];

// reference type - object

const user: {
  organize: "Green bd"; //value => type => (fixed value ): literal types
  FirstName: string;
  MiddleName?: string; //optional type
  LastName: string;
  isMarried: boolean;
} = {
  organize: "Green bd",
  FirstName: "Md",
  MiddleName: "Tomal",

  LastName: "Hossen",
  isMarried: false,
};

const user2: {
  readonly organize: string; //acces modifier
  FirstName: string;
  MiddleName?: string; //optional type
  LastName: string;
  isMarried: boolean;
} = {
  organize: "Green bd",
  FirstName: "Md",
  MiddleName: "Tomal",

  LastName: "Hossen",
  isMarried: false,
};

// user2.organize="" can not chage because read only
