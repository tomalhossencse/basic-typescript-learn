// object distructuring
// array distructuring

const user = {
  id: 123,
  name: {
    firstName: "Md",
    middleName: "Tomal",
    lastName: "Hossen",
  },
  gender: "male",
  hobby: "cooking",
};

const {
  id,
  name: { firstName, middleName: myMiddleName, lastName },
  gender,
  hobby: myhobby,
} = user;

console.log(myMiddleName);

const number = [12, 23, 45, 78, 45];

const [num1, num2, num3] = number;
console.log(num2);
