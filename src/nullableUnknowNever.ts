// nullable types

const getUser = (user: string | null) => {
  if (user) {
    console.log(`From DB : ${user}`);
  } else {
    console.log("From db : All users");
  }
};

getUser(null);

// unknown type

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrice = input * 0.5;
    console.log(discountPrice);
  } else if (typeof input === "string") {
    const [splited] = input.split(" ");
    const discountPrice = Number(splited) * 0.5;
    console.log(discountPrice);
  } else {
    console.log("Wrong Input");
  }
};

discountCalculator(100);
discountCalculator("120 tk");
discountCalculator(null);

// void

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error...");
