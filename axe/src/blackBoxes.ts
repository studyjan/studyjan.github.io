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

const blackBoxes480x300 = (ratio: number) => {
  return [
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(199, 58, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 8,
      class: 'blackBox',
      dimension: widthHeight(141, 141, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 20,
      class: 'blackBox',
      dimension: widthHeight(31, 31, ratio),
      position: leftTop(199, 58, ratio),
    },


    {
      frame: 3,
      class: 'blackBox',
      dimension: widthHeight(108, 295, ratio),
      position: leftBottom(0, 0, ratio),
    },
    {
      frame: 8,
      class: 'blackBox',
      dimension: widthHeight(257, 192, ratio),
      position: leftBottom(0, 0, ratio),
    },
    {
      frame: 10,
      class: 'blackBox',
      dimension: widthHeight(31, 31, ratio),
      position: leftBottom(108, 384, ratio),
    },
    {
      frame: 13,
      class: 'blackBox',
      dimension: widthHeight(58, 59, ratio),
      position: leftBottom(261, 192, ratio),
    },
    {
      frame: 18,
      class: 'blackBox',
      dimension: widthHeight(58, 59, ratio),
      position: leftBottom(412, 33, ratio),
    },


    {
      frame: 8,
      class: 'blackBox',
      dimension: widthHeight(94, 187, ratio),
      position: rightBottom(0, 0, ratio),
    },
    {
      frame: 4,
      class: 'blackBox',
      dimension: widthHeight(349, 113, ratio),
      position: rightBottom(0, 0, ratio),
    },
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(58, 59, ratio),
      position: rightBottom(94, 187, ratio),
    },
    {
      frame: 19,
      class: 'blackBox',
      dimension: widthHeight(31, 31, ratio),
      position: rightBottom(157, 293, ratio),
    },
    {
      frame: 3,
      class: 'blackBox',
      dimension: widthHeight(93, 151, ratio),
      position: rightBottom(0, 324, ratio),
    },
  ]
}

const blackBoxes990and970x250 = (ratio: number) => {
  return [
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(89, 7, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 20,
      class: 'blackBox',
      dimension: widthHeight(49, 23, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 4,
      class: 'blackBox',
      dimension: widthHeight(30, 50, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 19,
      class: 'blackBox',
      dimension: widthHeight(10, 10, ratio),
      position: leftTop(49, 24, ratio),
    },


    {
      frame: 3,
      class: 'blackBox',
      dimension: widthHeight(65, 25, ratio),
      position: leftBottom(0, 0, ratio),
    },
    {
      frame: 7,
      class: 'blackBox',
      dimension: widthHeight(25, 55, ratio),
      position: leftBottom(0, 0, ratio),
    },
    {
      frame: 5,
      class: 'blackBox',
      dimension: widthHeight(10, 10, ratio),
      position: leftBottom(25, 55, ratio),
    },
    {
      frame: 20,
      class: 'blackBox',
      dimension: widthHeight(12, 16, ratio),
      position: leftBottom(0, 72, ratio),
    },


    {
      frame: 6,
      class: 'blackBox',
      dimension: widthHeight(111, 51, ratio),
      position: rightBottom(0, 0, ratio),
    },
    {
      frame: 10,
      class: 'blackBox',
      dimension: widthHeight(28, 91, ratio),
      position: rightBottom(0, 0, ratio),
    },
    {
      frame: 23,
      class: 'blackBox',
      dimension: widthHeight(29, 29, ratio),
      position: rightBottom(28, 91, ratio),
    },
    {
      frame: 15,
      class: 'blackBox',
      dimension: widthHeight(11, 11, ratio),
      position: rightBottom(57, 120, ratio),
    },
  ]
}

const blackBoxes1200x400 = (ratio: number) => {
  return [
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(116, 23, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 5,
      class: 'blackBox',
      dimension: widthHeight(64, 44, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 8,
      class: 'blackBox',
      dimension: widthHeight(40, 79, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 15,
      class: 'blackBox',
      dimension: widthHeight(13, 13, ratio),
      position: leftTop(64, 44, ratio),
    },


    {
      frame: 3,
      class: 'blackBox',
      dimension: widthHeight(86, 84, ratio),
      position: leftBottom(0, 0, ratio),
    },
    {
      frame: 6,
      class: 'blackBox',
      dimension: widthHeight(33, 122, ratio),
      position: leftBottom(0, 0, ratio),
    },
    {
      frame: 15,
      class: 'blackBox',
      dimension: widthHeight(13, 13, ratio),
      position: leftBottom(33, 122, ratio),
    },
    {
      frame: 18,
      class: 'blackBox',
      dimension: widthHeight(16, 20, ratio),
      position: leftBottom(0, 146, ratio),
    },
    {
      frame: 20,
      class: 'blackBox',
      dimension: widthHeight(40, 40, ratio),
      position: leftBottom(123, 3, ratio),
    },


    {
      frame: 7,
      class: 'blackBox',
      dimension: widthHeight(143, 27, ratio),
      position: rightBottom(0, 0, ratio),
    },
    {
      frame: 11,
      class: 'blackBox',
      dimension: widthHeight(37, 78, ratio),
      position: rightBottom(0, 0, ratio),
    },
    {
      frame: 16,
      class: 'blackBox',
      dimension: widthHeight(37, 37, ratio),
      position: rightBottom(37, 80, ratio),
    },
    {
      frame: 20,
      class: 'blackBox',
      dimension: widthHeight(14, 14, ratio),
      position: rightBottom(74, 117, ratio),
    },
  ]
}

const blackBoxes1200x200 = (ratio: number) => {
  return [
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(79, 10, ratio),
      position: leftTop(0, 0, ratio),
    },
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(29, 31, ratio),
      position: leftTop(0, 0, ratio),
    },


    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(79, 23, ratio),
      position: leftBottom(0, 0, ratio),
    },
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(35, 56, ratio),
      position: leftBottom(0, 0, ratio),
    },
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(11, 11, ratio),
      position: leftBottom(35, 56, ratio),
    },
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(18, 17, ratio),
      position: leftBottom(2, 75, ratio),
    },


    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(47, 46, ratio),
      position: rightBottom(0, 0, ratio),
    },
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(19, 19, ratio),
      position: rightBottom(47, 46, ratio),
    },
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(19, 38, ratio),
      position: rightBottom(28, 65, ratio),
    },
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(19, 19, ratio),
      position: rightBottom(8, 103, ratio),
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
  if (size === '480x300') {
    return blackBoxes480x300(ratio)
  }
  if (size === '990x250' || size === '970x250') {
    return blackBoxes990and970x250(ratio)
  }
  if (size === '1200x400') {
    return blackBoxes1200x400(ratio)
  }

  if (size === '1200x200') {
    return blackBoxes1200x200(ratio)
  }

  return []
}

