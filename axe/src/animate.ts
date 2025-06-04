import { createDivElement, createElement } from "./utils/createElement";
import { getMobileFrames } from "./framesMobile";
import { leftBottom, leftTop, rightBottom, rightTop, widthHeight } from "./utils";
import { getBlackBoxes } from "./blackBoxes";

export type Options = {
  spray: "summer" | "dark",
  icon: "keyboard" | "umbrella" | "sun_umbrella" | "gameboy",
  language: "CZ" | "SK",
  text_1?: string
  text_2?: string
  size: "480x480" | "300x250" | "300x600" | "160x600",
  ratio: number,
  id: string
}

export type Frame = {
  frame: number,
  class: string,
  position: { left: number, top: number } | { left: number, bottom: number } | { right: number, bottom: number } | { right: number, top: number }
  dimension: { width: number, height: number }
  text?: string
  url?: string
  style?: Partial<CSSStyleDeclaration>
  nextStyle?: Partial<CSSStyleDeclaration>
}

export class Animate {
  frameTime = 2083 / 50

  getFrames = (options: Options): Frame[] => {
    const { ratio, language, spray, size, icon, text_1, text_2 } = options
    const frameTime = this.frameTime

    if (options.size === "300x250" || options.size === "480x480") {
      return getMobileFrames(options, this.frameTime)
    }


    if (options.size === "160x600") {
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
          dimension: widthHeight(584, 129, ratio),

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

        {
          frame: 36,
          class: 'image',
          position: icon === "sun_umbrella" ? leftTop(30 * 4, 120 * 4, ratio) : leftTop(30 * 4, 130 * 4, ratio),
          dimension: {
            ["keyboard"]: widthHeight(155, 97, ratio * 2),
            ["gameboy"]: widthHeight(360, 239, 0.4 * ratio * 2),
            ["umbrella"]: widthHeight(762, 727, 0.2 * ratio * 2),
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



    if (options.size === "300x600") {
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
          dimension: widthHeight(1143, 252, ratio),

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
          position: leftTop((96), (278 + 190 * 4), ratio),
          dimension: {
            ["keyboard"]: widthHeight(155, 97, ratio * 2),
            ["gameboy"]: widthHeight(360, 239, 0.4 * ratio * 2),
            ["umbrella"]: widthHeight(762, 727, 0.2 * ratio * 2),
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
        ...getBlackBoxes(size, ratio),
      ]
    }
  }

  canvas
  head = document.getElementsByTagName("head")

  constructor(options: Options) {
    this.head[0]?.appendChild(createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.eot" } }))
    this.head[0]?.appendChild(createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.eot?#iefix" } }))
    this.head[0]?.appendChild(createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.woff2" } }))
    this.head[0]?.appendChild(createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.woff" } }))

    const frames = this.getFrames(options)

    this.canvas = document.getElementById(options.id)

    const [x, y] = options.size.split("x")

    this.canvas.style.width = `${x}px`
    this.canvas.style.height = `${y}px`

    frames.forEach((frame, index) => {
      if (frame.url) {
        this.head[0]?.appendChild(createElement({ element: 'link', attribute: { rel: "prefetch", href: frame.url } }))
      }

      setTimeout(() => {
        const element = createDivElement({ attribute: { class: `${frame.class} poa`, ["data-frame"]: frame.frame, ["data-index"]: index } })

        element.style.width = `${frame.dimension.width}px`
        element.style.height = `${frame.dimension.height}px`
        if ('top' in frame.position) {
          element.style.top = `${frame.position.top}px`
        }
        if ('bottom' in frame.position) {
          element.style.bottom = `${frame.position.bottom}px`
        }
        if ('left' in frame.position) {
          element.style.left = `${frame.position.left}px`
        }
        if ('right' in frame.position) {
          element.style.right = `${frame.position.right}px`
        }


        if (frame.url) {
          element.style.backgroundImage = `url("${frame.url}")`
        }

        if (frame.text) {
          element.innerHTML = frame.text;
        }

        Object.keys(frame.style || {}).forEach(key => {
          element.style[key] = frame.style[key]
        })

        setTimeout(() => {
          Object.keys(frame.nextStyle || {}).forEach(key => {
            element.style[key] = frame.nextStyle[key]
          })
        }, this.frameTime)

        this.canvas.appendChild(element)
      }, frame.frame * this.frameTime)
    })
  }
}
