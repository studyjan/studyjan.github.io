export const getButtons = (querySelector: string) => {
    return document.querySelectorAll(querySelector) as NodeListOf<HTMLButtonElement> | undefined
}
