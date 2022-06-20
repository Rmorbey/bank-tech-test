const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  it('Bank account starts with a balance of 0', () => {
    let bank = new BankAccount();
    expect(bank.getBalance()).toBe(0)
  })

  it('User can submit funds into bank account', () => {
    let bank = new BankAccount();

    expect(bank.depositMoney(20)).toBe(20)
  })
  
})