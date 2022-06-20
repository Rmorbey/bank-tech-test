class Transaction {
  constructor(type, amount, balance, date) {
    this.type = type;
    this.amount = amount;
    this.balance = balance;
    this.date = date;
  }
}

module.exports = Transaction;