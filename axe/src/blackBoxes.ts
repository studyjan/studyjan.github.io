import { Frame, Options } from "./animate";
import { leftBottom, leftTop, rightBottom, rightTop, widthHeight } from "./utils";

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
      position: leftTop(1043, 220, 300 / 1373),
      dimension: widthHeight(18, 18, 300 / 1373),
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

const blackBoxes300x600 = (ratio: number) => {
  return [
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(194, 207, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 15,
      class: 'blackBox',
      dimension: widthHeight(373, 124, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 18,
      class: 'blackBox',
      dimension: widthHeight(66, 260, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 17,
      class: 'blackBox',
      dimension: widthHeight(137, 137, ratio),
      position: leftTop(373, 124, ratio),
    },
    {
      frame: 2,
      class: 'blackBox',
      dimension: widthHeight(137, 124, ratio),
      position: leftTop(510, 0, ratio),
    },
    {
      frame: 20,
      class: 'blackBox',
      dimension: widthHeight(68, 68, ratio),
      position: leftTop(116, 260, ratio),
    },
    {
      frame: 22,
      class: 'blackBox',
      dimension: widthHeight(85, 85, ratio),
      position: leftTop(100, 1485, ratio),
    },

    {
      frame: 4,
      class: 'blackBox',
      dimension: widthHeight(140, 140, ratio),
      position: leftBottom(0, 0, ratio),
    },
    {
      frame: 5,
      class: 'blackBox',
      dimension: widthHeight(60, 60, ratio),
      position: leftBottom(140, 140, ratio),
    },

    {
      frame: 17,
      class: 'blackBox',
      dimension: widthHeight(132, 252, ratio),
      position: rightBottom(0, 0, ratio),
    },
    {
      frame: 8,
      class: 'blackBox',
      dimension: widthHeight(236, 104, ratio),
      position: rightBottom(0, 0, ratio),
    },
    {
      frame: 12,
      class: 'blackBox',
      dimension: widthHeight(60, 60, ratio),
      position: rightBottom(132, 252, ratio),
    },
    {
      frame: 15,
      class: 'blackBox',
      dimension: widthHeight(52, 56, ratio),
      position: rightBottom(0, 408, ratio),
    },
  ]
}

const blackBoxes160x600 = (ratio: number) => {
  return [
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(169, 111, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 15,
      class: 'blackBox',
      dimension: widthHeight(272, 70, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 18,
      class: 'blackBox',
      dimension: widthHeight(95, 150, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 17,
      class: 'blackBox',
      dimension: widthHeight(80, 80, ratio),
      position: leftTop(272, 70, ratio),
    },
    {
      frame: 2,
      class: 'blackBox',
      dimension: widthHeight(80, 70, ratio),
      position: leftTop(272 + 80, 0, ratio),
    },
    {
      frame: 20,
      class: 'blackBox',
      dimension: widthHeight(39, 39, ratio),
      position: leftTop(124, 149, ratio),
    },
    {
      frame: 22,
      class: 'blackBox',
      dimension: widthHeight(38, 38, ratio),
      position: leftTop(90, 771, ratio),
    },
    {
      frame: 19,
      class: 'blackBox',
      dimension: widthHeight(38, 38, ratio),
      position: rightTop(0, 0, ratio),
    },
    {
      frame: 17,
      class: 'blackBox',
      dimension: widthHeight(126, 352, ratio),
      position: rightTop(0, 675, ratio),
    },
    {
      frame: 8,
      class: 'blackBox',
      dimension: widthHeight(224, 85, ratio),
      position: leftTop(426, 738, ratio),
    },
    {
      frame: 12,
      class: 'blackBox',
      dimension: widthHeight(48, 48, ratio),
      position: leftTop(466, 626, ratio),
    },
    {
      frame: 15,
      class: 'blackBox',
      dimension: widthHeight(48, 48, ratio),
      position: leftTop(575, 536, ratio),
    },
  ]
}

export const getBlackBoxes = (size: Options['size'], ratio: number): Frame[] => {
  if (size === '480x480') {
    return blackBoxes480x480(ratio)
  }
  if (size === '300x250') {
    return blackBoxes300x250(ratio)
  }
  if (size === '300x600') {
    return blackBoxes300x600(ratio)
  }
  if (size === '160x600') {
    return blackBoxes160x600(ratio)
  }
}

