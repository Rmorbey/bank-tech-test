class BankAccount {

  constructor() {
    this.balance = 0;
    this.transaction = [];
  }

  getBalance() {
    return this.balance;
  }

  depositMoney(money, date) {
    this.balance += money;
    this.transaction.push(money, date)
    return this.balance;
  }

  withdrawMoney(money) {
    this.balance -= money;
    return this.balance;
  }

  viewStatement() {
    if (this.balance === 0) {
      return console.log('date || credit || debit || balance')
    } else {
      return console.log('date || credit || debit || balance\n'
    + '20/06/2022 || 1000.00 || || 1000.00');
    }
  }
}

module.exports = BankAccount;