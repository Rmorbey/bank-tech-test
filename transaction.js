class Transaction {
  constructor(type, amount, balance, date = this.formatDate()) {
    this.type = type;
    this.amount = amount;
    this.balance = balance;
    this.date = date;
  }

  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  formatDate(date = new Date()) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }
}

module.exports = Transaction;