import lock from '../src/lock'

describe('test lock', () => {
  test('output step from 0000 to target', () => {
    expect(lock('0202', ['0201', '0101', '0102', '1212', '2002'])).toBe(6)
  })
})