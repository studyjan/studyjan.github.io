import { Animate, Options } from './animate'

export const init = (options?: Options) => {
  window['app'] = {
    animate: new Animate(options || {
      id: "canvas",
      spray: "summer",
      icon: "gameboy",
      language: "SK",

      text_1: "A BUĎ",
      text_2: "MVP LÉTA",

      // size: "480x480",
      size: "300x250",

      // ratio: 1,
      ratio: 300/480,
    }),
  }
}
window['init'] = init
