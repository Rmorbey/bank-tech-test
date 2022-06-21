const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  let bank;

  beforeEach(() => {
    bank = new BankAccount();
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

  describe(`View statement and transactions`, () => {
    it(`displays the header`, () => {
      console.log = jest.fn();

      bank.viewStatement();

      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance')
    });

    it(`displays the header with a deposit transaction`, () => {
      console.log = jest.fn();

      bank.depositMoney(1000, '20-06-2022');
      bank.viewStatement();

      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n'
      + '20/06/2022 || 1000.00 || || 1000.00')
    });

    it(`Transactions contain the depoist transaction data`, () => {
      const expected = ['deposit', 1000, 1000]

      bank.depositMoney(1000)

      expect(bank.transactions).toEqual(expect.arrayContaining(expected))
    });


  })
})