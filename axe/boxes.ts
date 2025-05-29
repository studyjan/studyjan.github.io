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


const boxes = [
  {
    frame: 1,
    x: 0,
    y: 0,
    w: 371,
    h: 60,
  },
  {
    frame: 2,
    x: 0,
    y: 1105,
    w: 88,
    h: 90,
  },

  {
    frame: 3,
    x: 170,
    y: 170,
    w: 53,
    h: 53,
  },
  {
    frame: 3,
    x: 88,
    y: 1023,
    w: 26,
    h: 27,
  },
];
