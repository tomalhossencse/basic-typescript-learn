// getter and setter

class BankAccount {
  readonly userId: number;
  public userName: string;
  protected userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  // set the balance
  // addBalance(balance: number) {
  //  return this.userBalance = this.userBalance + balance;
  // }
  // get user balance

  set addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }

  // getBalance() {
  //   return this.userBalance;
  // }

  get getBalance() {
    return this.userBalance;
  }
}

class StudentBankAccount extends BankAccount {
  // test(){
  //     this.userBalance
  // }
}

const personAccount = new BankAccount(111, "Tomal", 234);

personAccount.addBalance = 123;
personAccount.addBalance = 123;
personAccount.addBalance = 400;
console.log(personAccount);
console.log(personAccount.getBalance);
