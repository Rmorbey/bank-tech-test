const BankAccount = require('./bankAccount');
const Transaction = require('./transaction');

describe('BankAccount', () => {

  let bank;
  let transaction;

  beforeEach(() => {
    bank = new BankAccount();
    transaction = new Transaction();
  }) 

  it('Bank account starts with a balance of 0', () => {
    expect(bank.getBalance()).toBe(0)
  })

  describe(`Account interactions`, () => {

    it('User can deposit money multiple times into the bank account and show the balance', () => {

      bank.depositMoney(100);
      bank.depositMoney(100);
      bank.depositMoney(100);

      expect(bank.getBalance()).toBe(300)
    });

    it('User can withdraw money multiple times from the bank account and show the balance', () => {
  
      bank.balance = 350
  
      bank.withdrawMoney(100);
      bank.withdrawMoney(100);
      bank.withdrawMoney(100);
  
      expect(bank.getBalance()).toBe(50)
    });

    it('User can deposit and withdraw money and the balance will be correct', () => {
  
      bank.balance = 150;
  
      bank.withdrawMoney(100);
      bank.depositMoney(1000);
      bank.depositMoney(500);
      bank.withdrawMoney(750);
  
      expect(bank.getBalance()).toBe(800)
    });
  });

  describe(`View transactions`, () => {

    it(`Transactions contain the deposit transaction data`, () => {
      const expected = [{"amount": 1000, "balance": 1000, "date": `${transaction.date}`, "type": "deposit"}]

      bank.depositMoney(1000)

      expect(bank.transactions).toEqual(expect.arrayContaining(expected))
    });

    it(`Transactions contain the withdraw transaction data`, () => {
      const expected = [{"amount": 500, "balance": 500, "date": `${transaction.date}`, "type": "withdraw"}]

      bank.balance = 1000;

      bank.withdrawMoney(500)

      expect(bank.transactions).toEqual(expect.arrayContaining(expected))
    });

    it(`Transactions contain the deposit and withdraw transaction data`, () => {
      const expected = [{"amount": 1000, "balance": 1000, "date": `${transaction.date}`, "type": "deposit"},
       {"amount": 800, "balance": 200, "date": `${transaction.date}`, "type": "withdraw"}]

      bank.depositMoney(1000)
      bank.withdrawMoney(800)

      expect(bank.transactions).toEqual(expect.arrayContaining(expected))
    });
  })

  describe('view statements', () => {

    it(`displays the header with a deposit transaction`, () => {
      console.log = jest.fn();

      bank.depositMoney(1000);
      bank.viewStatement();

      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n'
      + `${transaction.date} || 1000.00 || || 1000.00`)
    });

    it(`displays the header with a withdraw transaction`, () => {
      console.log = jest.fn();

      bank.balance = 1050;

      bank.withdrawMoney(1000);
      bank.viewStatement();

      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n'
      + `${transaction.date} || || 1000.00 || 50.00`)
    });

    it(`displays the header with a deposit and withdraw transaction`, () => {
      console.log = jest.fn();

      bank.depositMoney(1000);
      bank.withdrawMoney(50);
      bank.depositMoney(700);
      bank.withdrawMoney(90);
      bank.viewStatement();

      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n'
      + `${transaction.date} || 1000.00 || || 1000.00\n`
      + `${transaction.date} || || 50.00 || 950.00\n`
      + `${transaction.date} || 700.00 || || 1650.00\n`
      + `${transaction.date} || || 90.00 || 1560.00`)
    })
  })
})