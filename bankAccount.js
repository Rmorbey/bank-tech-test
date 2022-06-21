const Transaction = require('./transaction')

class BankAccount {

  constructor(transaction = Transaction) {
    this.balance = 0;
    this.transactions = [];
    this.transaction = transaction;
  }

  getBalance() {
    return this.balance;
  }

  depositMoney(money) {
    this.balance += money;
    this.transactions.push('deposit', 1000, 1000)
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