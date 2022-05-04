import { welcomeJest } from '../src/index'

test('should show welcome message', () => {
  expect(welcomeJest()).toMatchInlineSnapshot(`"welcome jest"`)
})