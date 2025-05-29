import { createDivElement } from "./utils/createElement";

const leftTop = (left: number, top: number, ratio: number = 1) => ({
  left: left * ratio,
  top: top * ratio,
})

const widthHeight = (width: number, height: number, ratio: number = 1) => ({
  width: width * ratio,
  height: height * ratio,
})

type RenderElement = {
  frame: number,
  class: string,
  position: { left: number, top: number }
  dimension: { width: number, height: number }
  url?: string
  style?: Partial<CSSStyleDeclaration>
  nextStyle?: Partial<CSSStyleDeclaration>
}

export class Animate {
  sizeScale = 480 / 1326
  frameTime = 2083 / 50

  elements: RenderElement[] = [
    {
      frame: 0,
      class: 'image',
      position: leftTop(275, 164, (1 / this.sizeScale)),
      dimension: widthHeight(156.2, 156.2 * (737 / 244), (1 / this.sizeScale)),

      url: './i_1_axe_can.png',
      style: {
        rotate: "9.695deg",
        zIndex: "1",
        animation: `moveSpray 4000ms linear infinite`
      }
    },
    {
      frame: 2,
      class: 'blackBox',
      position: leftTop(0, 0),
      dimension: widthHeight(371, 60),
    },
    {
      frame: 3,
      class: 'blackBox',
      position: leftTop(0, 1105),
      dimension: widthHeight(88, 90),
    },
    {
      frame: 4,
      class: 'blackBox',
      position: leftTop(170, 170),
      dimension: widthHeight(53, 53),
    },
    {
      frame: 6,
      class: 'blackBox',
      position: leftTop(88, 1023),
      dimension: widthHeight(26, 27),
    },
    {
      frame: 9,
      class: 'blackBox',
      position: leftTop(1022, 152),
      dimension: widthHeight(31, 31),
    },
    {
      frame: 11,
      class: 'blackBox',
      position: leftTop(1160, 0),
      dimension: widthHeight(74, 96),
    },
    {
      frame: 14,
      class: 'blackBox',
      position: leftTop(1101, 95),
      dimension: widthHeight(59, 58),
    },
    {
      frame: 15,
      class: 'blackBox',
      position: leftTop(218, 1143),
      dimension: widthHeight(50, 52),
    },
    {
      frame: 16,
      class: 'blackBox',
      position: leftTop(871, 0),
      dimension: widthHeight(151, 95),
    },
    {
      frame: 17,
      class: 'blackBox',
      position: leftTop(0, 0),
      dimension: widthHeight(130, 167),
    },
    {
      frame: 19,
      class: 'blackBox',
      position: leftTop(371, 60),
      dimension: widthHeight(108, 108),
    },
    {
      frame: 19,
      class: 'blackBox',
      position: leftTop(1234, 0),
      dimension: widthHeight(92, 243),
    },
    {
      frame: 20,
      class: 'blackBox',
      position: leftTop(346, 1274),
      dimension: widthHeight(50, 52),
    },
    {
      frame: 23,
      class: 'blackBox',
      position: leftTop(0, 1195),
      dimension: widthHeight(218, 131),
    },

    {
      frame: 25,
      class: 'image',
      position: leftTop(42, 265),
      dimension: widthHeight(884, 195),

      url: './i_bubble.png',
    },
    {
      frame: 25,
      class: 'image',
      position: leftTop(89, 325),
      dimension: widthHeight(796, 74),

      url: './i_1_text_buble.png',
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
      position: leftTop(715, 412),
      dimension: widthHeight(80, 119),

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
      class: 'image',
      position: leftTop(82, 476),
      dimension: widthHeight(455, 94),

      url: './i_1_text_under_buble.png',
    },
    {
      frame: 42,
      class: 'image',
      position: leftTop(82, 603),
      dimension: widthHeight(665, 80),

      url: './i_1_text_under_buble2.png',
    },
    {
      frame: 52,
      class: 'image',
      position: leftTop(264, 768),
      dimension: widthHeight(428, 269),

      url: './i_1_icon.png',
      style: {
        opacity: '0',
        transition: `opacity ${5 * this.frameTime}ms`,
        transform: "scale(1)",
        animation: `pulse ${23 * this.frameTime}ms`
      },
      nextStyle: {
        opacity: '1'
      }
    },
  ];

  canvas = document.getElementById('canvas')

  constructor() {
    console.log(this.canvas)
    this.elements.map((element) => ({
      ...element,
      position: {
        top: element.position.top * this.sizeScale,
        left: element.position.left * this.sizeScale,
      },
      dimension: {
        width: element.dimension.width * this.sizeScale,
        height: element.dimension.height * this.sizeScale,
      }
    })).forEach((box) => {
      setTimeout(() => {
        const element = createDivElement({
          attribute: {
            class: `${box.class} poa`
          }
        })

        element.style.width = `${box.dimension.width}px`
        element.style.height = `${box.dimension.height}px`
        element.style.top = `${box.position.top}px`
        element.style.left = `${box.position.left}px`

        if (box.url) {
          element.style.backgroundImage = `url("${box.url}")`
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
