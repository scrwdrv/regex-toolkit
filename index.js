"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(Object.prototype, 'keyOfRegex', {
    value: function (regex) {
        for (let key in this)
            if (regex.test(key))
                return key;
        return null;
    }
});
Array.prototype.indexOfRegex = function (regex) {
    for (let i = 0, l = this.length; i < l; i++)
        if (regex.test(this[i].toString()))
            return i;
    return -1;
};
function from(str) {
    const flags = /(?<=\/)[igmuy]+$/.exec(str);
    return new RegExp(str.slice(1, flags ? flags.index - 1 : -1), flags ? flags[0] : '');
}
exports.from = from;
function escape(str) {
    return str.replace(/[\^$\\.*+?()[\]{}|]/g, '\\$&');
}
exports.escape = escape;
function isRegex(str) {
    return /^\/((?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+)\/((?:g(?:im?|mi?)?|i(?:gm?|mg?)?|m(?:gi?|ig?)?)?)$/.test(str);
}
exports.isRegex = isRegex;
//# sourceMappingURL=index.js.map