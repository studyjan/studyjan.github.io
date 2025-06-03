export { createElement } from './createElement'

export const leftTop = (left: number, top: number, ratio: number = 1) => ({
  left: left * ratio,
  top: top * ratio,
})

export const widthHeight = (width: number, height: number, ratio: number = 1) => ({
  width: width * ratio,
  height: height * ratio,
})
