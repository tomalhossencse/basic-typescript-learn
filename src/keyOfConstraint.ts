// key of : type operator

type RichPeoplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicale: MyVehicle1 = "bike";
const myVehicale2: MyVehicle2 = "car";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
    division: string;
  };
};
const user: User = {
  id: 344,
  name: "Abul Hossen",
  address: {
    city: "Gazipur",
    division: "Dhaka",
  },
};

// const userName = user.name;
const userName = user["name"];
const userId = user["id"];
const userCity = user["address"]["city"];

console.log({ userName, userId, userCity });

const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const product = {
  name: "Yahama 606s pro",
  brand: "Yahama",
};

const result = getPropertyFromObj(user, "name");
const result1 = getPropertyFromObj(user, "address");
const result2 = getPropertyFromObj(user, "id");
const result3 = getPropertyFromObj(product, "name");

console.log({ result, result1, result2, result3 });
