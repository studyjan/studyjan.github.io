import { Animate } from './animate'

export const init = () => {
    window['app'] = {
        animate: new Animate(),
    }
}
window['init'] = init
