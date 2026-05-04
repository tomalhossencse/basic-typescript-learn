// ? : termary operator
// ?? : nulish coalesing operator : null / undefined
// ?. optional chaining

const userAge = 21;
const readyForBiye = (age: number) => {
  const result = age >= 21 ? "You are eligible" : "You are not eligible";
  return result;
};
const tomal = readyForBiye(23);
console.log(tomal);

const userTheme = undefined;
const selectedTheme = userTheme ?? "light";
console.log(selectedTheme);

const isAuthenticated = ""; //null

const resultWithTernary = isAuthenticated ? isAuthenticated : "guest";
const resultWithNulish = isAuthenticated ?? "guest";

console.log({ resultWithTernary }, { resultWithNulish });

// optional chaining
const user: {
  address: {
    city: string;
    region: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    region: "Dhaka",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);
