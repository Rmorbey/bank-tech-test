class BankAccount {

  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  depositMoney(money) {
    this.balance += money;
    return this.balance;
  }

  withdrawMoney(money) {
    return money - money;
  }
}

module.exports = BankAccount;