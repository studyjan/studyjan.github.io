import { Animate, Options } from './animate'

export const init = (options?: Options) => {
  window['app'] = {
    animate: new Animate(options || {
      id: "canvas",
      spray: "dark",
      icon: "umbrella",
      language: "SK",
      text_1: "a skús",
      text_2: "to znova",
      size: "1200x400",
      ratio: 1,
    }),
  }
}
window['init'] = init
