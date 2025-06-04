import { Animate, Options } from './animate'

export const init = (options?: Options) => {
  window['app'] = {
    animate: new Animate(options || {
      id: "canvas",
      spray: "summer",
      icon: "sun_umbrella",
      language: "CZ",

      text_1: "A léto",
      text_2: "bude tvoje",

      // size: "480x480",
      size: "300x600",

      // ratio: 1,
      ratio: 300/1200,
    }),
  }
}
window['init'] = init
