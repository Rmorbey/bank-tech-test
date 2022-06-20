const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  it('Bank account starts with a balance of 0', () => {
    let bank = new BankAccount();
    expect(bank.getBalance()).toBe(0)
  })
})