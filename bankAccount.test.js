const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  it('Bank account starts with a balance of 0', () => {
    let bank = new BankAccount();
    expect(bank.getBalance()).toBe(0)
  })

  describe(`.depositMoney`, () => {
    it('User can deposit money into the bank account', () => {
      let bank = new BankAccount();
  
      expect(bank.depositMoney(20)).toBe(20)
    });

    it('User can deposit money multiple times into the bank account and show the balance', () => {
      let bank = new BankAccount();

      bank.depositMoney(100);
      bank.depositMoney(100);
      bank.depositMoney(100);

      expect(bank.getBalance()).toBe(300)
    });
  })

  describe(`.withdrawMoney`, () => {
    it('User can withdraw money from the bank account', () => {
      let bank = new BankAccount();
  
      expect(bank.withdrawMoney(20)).toBe(0)
    })
  })
})