import { createDivElement, createElement } from "./utils/createElement";
import { getMobileFrames } from "./framesMobile";

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

export type Frame = {
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

  getFrames = (options: Options): Frame[] => {
    if (options.size === "300x250" || options.size === "480x480") {
      return getMobileFrames(options, this.frameTime)
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

    frames.forEach((frame) => {
      if (frame.url) {
        this.head[0]?.appendChild(createElement({ element: 'link', attribute: { rel: "prefetch", href: frame.url } }))
      }

      setTimeout(() => {
        const element = createDivElement({ attribute: { class: `${frame.class} poa`, ["data-frame"]: frame.frame } })

        element.style.width = `${frame.dimension.width}px`
        element.style.height = `${frame.dimension.height}px`
        element.style.top = `${frame.position.top}px`
        element.style.left = `${frame.position.left}px`

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
