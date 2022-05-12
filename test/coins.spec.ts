import { coinChange1, coinChange2 } from '../src/coins'

describe('least coin count', () => {
  test('first method: 1/2/5 three kinds of coins, amount 11', () => {
    expect(coinChange1([1,2,5], 11)).toBe(3)
  })

  test('second method: 1/2/5 kinds of coins, amount 11', () => {
    expect(coinChange2([1,2,5], 11)).toBe(3)
  })
})
