declare global {
    interface Object {
        keyOfRegex: (regex: RegExp) => string;
    }
    interface Array<T> {
        indexOfRegex: (regex: RegExp) => number;
    }
}
export declare function from(str: string): RegExp;
export declare function escape(str: string): string;
export declare function isRegex(str: string): boolean;
