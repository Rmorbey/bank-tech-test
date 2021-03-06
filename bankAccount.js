const Transaction = require('./transaction')

class BankAccount {

  constructor(transaction = Transaction) {
    this.balance = 0.00;
    this.transactions = [];
    this.transaction = transaction;
    this.statement = [];
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

  viewStatement(transactions = this.transactions ) {
    const statement = `${this.header}\n`
    + `${this.sortTransactions(transactions)}`;
    return console.log(statement);
  }

  sortTransactions(transactions) {
    transactions.forEach((transaction) => {
      this.transactionFormat(transaction);
    })
    return this.statement.reverse().join('\n');
  }

  transactionFormat(transaction) {
    if(transaction.type === 'deposit') {
      this.statement.push(`${transaction.date} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)}`);
    } if(transaction.type === 'withdraw') {
      this.statement.push(`${transaction.date} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)}`);
    }
  }
}

module.exports = BankAccount;