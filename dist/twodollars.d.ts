declare type TwoDollars = {
    addAttr: (element: HTMLElement, attributes: Record<string, string>) => TwoDollars;
    addClass: (element: HTMLElement, cn: string) => TwoDollars;
    append: (toAppend: HTMLElement, target: HTMLElement) => TwoDollars;
    create: (element: string, attributes?: Record<string, string>) => HTMLElement;
    css: (element: HTMLElement, props: Record<string, string>) => TwoDollars;
    find: (selector: string, target?: HTMLElement | DocumentFragment) => HTMLElement[];
    hasClass: (element: HTMLElement, cn: string) => boolean;
    history: {
        go: (name: string, path: string) => void;
    };
    index: (element: HTMLElement) => number;
    measure: (str: string, fontSize: number) => {
        h: number;
        w: number;
    };
    merge: (obj1: Partial<unknown>, obj2: Partial<unknown>) => unknown;
    parent: (element: HTMLElement, selector?: string) => HTMLElement;
    parse: (str: string) => Document;
    post: (url: string, data: Record<string, string>) => Promise<string>;
    preload: (preloadOptions: PreloadOptions) => void;
    removeClass: (element: HTMLElement, cn: string) => TwoDollars;
    toggleClass: (element: HTMLElement, cn: string) => TwoDollars;
    ucFirst: (str: string) => string;
};
declare type PreloadOptions = {
    items: string[];
    onFileLoaded: (src: string) => void;
    onFinish: (totalLoaded: number) => void;
};
declare const twoDollars: TwoDollars;
export { twoDollars };
