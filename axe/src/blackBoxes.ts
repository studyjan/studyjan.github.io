import { Options } from "./animate";
import { leftTop, widthHeight } from "./utils";

const blackBoxes480x480 = (ratio: number = 1) => {
  return [
    {
      frame: 2,
      class: 'blackBox',
      position: leftTop(0, 0, ratio),
      dimension: widthHeight(134, 22, ratio),
    },
    {
      frame: 3,
      class: 'blackBox',
      position: leftTop(0, 400, ratio),
      dimension: widthHeight(32, 33, ratio),
    },
    {
      frame: 4,
      class: 'blackBox',
      position: leftTop(62, 62, ratio),
      dimension: widthHeight(19, 19, ratio),
    },
    {
      frame: 6,
      class: 'blackBox',
      position: leftTop(32, 370, ratio),
      dimension: widthHeight(9, 8, ratio),
    },
    {
      frame: 9,
      class: 'blackBox',
      position: leftTop(370, 55, ratio),
      dimension: widthHeight(11, 11, ratio),
    },
    {
      frame: 11,
      class: 'blackBox',
      position: leftTop(420, 0, ratio),
      dimension: widthHeight(27, 35, ratio),
    },
    {
      frame: 14,
      class: 'blackBox',
      position: leftTop(399, 35, ratio),
      dimension: widthHeight(21, 21, ratio),
    },
    {
      frame: 15,
      class: 'blackBox',
      position: leftTop(79, 414, ratio),
      dimension: widthHeight(18, 19, ratio),
    },
    {
      frame: 16,
      class: 'blackBox',
      position: leftTop(315, 0, ratio),
      dimension: widthHeight(55, 34, ratio),
    },
    {
      frame: 17,
      class: 'blackBox',
      position: leftTop(0, 0, ratio),
      dimension: widthHeight(47, 60, ratio),
    },
    {
      frame: 19,
      class: 'blackBox',
      position: leftTop(134, 22, ratio),
      dimension: widthHeight(39, 39, ratio),
    },
    {
      frame: 19,
      class: 'blackBox',
      position: leftTop(447, 0, ratio),
      dimension: widthHeight(33, 88, ratio),
    },
    {
      frame: 20,
      class: 'blackBox',
      position: leftTop(125, 461, ratio),
      dimension: widthHeight(18, 19, ratio),
    },
    {
      frame: 23,
      class: 'blackBox',
      position: leftTop(0, 433, ratio),
      dimension: widthHeight(79, 47, ratio),
    },
  ]
}

const blackBoxes300x250 = (ratio: number) => {
  const diff = 80.2
  return [
    {
      frame: 2,
      class: 'blackBox',
      position: leftTop(0, 0, ratio),
      dimension: widthHeight(134, 22, ratio),
    },
    {
      frame: 3,
      class: 'blackBox',
      position: leftTop(0, 400 - diff, ratio),
      dimension: widthHeight(32, 33, ratio),
    },
    {
      frame: 4,
      class: 'blackBox',
      position: leftTop(62, 62, ratio),
      dimension: widthHeight(19, 19, ratio),
    },
    {
      frame: 6,
      class: 'blackBox',
      position: leftTop(32, 370 - diff, ratio),
      dimension: widthHeight(9, 8, ratio),
    },
    {
      frame: 9,
      class: 'blackBox',
      position: leftTop(1043, 220, 300/1373),
      dimension: widthHeight(18, 18, 300/1373),
    },
    {
      frame: 11,
      class: 'blackBox',
      position: leftTop(420, 0, ratio),
      dimension: widthHeight(27, 35, ratio),
    },
    {
      frame: 14,
      class: 'blackBox',
      position: leftTop(399, 35, ratio),
      dimension: widthHeight(21, 21, ratio),
    },
    {
      frame: 15,
      class: 'blackBox',
      position: leftTop(79, 414 - diff, ratio),
      dimension: widthHeight(18, 19, ratio),
    },
    {
      frame: 16,
      class: 'blackBox',
      position: leftTop(315, 0, ratio),
      dimension: widthHeight(55, 34, ratio),
    },
    {
      frame: 17,
      class: 'blackBox',
      position: leftTop(0, 0, ratio),
      dimension: widthHeight(47, 60, ratio),
    },
    {
      frame: 19,
      class: 'blackBox',
      position: leftTop(134, 22, ratio),
      dimension: widthHeight(39, 39, ratio),
    },
    {
      frame: 19,
      class: 'blackBox',
      position: leftTop(447, 0, ratio),
      dimension: widthHeight(33, 88, ratio),
    },
    {
      frame: 20,
      class: 'blackBox',
      position: leftTop(125, 461 - diff, ratio),
      dimension: widthHeight(18, 19, ratio),
    },
    {
      frame: 23,
      class: 'blackBox',
      position: leftTop(0, 433 - diff, ratio),
      dimension: widthHeight(79, 47, ratio),
    },
  ]
}

export const getBlackBoxes = (size: Options['size'], ratio: number) => {
  if (size === '480x480') {
    return blackBoxes480x480(ratio)
  }
  if (size === '300x250') {
    return blackBoxes300x250(ratio)
  }
}

