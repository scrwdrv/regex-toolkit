# simple-regex-toolkit
 A simple library that help you escape string for regex and form regex from string. And add regex search method for object key and array index.

## Installation

```sh
npm i simple-regex-toolkit
```

## Usage
### Esacpe & Build Regex
```js
import * as regex from 'simple-regex-toolkit';

const string = '@%#dh.v/]dsf2\\[]&^DSD',
    reg = regex.from(regex.escape(string)),
    reg2 = regex.from(`/${regex.escape(string)}/gi`);

console.log(reg.test(string));
// true

console.log(string.toLocaleLowerCase().repeat(2).match(reg2));
// [ '@%#dh.v/]dsf2\\[]&^dsd', '@%#dh.v/]dsf2\\[]&^dsd' ]
```

### Search Methods
```js
const array = ['example', 'string', 'and', 'number', Date.now()];
console.log(array.indexOfRegex(/^\d+$/));
// 4

const object = {
    id: 'P0293717623',
    price: 1000,
    unit: 'usd',
    weight: 500
}
console.log(object.keyOfRegex(/^p/));
// price
```