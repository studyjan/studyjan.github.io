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
      size: "480x300",
      ratio: 480 / 2121,
    }),
  }
}
window['init'] = init
