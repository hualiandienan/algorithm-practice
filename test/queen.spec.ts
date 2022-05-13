import solveQueen from '../src/queen'

describe('deploy N * N queen', () => {
  test('output 1 * 1 queen board', () => {
    expect(solveQueen(1)).toEqual([['Q']])
  })

  test('output 4 * 4 queen board', () => {
    expect(solveQueen(4)).toEqual([['.Q..','...Q','Q...','..Q.'], ['..Q.','Q...','...Q','.Q..']])
  })
})