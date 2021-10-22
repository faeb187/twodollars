declare type DomEvent = {
    handler: (event: Event) => void;
    target: HTMLElement;
    type: keyof HTMLElementEventMap;
};
declare type PreloadOptions = {
    items: string[];
    onFileLoaded: (src: string) => void;
    onFinish: (totalLoaded: number) => void;
};
export declare const $$: {
    create: (element: string, attributes?: Record<string, string> | undefined) => HTMLElement;
    find: (selector: string, target?: HTMLElement | DocumentFragment) => Array<HTMLElement>;
    append: (toAppend: HTMLElement, target: HTMLElement) => any;
    measure: (str: string, fontSize?: number | undefined) => {
        h: number;
        w: number;
    };
    parse: (str: string) => Document;
    css: ($element: HTMLElement, props?: Record<string, string> | undefined) => any;
    parent: ($element: HTMLElement, selector?: string | undefined) => HTMLElement;
    hasClass: (element: HTMLElement, cn: string) => boolean;
    addClass: (element: HTMLElement, cn: string) => any;
    removeClass: (element: HTMLElement, cn: string) => any;
    toggleClass: (element: HTMLElement, cn: string) => any;
    addAttr: (element: HTMLElement, attributes?: Record<string, string> | undefined) => any;
    ucFirst: (str: string) => string;
    extend: (target: Record<string, string>, extension?: Record<string, string>) => Record<string, string>;
    index: ($element: HTMLElement) => number;
    listen: (event: DomEvent) => any;
    destroy: (event: DomEvent) => any;
    post: (url: string, data: Record<string, string>) => Promise<unknown>;
    preload: (opt: PreloadOptions) => void;
    history: {
        go: (name: string, path: string) => void;
    };
};
export {};
