import { Animate, Options } from './animate'

export const init = (options?: Options) => {
  window['app'] = {
    animate: new Animate(options || {
            id: "canvas",
            spray: "dark",
            icon: "umbrella",
            language: "CZ",
            text_1: "A léto",
            text_2: "bude tvoje",
            size: "160x600",
            ratio: 300 / 1200,
        }),
  }
}
window['init'] = init
