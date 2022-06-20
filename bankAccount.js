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
    this.balance -= money;
    return this.balance;
  }

  viewStatement() {
    return console.log('date || credit || debit || balance');
  }
}

module.exports = BankAccount;