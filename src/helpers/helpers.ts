import { presets } from './constants'

// Returns an Antd preset color given any string
export const colorFromString = (str: string, colorList = presets) => {
  const numberFromString = parseInt(String(str.length).charAt(0))
  return colorList[numberFromString]
}
