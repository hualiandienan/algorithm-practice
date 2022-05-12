import getSubsets from '../src/subset'

describe('test subset algorithm', () => {
  test('input [1,2,3], check result', () => {
    const expectArray = [[1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
    const result = getSubsets([1, 2, 3])
    expect(result.length).toBe(7)

    expect(result).toEqual(expect.arrayContaining(expectArray))
   })
})
