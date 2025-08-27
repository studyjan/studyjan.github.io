import { Frame, Options } from "./animate";
import { leftTop, rightBottom, rightTop, widthHeight } from "./utils";

const ctaDim = (language: 'SK' | 'CZ', ratio = 1) => {
  if (language === 'SK') {
    return widthHeight(584, 129, ratio)
  } else {
    return widthHeight(584, 129, ratio)
  }
}

const getFrames300x250 = ({
                            spray,
                            icon,
                            language,
                            size,
                            ratio,
                            text_1,
                            text_2
                          }: Options, frameTime: number) => {
  return [
    {
      frame: 0,
      class: 'image',
      position: leftTop(180, 55),
      dimension: widthHeight(156.2, 471.8, ratio * .9),

      url: `./i_spray_${spray}.png`,
      style: {
        rotate: "9.695deg",
        zIndex: "1",
        animation: `${size === "300x250" ? "moveSprayLess" : "moveSpray"} 4000ms linear infinite`
      }
    },
    {
      frame: 25,
      class: 'image',
      position: leftTop(15, 96, ratio),
      dimension: ctaDim(language, ratio * (size === "300x250" ? 0.5 : 0.5)),

      url: `./i_0_CTAbutton${language}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${6 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 31,
      class: 'image',
      position: leftTop(259, 145, ratio),
      dimension: widthHeight(29, 43, ratio),

      url: './i_click.png',
      style: {
        opacity: '0',
        transition: `opacity ${4 * frameTime}ms`,
        animation: `moveCursor 2000ms infinite`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 37,
      class: 'text',
      position: leftTop(30, 172, ratio),
      dimension: widthHeight(400, 34, ratio),

      text: text_1,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${35 * ratio}px`
      }
    },
    {
      frame: 42,
      class: 'text',
      position: leftTop(30, 218, ratio),
      dimension: widthHeight(400, 34, ratio),

      text: text_2,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${35 * ratio}px`
      }
    },
    {
      frame: 52,
      class: 'image',
      position: leftTop((size === "300x250" ? 138 : 96), (270), ratio),
      dimension: {
        ["umbrella"]: widthHeight(762, 727, 0.2 * ratio * (341 / 428)),
        ["sun_umbrella"]: widthHeight(1479, 1481, 0.12 * ratio * (341 / 428)),
      }[icon],

      url: `./i_icon_${icon}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
  ]
}

const getFrames480x480 = ({
                            spray,
                            icon,
                            language,
                            size,
                            ratio,
                            text_1,
                            text_2
                          }: Options, frameTime: number) => {
  return [
    {
      frame: 0,
      class: 'image',
      position: leftTop(275, 139, ratio),
      dimension: widthHeight(156.2, 471.8, ratio * .9),

      url: `./i_spray_${spray}.png`,
      style: {
        rotate: "9.695deg",
        zIndex: "1",
        animation: `${size === "300x250" ? "moveSprayLess" : "moveSpray"} 4000ms linear infinite`
      }
    },
    {
      frame: 25,
      class: 'image',
      position: leftTop(15, 96, ratio),
      dimension: ctaDim(language, ratio * (size === "300x250" ? 0.5 : 0.5)),

      url: `./i_0_CTAbutton${language}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${6 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 31,
      class: 'image',
      position: leftTop(259, 145, ratio),
      dimension: widthHeight(29, 43, ratio),

      url: './i_click.png',
      style: {
        opacity: '0',
        transition: `opacity ${4 * frameTime}ms`,
        animation: `moveCursor 2000ms infinite`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 37,
      class: 'text',
      position: leftTop(30, 172, ratio),
      dimension: widthHeight(400, 34, ratio),

      text: text_1,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${35 * ratio}px`
      }
    },
    {
      frame: 42,
      class: 'text',
      position: leftTop(30, 218, ratio),
      dimension: widthHeight(400, 34, ratio),

      text: text_2,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${35 * ratio}px`
      }
    },
    {
      frame: 52,
      class: 'image',
      position: leftTop((96), (278), ratio),
      dimension: {
        ["umbrella"]: widthHeight(762, 727, 0.2 * ratio * (1)),
        ["sun_umbrella"]: widthHeight(1479, 1481, 0.12 * ratio * (1)),
      }[icon],

      url: `./i_icon_${icon}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
  ]
}

