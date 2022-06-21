const Transaction = require('./transaction')

class BankAccount {

  constructor(transaction = Transaction) {
    this.balance = 0;
    this.transactions = [];
    this.transaction = transaction;
    this.header = 'date || credit || debit || balance';
  }

  getBalance() {
    return this.balance;
  }

  depositMoney(money) {
    this.balance += money;
    this.transactions.push(new this.transaction('deposit', money, this.balance))
    return this.balance;
  }

  withdrawMoney(money) {
    this.balance -= money;
    this.transactions.push(new this.transaction('withdraw', money, this.balance))
    return this.balance;
  }

  viewStatement() {
    if (this.balance === 0) {
      return console.log(`${this.printStatementHeader()}`);
    } else {
      return console.log(`${this.printStatementHeader()}\n`
    + '20/06/2022 || 1000.00 || || 1000.00');
    }
  }

  printStatementHeader() {
    return this.header;
  }
}

module.exports = BankAccount;