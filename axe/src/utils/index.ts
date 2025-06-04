export { createElement } from './createElement'

export const leftTop = (left: number, top: number, ratio: number = 1) => ({
  left: left * ratio,
  top: top * ratio,
})

export const rightTop = (right: number, top: number, ratio: number = 1) => ({
  right: right * ratio,
  top: top * ratio,
})

export const leftBottom = (left: number, bottom: number, ratio: number = 1) => ({
  left: left * ratio,
  bottom: bottom * ratio,
})

export const rightBottom = (right: number, bottom: number, ratio: number = 1) => ({
  right: right * ratio,
  bottom: bottom * ratio,
})

export const widthHeight = (width: number, height: number, ratio: number = 1) => ({
  width: width * ratio,
  height: height * ratio,
})