const getFrames160x600 = ({ spray, icon, language, size, ratio, text_1, text_2 }: Options, frameTime: number) => {
  return [
    {
      frame: 0,
      class: 'image',
      position: leftTop(0, 1000 - 40 * 4, ratio),
      dimension: widthHeight(156 * 4 * 1, 471 * 4 * 1, ratio),

      url: `./i_spray_${spray}.png`,
      style: {
        rotate: "6deg",
        zIndex: "1",
        animation: `${"moveSpray"} 4000ms linear infinite`
      }
    },
    {
      frame: 1,
      class: 'blackBox',
      dimension: widthHeight(400, 1000, ratio),
      position: rightBottom(0, 0, ratio),
    },
    {
      frame: 25,
      class: 'image',
      position: leftTop(33, 259, ratio),
      dimension: ctaDim(language, ratio),

      url: `./i_0_CTAbutton${language}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${6 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 26,
      class: 'image',
      position: leftTop((55), (155)),
      dimension: {
        ["bubble"]: widthHeight(203, 190, ratio * 0.8),
      }[icon],

      url: `./i_icon_${icon}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 31,
      class: 'image',
      position: leftTop(331, 362, ratio),
      dimension: widthHeight(29 * 2.5, 43 * 2.5, ratio),

      url: './i_click.png',
      style: {
        opacity: '0',
        transition: `opacity ${4 * frameTime}ms`,
        animation: `moveCursor 2000ms infinite`
      },
      nextStyle: {
        opacity: '1'
      }
    },
  ]
}

const getFrames300x600 = ({ spray, icon, language, size, ratio, text_1, text_2 }: Options, frameTime: number) => {
  return [
    {
      frame: 0,
      class: 'image',
      position: leftTop(360, 1000, ratio),
      dimension: widthHeight(156 * 4, 471 * 4, ratio),

      url: `./i_spray_${spray}.png`,
      style: {
        rotate: "9.695deg",
        zIndex: "1",
        animation: `${"moveSpray"} 4000ms linear infinite`
      }
    },

    {
      frame: 25,
      class: 'image',
      position: leftTop(32, 388, ratio),
      dimension: ctaDim(language, ratio * 1.94),

      url: `./i_0_CTAbutton${language}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${6 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 31,
      class: 'image',
      position: leftTop(259 + 165 * 4, 149 + 109 * 4, ratio),
      dimension: widthHeight(29 * 3, 43 * 3, ratio),

      url: './i_click.png',
      style: {
        opacity: '0',
        transition: `opacity ${4 * frameTime}ms`,
        animation: `moveCursor 2000ms infinite`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 37,
      class: 'text',
      position: leftTop(60, 660, ratio),
      dimension: widthHeight(1000, 170, ratio),

      text: text_1,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${132 * ratio}px`
      }
    },
    {
      frame: 42,
      class: 'text',
      position: leftTop(60, 840, ratio),
      dimension: widthHeight(1100, 170, ratio),

      text: text_2,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${132 * ratio}px`
      }
    },
    {
      frame: 52,
      class: 'image',
      position: leftTop(50, 278),
      dimension: {
        ["umbrella"]: widthHeight(762, 727, 0.2 * ratio * 2),
        ["bubble"]: widthHeight(203, 190, ratio),
        ["sun_umbrella"]: widthHeight(1479, 1481, 0.12 * ratio * 2),
      }[icon],

      url: `./i_icon_${icon}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 52,
      class: 'image',
      position: leftTop(190, 17),
      dimension: widthHeight(321, 237, ratio * 0.9),

      url: `./i_icon_battery.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
  ]
}

const getFrames480x300 = ({ spray, icon, language, size, ratio, text_1, text_2 }: Options, frameTime: number) => {
  return [
    {
      frame: 0,
      class: 'image',
      position: leftTop(300 * 1 / ratio, 20 * 1 / ratio, ratio),
      dimension: widthHeight(0.85 * 156 * 1 / ratio, 0.85 * 471 * 1 / ratio, ratio),

      url: `./i_spray_${spray}.png`,
      style: {
        rotate: "9.695deg",
        zIndex: "1",
        animation: `${"moveSpray"} 4000ms linear infinite`
      }
    },

    {
      frame: 25,
      class: 'image',
      position: leftTop(152, 152, ratio),
      dimension: ctaDim(language, ratio * 1.9),

      url: `./i_0_CTAbutton${language}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${6 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },

    {
      frame: 31,
      class: 'image',
      position: leftTop(1113, 330, ratio),
      dimension: widthHeight(29 * 2.5, 43 * 2.5, ratio),

      url: './i_click.png',
      style: {
        opacity: '0',
        transition: `opacity ${4 * frameTime}ms`,
        animation: `moveCursor 2000ms infinite`
      },
      nextStyle: {
        opacity: '1'
      }
    },

    {
      frame: 37,
      class: 'text',
      position: leftTop(210, 413, ratio),
      dimension: widthHeight(1000, 143, ratio),

      text: text_1,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${143 * ratio}px`
      }
    },
    {
      frame: 42,
      class: 'text',
      position: leftTop(210, 413 + 180, ratio),
      dimension: widthHeight(1500, 143, ratio),

      text: text_2,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${143 * ratio}px`
      }
    },

    {
      frame: 52,
      class: 'image',
      position: leftTop(150, 180),
      dimension: {
        ["battery"]: widthHeight(321, 237, ratio * 1.6),
        ["umbrella"]: widthHeight(762, 727, 0.2 * ratio * 2.5),
        ["sun_umbrella"]: widthHeight(1479, 1481, 0.12 * ratio * 2.5),
      }[icon],

      url: `./i_icon_${icon}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },

    {
      frame: 52,
      class: 'image',
      position: leftTop(275, 102),
      dimension: widthHeight(203, 190, ratio * 0.8),

      url: `./i_icon_bubble.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
  ]
}

