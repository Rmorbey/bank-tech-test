const Transaction = require('./transaction');

describe('Transaction', () => {
  describe('deposit transaction', () => {
    let transaction;

    beforeEach(() => {
      transaction = new Transaction('deposit', 1000, 1000, '22/06/2022')
    }) 

    it('records the type of the transaction', () => {
      expect(transaction.type).toBe('deposit')
    })
  
    it('records the amount of the transaction', () => {
      expect(transaction.amount).toBe(1000)
    })
  
    it('records the balance of the transaction', () => {
      expect(transaction.balance).toBe(1000)
    })
  
    it('records the date of the transaction', () => {
      expect(transaction.date).toBe('22/06/2022')
    })

  })

  describe('withdraw transaction', () => {
    let transaction;

    beforeEach(() => {
      transaction = new Transaction('withdraw', 500, 2000, '23/06/2022')
    }) 
    
    it('records the type of the transaction', () => {
      expect(transaction.type).toBe('withdraw')
    })

    it('records the amount of the transaction', () => {
      expect(transaction.amount).toBe(500)
    })
  
    it('records the balance of the transaction', () => {
      expect(transaction.balance).toBe(2000)
    })
  
    it('records the date of the transaction', () => {
      expect(transaction.date).toBe('23/06/2022')
    })
  })
})