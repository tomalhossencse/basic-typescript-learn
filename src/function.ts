//Function
// Arrow func & normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const sum = (num1: number, num2: number): number => num1 + num2;

sum(11, 12);

// object => function => method

const bankUser = {
  name: "Tomal Hossen",
  balance: 2000,
  totalbalance(currentBalance: number): number {
    return this.balance + currentBalance;
  },
};

console.log(bankUser.totalbalance(6000));

const arr: number[] = [1, 2, 3];

const sqrArr = arr.map((i: number): number => i * i);
console.log(sqrArr);
