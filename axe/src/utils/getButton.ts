export const getButton = (querySelector: string) => {
    return document.querySelector(querySelector) as HTMLButtonElement | undefined
}
