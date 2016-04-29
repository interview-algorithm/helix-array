# helix-array

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Output an array in helix order.

![Helix](helix.jpg)


# usage

```js
var helixArray = require('helix-array').helixArray;

const arr = [0, 1, 2, 3, 4, 5];

helixArray(arr, 2, 3)// [0, 1, 3, 5, 4, 2]
helixArray(arr, 3, 2)// [0, 1, 2, 5, 4, 3]

```


[npm-url]: https://npmjs.org/package/helix-array
[downloads-image]: http://img.shields.io/npm/dm/helix-array.svg
[npm-image]: http://img.shields.io/npm/v/helix-array.svg
[travis-url]: https://travis-ci.org/interview-algorithm/helix-array
[travis-image]: http://img.shields.io/travis/interview-algorithm/helix-array.svg
[david-dm-url]:https://david-dm.org/interview-algorithm/helix-array
[david-dm-image]:https://david-dm.org/interview-algorithm/helix-array.svg
[david-dm-dev-url]:https://david-dm.org/interview-algorithm/helix-array#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/interview-algorithm/helix-array/dev-status.svg