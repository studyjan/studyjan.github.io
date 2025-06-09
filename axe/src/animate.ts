import { createDivElement, createElement } from "./utils/createElement";
import { getFrames } from "./frames";
import { getBlackBoxes } from "./blackBoxes";

export type Options = {
  spray: "summer" | "dark",
  icon?: "umbrella" | "sun_umbrella",
  language: "CZ" | "SK",
  text_1?: string
  text_2?: string
  size: "480x480" | "300x250" | "300x600" | "160x600" | "480x300" | "990x250" | "970x250" | "1200x400" | "1200x200", 
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

  canvas
  head = document.getElementsByTagName("head")

  constructor(options: Options) {
    this.head[0]?.appendChild(createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.eot" } }))
    this.head[0]?.appendChild(createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.eot?#iefix" } }))
    this.head[0]?.appendChild(createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.woff2" } }))
    this.head[0]?.appendChild(createElement({ element: 'link', attribute: { rel: "prefetch", href: "./fonts/rifton-regular.woff" } }))

    const frames = [...getFrames(options, this.frameTime), ...getBlackBoxes(options.size, options.ratio),]

    this.canvas = document.getElementById(options.id)

    console.log(options)
    const [x, y] = options.size.split("x")
    console.log(x, y)

    this.canvas.style.width = `${x}px`
    this.canvas.style.height = `${y}px`

    frames.forEach((frame, index) => {
      if ('url' in frame) {
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
