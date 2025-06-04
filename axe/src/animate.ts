import { createDivElement, createElement } from "./utils/createElement";
import { getBlackBoxes } from "./blackBoxes";
import { leftTop, widthHeight } from "./utils";

export type Options = {
  spray: "summer" | "dark",
  icon: "keyboard" | "umbrella" | "sun_umbrella" | "gameboy",
  language: "CZ" | "SK",
  text_1?: string
  text_2?: string
  size: "480x480" | "300x250",
  ratio: number,
  id: string
}

export type RenderElement = {
  frame: number,
  class: string,
  position: { left: number, top: number }
  dimension: { width: number, height: number }
  text?: string
  url?: string
  style?: Partial<CSSStyleDeclaration>
  nextStyle?: Partial<CSSStyleDeclaration>
}

export class Animate {
  frameTime = 2083 / 50

  getElements = ({ spray, icon, language, size, ratio, text_1, text_2 }: Options): RenderElement[] => {
    return [
      {
        frame: 0,
        class: 'image',
        position: (size === "300x250" ? leftTop(280, 100, ratio) : leftTop(275, 164, ratio)),
        dimension: widthHeight(156.2, 471.8, ratio),

        url: `./i_spray_${spray}.png`,
        style: {
          rotate: "9.695deg",
          zIndex: "1",
          animation: `${size === "300x250" ? "moveSprayLess" : "moveSpray"} 4000ms linear infinite`
        }
      },
      ...getBlackBoxes(size, ratio),
      {
        frame: 25,
        class: 'image',
        position: leftTop(15, 96, ratio),
        dimension: widthHeight(320, 71, ratio),

        url: `./i_0_CTAbutton${language}.png`,
        style: {
          opacity: '0',
          transition: `opacity ${6 * this.frameTime}ms`
        },
        nextStyle: {
          opacity: '1'
        }
      },
      {
        frame: 31,
        class: 'image',
        position: leftTop(259, 149, ratio),
        dimension: widthHeight(29, 43, ratio),

        url: './i_click.png',
        style: {
          opacity: '0',
          transition: `opacity ${4 * this.frameTime}ms`,
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
          fontSize: `${35*ratio}px`
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
          fontSize: `${35*ratio}px`
        }
      },
      {
        frame: 52,
        class: 'image',
        position: leftTop((size === "300x250" ? 143 : 96), (size === "300x250" ? 260 : 278), ratio),
        dimension: {
          ["keyboard"]: widthHeight(155, 97, ratio * (size === "300x250" ? 341 / 428 : 1)),
          ["gameboy"]: widthHeight(360, 239, 0.4 * ratio * (size === "300x250" ? 341 / 428 : 1)),
          ["umbrella"]: widthHeight(762, 727, 0.2 * ratio * (size === "300x250" ? 341 / 428 : 1)),
          ["sun_umbrella"]: widthHeight(1479, 1481, 0.12 * ratio * (size === "300x250" ? 341 / 428 : 1)),
        }[icon],

        url: `./i_icon_${icon}.png`,
        style: {
          opacity: '0',
          transition: `opacity ${5 * this.frameTime}ms`,
          transform: "scale(1.05)",
          animation: `pulse ${23 * this.frameTime}ms`
        },
        nextStyle: {
          opacity: '1'
        }
      },
    ]
  }

  canvas

  constructor(options: Options) {
    const elements = this.getElements(options)

    this.canvas = document.getElementById(options.id)
    const head = document.getElementsByTagName("head")

    const [x, y] = options.size.split("x")

    this.canvas.style.width = `${x}px`
    this.canvas.style.height = `${y}px`

    elements.forEach((box) => {
      if (box.url) {
        console.log(head)
        head[0]?.appendChild(createElement({ element: 'link', attribute: { rel: "prefetch", href: box.url } }))
      }

      setTimeout(() => {
        const element = createDivElement({ attribute: { class: `${box.class} poa`, ["data-frame"]: box.frame } })

        element.style.width = `${box.dimension.width}px`
        element.style.height = `${box.dimension.height}px`
        element.style.top = `${box.position.top}px`
        element.style.left = `${box.position.left}px`

        if (box.url) {
          element.style.backgroundImage = `url("${box.url}")`
        }

        if (box.text) {
          element.innerHTML = box.text;
        }

        Object.keys(box.style || {}).forEach(key => {
          element.style[key] = box.style[key]
        })

        setTimeout(() => {
          Object.keys(box.nextStyle || {}).forEach(key => {
            element.style[key] = box.nextStyle[key]
          })
        }, this.frameTime)

        this.canvas.appendChild(element)
      }, box.frame * this.frameTime)
    })
  }
}
