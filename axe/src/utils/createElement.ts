export function createElement({
    element: elementName,
    attribute = undefined,
    childrens = undefined,
}): HTMLElement {
    if (typeof (childrens) === "undefined") {
        childrens = [];
    }

    var element = document.createElement(elementName);
    if (typeof (attribute) === 'object') {
        for (var key in attribute) {
            element.setAttribute(key, attribute[key]);
        }
    }

    if (!Array.isArray(childrens)) {
        childrens = [childrens];
    }

    for (var i = 0; i < childrens.length; i++) {
        if (childrens[i].tagName) {
            element.appendChild(childrens[i]);
        } else {
            element.appendChild(document.createTextNode(childrens[i]));
        }
    }

    return element;
}

export const createButtonElement = ({
    attribute = undefined,
    childrens = undefined,
}): HTMLButtonElement => {
    return createElement({
        element: 'button',
        attribute,
        childrens
    }) as HTMLButtonElement
}

export const createDivElement = ({
    attribute = undefined,
    childrens = undefined,
}): HTMLDivElement => {
    return createElement({
        element: 'div',
        attribute,
        childrens
    }) as HTMLDivElement
}