const getFrames990and970x250 = ({ spray, icon, language, size, ratio, text_1, text_2 }: Options, frameTime: number) => {
  const leftDiff = size === "970x250" ? -20 : 0

  return [
    {
      frame: 0,
      class: 'image',
      position: leftTop(680 + leftDiff, -100, ratio),
      dimension: widthHeight(1.05 * 156 * 1 / ratio, 1.05 * 471 * 1 / ratio, ratio),

      url: `./i_spray_${spray}.png`,
      style: {
        rotate: "9.695deg",
        zIndex: "1",
        animation: `${"moveSpray"} 4000ms linear infinite`
      }
    },
    {
      frame: 25,
      class: 'image',
      position: leftTop(95 + leftDiff, 30, ratio),
      dimension: ctaDim(language, ratio * 0.7334315169),

      url: `./i_0_CTAbutton${language}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${6 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 31,
      class: 'image',
      position: leftTop(425 + leftDiff, 100, ratio),
      dimension: widthHeight(45, 68, ratio),

      url: './i_click.png',
      style: {
        opacity: '0',
        transition: `opacity ${4 * frameTime}ms`,
        animation: `moveCursor 2000ms infinite`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 37,
      class: 'text',
      position: leftTop(130 + leftDiff, 130, ratio),
      dimension: widthHeight(1000, 143, ratio),

      text: text_1,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${44 * ratio}px`
      }
    },
    {
      frame: 42,
      class: 'text',
      position: leftTop(130 + leftDiff, 180, ratio),
      dimension: widthHeight(1500, 143, ratio),

      text: text_2,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${44 * ratio}px`
      }
    },
    {
      frame: 52,
      class: 'image',
      position: icon === "sun_umbrella" ? leftTop(530 + leftDiff, 132, ratio) : leftTop(530 + leftDiff + (size === "970x250" ? 13 : 0), 138, ratio),
      dimension: {
        ["umbrella"]: widthHeight(762, 727, 0.2 * ratio * .65),
        ["sun_umbrella"]: widthHeight(1479, 1481, 0.12 * ratio * .65),
        ["battery"]: widthHeight(321, 237, ratio * .33),
      }[icon],
      url: `./i_icon_${icon}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`,
        rotate: '6deg',
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 52,
      class: 'image',
      position: rightTop(35 - leftDiff, 20),
      dimension: widthHeight(203, 190, ratio * 0.28),

      url: `./i_icon_bubble.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`,
        rotate: '32deg',

      },
      nextStyle: {
        opacity: '1'
      }
    },
  ]
}


const getFrames1200x400 = ({ spray, icon, language, size, ratio, text_1, text_2 }: Options, frameTime: number) => {
  return [
    {
      frame: 0,
      class: 'image',
      position: leftTop(860, 10, ratio),
      dimension: widthHeight(1.15 * 156 * 1 / ratio, 1.15 * 471 * 1 / ratio, ratio),

      url: `./i_spray_${spray}.png`,
      style: {
        rotate: "9.695deg",
        zIndex: "1",
        animation: `${"moveSpray"} 4000ms linear infinite`
      }
    },
    {
      frame: 25,
      class: 'image',
      position: leftTop(83, 70, ratio),
      dimension: ctaDim(language, ratio),

      url: `./i_0_CTAbutton${language}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${6 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 31,
      class: 'image',
      position: leftTop(610, 163, ratio),
      dimension: widthHeight(45, 68, ratio),

      url: './i_click.png',
      style: {
        opacity: '0',
        transition: `opacity ${4 * frameTime}ms`,
        animation: `moveCursor 2000ms infinite`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 37,
      class: 'text',
      position: leftTop(134, 202, ratio),
      dimension: widthHeight(1000, 143, ratio),

      text: text_1,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${60 * ratio}px`
      }
    },
    {
      frame: 42,
      class: 'text',
      position: leftTop(134, 276, ratio),
      dimension: widthHeight(1500, 143, ratio),

      text: text_2,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${60 * ratio}px`
      }
    },
    {
      frame: 52,
      class: 'image',
      position: icon === "sun_umbrella" ? leftTop(660, 255, ratio) : leftTop(660, 265, ratio),
      dimension: {
        ["umbrella"]: widthHeight(762, 727, 0.2 * ratio * .80),
        ["sun_umbrella"]: widthHeight(1479, 1481, 0.12 * ratio * .80),
        ["battery"]: widthHeight(321, 237, ratio * 0.38),
      }[icon],
      url: `./i_icon_${icon}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`,
        rotate: '9deg',
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 52,
      class: 'image',
      position: rightTop(15, 40),
      dimension: widthHeight(203, 190, ratio * 0.39),

      url: `./i_icon_bubble.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`,
        rotate: '32deg',

      },
      nextStyle: {
        opacity: '1'
      }
    },
  ]
}


