declare type TwoDollars = {
    addAttr: (element: HTMLElement, attributes: Record<string, string>) => TwoDollars;
    addClass: (element: HTMLElement, cn: string) => TwoDollars;
    append: (toAppend: HTMLElement, target: HTMLElement) => TwoDollars;
    create: (element: string, attributes?: Record<string, string>) => HTMLElement;
    css: (element: HTMLElement, props: Record<string, string>) => TwoDollars;
    destroy: (event: DomEvent) => TwoDollars;
    extend: (target: Record<string, string>, extension: Record<string, string>) => Record<string, string>;
    find: (selector: string, target?: HTMLElement | DocumentFragment) => HTMLElement[];
    hasClass: (element: HTMLElement, cn: string) => boolean;
    history: {
        go: (name: string, path: string) => void;
    };
    index: (element: HTMLElement) => number;
    listen: (event: DomEvent) => TwoDollars;
    measure: (str: string, fontSize: number) => {
        h: number;
        w: number;
    };
    parent: (element: HTMLElement, selector?: string) => HTMLElement;
    parse: (str: string) => Document;
    post: (url: string, data: Record<string, string>) => Promise<string>;
    preload: (preloadOptions: PreloadOptions) => void;
    removeClass: (element: HTMLElement, cn: string) => TwoDollars;
    toggleClass: (element: HTMLElement, cn: string) => TwoDollars;
    ucFirst: (str: string) => string;
};
declare type DomEvent = Event & {
    handler: (event: Event) => void;
    target: HTMLElement;
};
declare type PreloadOptions = {
    items: string[];
    onFileLoaded: (src: string) => void;
    onFinish: (totalLoaded: number) => void;
};
declare const twoDollars: TwoDollars;
export { twoDollars };
