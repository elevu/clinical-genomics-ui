import { presets } from './constants'

// Returns an ANTD preset color given any string
export const colorFromString = (str: string) => {
  const numberA = parseInt(String(str.length).charAt(0))
  return presets[numberA]
}
