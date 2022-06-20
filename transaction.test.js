const Transaction = require('./transaction');

describe('Transaction', () => {
  describe('deposit transaction', () => {
    it('records the type of the transaction', () => {
      let transaction = new Transaction('deposit', 1000, 1000, '20/06/2022')
  
      expect(transaction.type).toBe('deposit')
    })
  
    it('records the amount of the transaction', () => {
      let transaction = new Transaction('deposit', 1000, 1000, '20/06/2022')
  
      expect(transaction.amount).toBe(1000)
    })
  
    it('records the balance of the transaction', () => {
      let transaction = new Transaction('deposit', 1000, 1000, '20/06/2022')
  
      expect(transaction.balance).toBe(1000)
    })
  
    it('records the date of the transaction', () => {
      let transaction = new Transaction('deposit', 1000, 1000, '20/06/2022')
  
      expect(transaction.date).toBe('20/06/2022')
    })

  })

  describe('withdraw transaction', () => {
    it('records the type of the transaction', () => {
      let transaction = new Transaction('withdraw', 1000, 2000, '21/06/2022')
      expect(transaction.type).toBe('withdraw')
    })
  })

})