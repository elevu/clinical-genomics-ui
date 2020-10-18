import { colorFromString } from './helpers'

test('Return an Antd color given a string', () => {
  const color = colorFromString('test string')
  expect(color).toEqual('red')
})
