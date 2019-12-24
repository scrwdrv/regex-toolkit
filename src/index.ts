declare global {
    interface Object {
        keyOfRegex: (regex: RegExp) => string;
    }
    interface Array<T> {
        indexOfRegex: (regex: RegExp) => number;
    }
}

Object.defineProperty(Object.prototype, 'keyOfRegex', {
    value: function (regex: RegExp) {
        for (let key in this)
            if (regex.test(key)) return key;
        return null;
    }
});

Array.prototype.indexOfRegex = function (regex: RegExp) {
    for (let i = 0, l = this.length; i < l; i++)
        if (regex.test(this[i].toString())) return i
    return -1;
}

export function from(str: string) {
    const flags = /(?<=\/)[igmuy]+$/.exec(str);
    return new RegExp(str.slice(1, flags ? flags.index - 1 : -1), flags ? flags[0] : '');
}

export function escape(str: string) {
    return str.replace(/[\^$\\.*+?()[\]{}|]/g, '\\$&');
}