// access >> modify

class BankAccount {
  readonly userId: number;
  public userName: string;
  protected userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount {
  // test(){
  //     this.userBalance
  // }
}

const personAccount = new BankAccount(111, "Tomal", 234);

personAccount.addBalance(123);
personAccount.addBalance(223);
console.log(personAccount);
