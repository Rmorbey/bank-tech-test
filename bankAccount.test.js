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

      bank.balance = 20;
  
      expect(bank.withdrawMoney(20)).toBe(0)
    })

    it('User can withdraw money multiple times from the bank account and show the balance', () => {
      let bank = new BankAccount();

      bank.balance = 350

      bank.withdrawMoney(100);
      bank.withdrawMoney(100);
      bank.withdrawMoney(100);
  
      expect(bank.getBalance()).toBe(50)
    })
  })

  it('User can deposit and withdraw money and the balance will be correct', () => {
    let bank = new BankAccount();

    bank.balance = 150;

    bank.withdrawMoney(100);
    bank.depositMoney(1000);
    bank.depositMoney(500);
    bank.withdrawMoney(750);

    expect(bank.getBalance()).toBe(800)
  })
})