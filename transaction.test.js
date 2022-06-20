const Transaction = require('./transaction');

describe('Transaction', () => {
  it('records the date of the transaction', () => {
    let transaction = new Transaction('deposit', 1000, 1000, '20/06/2022')

    expect(transaction.type).toBe('deposit')
  })
})