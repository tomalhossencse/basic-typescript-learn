type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contact: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 456,
  name: {
    firstName: "Abu Bakkar",
    lastName: "Siddiki",
  },
  gender: "male",
  contact: "017289492843",
  address: {
    division: "Dhaka",
    city: "Gazipur",
  },
};
const user2: User = {
  id: 456,
  name: {
    firstName: "Omar",
    lastName: "Faruk",
  },
  gender: "male",
  contact: "01728949234",
  address: {
    division: "Rangpur",
    city: "Dinajpur",
  },
};

console.log(user1);
console.log(user2);

// function

type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;
