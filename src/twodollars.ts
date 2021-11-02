type TwoDollars = {
  addAttr: (
    element: HTMLElement,
    attributes: Record<string, string>
  ) => TwoDollars;
  addClass: (element: HTMLElement, cn: string) => TwoDollars;
  append: (toAppend: HTMLElement, target: HTMLElement) => TwoDollars;
  create: (element: string, attributes?: Record<string, string>) => HTMLElement;
  css: (element: HTMLElement, props: Record<string, string>) => TwoDollars;
  destroy: (event: DomEvent) => TwoDollars;
  extend: (
    target: Record<string, string>,
    extension: Record<string, string>
  ) => Record<string, string>;
  find: (
    selector: string,
    target?: HTMLElement | DocumentFragment
  ) => HTMLElement[];
  hasClass: (element: HTMLElement, cn: string) => boolean;
  history: { go: (name: string, path: string) => void };
  index: (element: HTMLElement) => number;
  listen: (event: DomEvent) => TwoDollars;
  measure: (str: string, fontSize: number) => { h: number; w: number };
  parent: (element: HTMLElement) => HTMLElement;
  parse: (str: string) => Document;
  post: (url: string, data: Record<string, string>) => Promise<string>;
  preload: (preloadOptions: PreloadOptions) => void;
  removeClass: (element: HTMLElement, cn: string) => TwoDollars;
  toggleClass: (element: HTMLElement, cn: string) => TwoDollars;
  ucFirst: (str: string) => string;
};

type DomEvent = Event & {
  handler: (event: Event) => void;
  target: HTMLElement;
};

type PreloadOptions = {
  items: string[];
  onFileLoaded: (src: string) => void;
  onFinish: (totalLoaded: number) => void;
};

const d = document;
const dp = new DOMParser();

const twoDollars: TwoDollars = {
  create: (
    element: string,
    attributes?: Record<string, string>
  ): HTMLElement => {
    const $element = d.createElement(element.slice(1, -2));

    attributes &&
      Object.keys(attributes).forEach((key: string) =>
        $element.setAttribute(key, attributes[key])
      );
    return $element;
  },

  find: (
    selector: string,
    target: HTMLElement | DocumentFragment = d.body
  ): HTMLElement[] => {
    return selector === "html"
      ? [d.documentElement]
      : Array.from(target.querySelectorAll(selector));
  },

  append: (toAppend: HTMLElement, target: HTMLElement) => {
    target.appendChild(toAppend);
    return twoDollars;
  },

  measure: (str: string, fontSize?: number) => {
    const $helper = twoDollars.create("<span/>", { innerText: str });

    twoDollars.css($helper, {
      position: "absolute",
      left: "-9999px",
      top: "-9999px",
    });

    fontSize && twoDollars.css($helper, { fontSize: `${fontSize}px` });

    document.body.appendChild($helper);

    const measures = {
      h: $helper.clientHeight,
      w: $helper.clientWidth,
    };
    document.body.removeChild($helper);
    return measures;
  },

  parse: (str: string) => dp.parseFromString(str, "text/html"),

  css: ($element: HTMLElement, props?: Record<string, string>) => {
    props &&
      Object.keys(props).forEach((key: string) =>
        $element.style.setProperty(key, props[key])
      );
    return twoDollars;
    // const v = window.getComputedStyle(elms)[obj];
    // return v.slice(-2) === "px" && v.indexOf(" ") === -1 ? parseFloat(v) : v;
  },

  parent: ($element: HTMLElement, selector?: string): HTMLElement => {
    if (!selector) return $element.parentNode as HTMLElement;

    const selectorMatch = ($elm: HTMLElement, sel: string): HTMLElement =>
      $elm.matches(sel)
        ? $elm
        : selectorMatch($elm.parentNode as HTMLElement, sel);

    return selectorMatch($element.parentNode as HTMLElement, selector);
  },

  hasClass: (element: HTMLElement, cn: string) =>
    element.classList.contains(cn),

  addClass: (element: HTMLElement, cn: string) => {
    !element.classList.contains(cn) && element.classList.add(cn);
    return twoDollars;
  },

  removeClass: (element: HTMLElement, cn: string) => {
    element.classList.contains(cn) && element.classList.remove(cn);
    return twoDollars;
  },

  toggleClass: (element: HTMLElement, cn: string) => {
    element.classList.toggle(cn);
    return twoDollars;
  },

  addAttr: (element: HTMLElement, attributes?: Record<string, string>) => {
    attributes &&
      Object.keys(attributes).forEach((key: string) =>
        element.setAttribute(key, attributes[key])
      );
    return twoDollars;
  },

  ucFirst: (str: string) => str.charAt(0).toUpperCase() + str.slice(1),

  // @todo immutability of param 'target'
  extend: (
    target: Record<string, string>,
    extension: Record<string, string> = {}
  ) => {
    Object.keys(extension).forEach(
      (key: string) => (target[key] = extension[key])
    );
    return target;
  },

  index: ($element: HTMLElement) => {
    const $parent = $element.parentNode as HTMLElement;
    return Array.prototype.indexOf.call($parent.childNodes, $element);
  },

  listen: (event: DomEvent) => {
    const { handler, target, type } = event;
    target.addEventListener(type, handler);
    return twoDollars;
  },

  destroy: (event: DomEvent) => {
    const { handler, target, type } = event;
    if (handler) target.removeEventListener(type, handler);
    return twoDollars;
  },

  post: (url: string, data: Record<string, string>) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(data));
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = (error) => reject(error);
    });
  },

  preload: (opt: PreloadOptions) => {
    const { items, onFileLoaded, onFinish } = opt;
    const toLoad = items.length;
    const supported = ["jpg", "png"];
    let loaded = 0;

    items.forEach((item: string) => {
      const type = item.split(".").pop();
      if (type && supported.indexOf(type) === -1) return;

      const img = new Image();
      img.onload = () => {
        if (++loaded === toLoad) onFinish(toLoad);
        else onFileLoaded(img.getAttribute("src") || "");
      };
      img.src = item;
    });
  },

  history: {
    go: (name: string, path: string) =>
      window.history.pushState({ site: name }, "", path),
  },
};

export { twoDollars };
