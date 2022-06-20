class Transaction {
  constructor(type) {
    this.type = type;
    this.amount = 1000;
    this.balance = 1000;
    this.date = '20/06/2022';
  }
}

module.exports = Transaction;