import { Options } from "./animate";
import { getBlackBoxes } from "./blackBoxes";
import { leftTop, widthHeight } from "./utils";

export const getMobileFrames = ({ spray, icon, language, size, ratio, text_1, text_2 }: Options, frameTime: number) => {
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
          transition: `opacity ${6 * frameTime}ms`
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