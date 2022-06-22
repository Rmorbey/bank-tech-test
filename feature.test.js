const BankAccount = require('./bankAccount');
const Transaction = require('./transaction');

describe('Feature test', () => {

  let bank = new BankAccount();
  let transaction = new Transaction();

  it(`Displays all of the features a user would interact with. Deposit, withdraw and viewing Statement`, () => {
    console.log = jest.fn();

    bank.depositMoney(1000);
    bank.withdrawMoney(50);
    bank.depositMoney(700);
    bank.withdrawMoney(90);
    bank.viewStatement();

    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n'
    + `${transaction.date} || || 90.00 || 1560.00\n`
    + `${transaction.date} || 700.00 || || 1650.00\n`
    + `${transaction.date} || || 50.00 || 950.00\n`
    + `${transaction.date} || 1000.00 || || 1000.00`
    )
  })
})