const getFrames1200x200 = ({ spray, icon, language, size, ratio, text_1, text_2 }: Options, frameTime: number) => {
  return [
    {
      frame: 0,
      class: 'image',
      position: leftTop(980, -76, ratio),
      dimension: widthHeight(.80 * 156 * 1 / ratio, .80 * 471 * 1 / ratio, ratio),

      url: `./i_spray_${spray}.png`,
      style: {
        rotate: "9.695deg",
        zIndex: "1",
        animation: `${"moveSpray"} 4000ms linear infinite`
      }
    },
    {
      frame: 25,
      class: 'image',
      position: leftTop(61, 50, ratio),
      dimension: ctaDim(language, ratio * (515 / 679)),

      url: `./i_0_CTAbutton${language}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${6 * frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 31,
      class: 'image',
      position: leftTop(480, 123, ratio),
      dimension: widthHeight(38, 57, ratio),

      url: './i_click.png',
      style: {
        opacity: '0',
        transition: `opacity ${4 * frameTime}ms`,
        animation: `moveCursor 2000ms infinite`
      },
      nextStyle: {
        opacity: '1'
      }
    },
    {
      frame: 37,
      class: 'text',
      position: leftTop(592, 45, ratio),
      dimension: widthHeight(500, 143, ratio),

      text: text_1,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${42 * ratio}px`
      }
    },
    {
      frame: 42,
      class: 'text',
      position: leftTop(592, 99, ratio),
      dimension: widthHeight(1500, 143, ratio),

      text: text_2,
      style: {
        backgroundSize: "auto 34px !important",
        fontSize: `${42 * ratio}px`
      }
    },
    {
      frame: 52,
      class: 'image',
      position: leftTop(865, 32, ratio),
      dimension: {
        ["umbrella"]: widthHeight(762, 727, 0.2 * ratio * .75),
        ["sun_umbrella"]: widthHeight(1479, 1481, 0.12 * ratio * .6),
        ["battery"]: widthHeight(321, 237, ratio * 0.22),
      }[icon],
      url: `./i_icon_${icon}.png`,
      style: {
        opacity: '0',
        transition: `opacity ${5 * frameTime}ms`,
        transform: "scale(1.05)",
        animation: `pulse ${23 * frameTime}ms`,
        rotate: '9deg',
      },
      nextStyle: {
        opacity: '1'
      }
    },
  ]
}


export const getFrames = (options: Options, frameTime: number): Frame[] => {
  if (options.size === "300x250") {
    return getFrames300x250(options, frameTime)
  }
  if (options.size === "480x480") {
    return getFrames480x480(options, frameTime)
  }
  if (options.size === "160x600") {
    return getFrames160x600(options, frameTime)
  }
  if (options.size === "300x600") {
    return getFrames300x600(options, frameTime)
  }
  if (options.size === "480x300") {
    return getFrames480x300(options, frameTime)
  }
  if (options.size === '990x250' || options.size === '970x250') {
    return getFrames990and970x250(options, frameTime)
  }
  if (options.size === "1200x400") {
    return getFrames1200x400(options, frameTime)
  }
  if (options.size === "1200x200") {
    return getFrames1200x200(options, frameTime)
  }
  return []
}
