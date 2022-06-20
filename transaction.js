class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
    this.balance = 1000;
    this.date = '20/06/2022';
  }
}

module.exports = Transaction;