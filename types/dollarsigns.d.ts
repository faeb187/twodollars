export declare type DollarSign = {
    addAttr: (elmeent: HTMLElement, attributes: Record<string, string>) => DollarSign;
    addClass: (element: HTMLElement, cn: string) => DollarSign;
    append: (toAppend: HTMLElement, target: HTMLElement) => DollarSign;
    create: (element: string, attributes?: Record<string, string>) => HTMLElement;
    css: (element: HTMLElement, props: Record<string, string>) => DollarSign;
    destroy: (event: DomEvent) => DollarSign;
    extend: (target: Record<string, string>, extension: Record<string, string>) => Record<string, string>;
    find: (selector: string, target?: HTMLElement | DocumentFragment) => HTMLElement[];
    hasClass: (element: HTMLElement, cn: string) => boolean;
    history: {
        go: (name: string, path: string) => void;
    };
    index: (element: HTMLElement) => number;
    listen: (event: DomEvent) => DollarSign;
    measure: (str: string, fontSize: number) => {
        h: number;
        w: number;
    };
    parent: (element: HTMLElement) => HTMLElement;
    parse: (str: string) => Document;
    post: (url: string, data: Record<string, string>) => Promise<string>;
    preload: (preloadOptions: PreloadOptions) => void;
    removeClass: (element: HTMLElement, cn: string) => DollarSign;
    toggleClass: (element: HTMLElement, cn: string) => DollarSign;
    ucFirst: (str: string) => string;
};
export declare type DomEvent = Event & {
    handler: (event: Event) => void;
    target: HTMLElement;
};
declare type PreloadOptions = {
    items: string[];
    onFileLoaded: (src: string) => void;
    onFinish: (totalLoaded: number) => void;
};
declare const _default: DollarSign;
export default _default;
