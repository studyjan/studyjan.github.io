export const getElement = (querySelector: string) => {
    return document.querySelector(querySelector) as HTMLElement | undefined
}
