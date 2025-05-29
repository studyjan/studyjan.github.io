export const getElements = (querySelector: string) => {
    return document.querySelectorAll(querySelector) as NodeListOf<HTMLElement> | undefined
}
