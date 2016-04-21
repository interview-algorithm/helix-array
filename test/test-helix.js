/**
 * Copyright (C) 2016 yanni4night.com
 * test-helix.js
 *
 * changelog
 * 2016-04-20[18:10:57]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
var helixArray = require('../helix-array').helixArray;
var assert = require('assert');
var leftpad = require('left-pad');

function g(len) {
    var arr = new Array(len);
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = i;
    }
    return arr;
}

function matrix(arr, width) {
    if (arr.length % width) {
        throw new Error('Illegal array ' + arr);
    }

    var height = arr.length / width;
    var ret = '';
    var maxL = String(arr[arr.length - 1]).length;
    var copied = arr.slice().map(function (i) {
        return leftpad(i, maxL);
    });

    for (var i = 0; i < height; ++i) {
        ret += (copied.slice(width * i, width * (i + 1)).join(' ')) + '\n';
    }
    return ret;
}

describe('Helix array', function () {

    describe('Arguments', function () {
        it('should throw error if a non-array passed', function () {
            assert.throws(function () {
                helixArray({}, 4, 5)
            });
        });
        it('should throw error if "width" either "height" is not a integer', function () {
            assert.throws(function () {
                helixArray([], '4', 5)
            });
        });
        it('should throw error if array\'s length does not equal "width"*"height"', function () {
            assert.throws(function () {
                helixArray([], '4', 5)
            });
        });
    });

    var arr6 = g(6);

    describe('Array with 6 elements', function () {
        it('should helix(2, 3)\n' + matrix(arr6, 2, 3), function () {
            var ret = helixArray(arr6, 2, 3);
            var expected = [0, 1, 3, 5, 4, 2];
            assert.deepEqual(ret, expected);
        });

        it('should helix(3, 2)\n' + matrix(arr6, 3, 2), function () {
            var ret = helixArray(arr6, 3, 2);
            var expected = [0, 1, 2, 5, 4, 3];
            assert.deepEqual(ret, expected);
        });
    });

    var arr20 = g(20);

    describe('Array with 20 elements', function () {

        it('should helix(20,1)\n' + matrix(arr20, 20, 1), function () {
            var ret = helixArray(arr20, 20, 1);
            var expected = arr20;
            assert.deepEqual(ret, expected);
        });

        it('should helix(1,20)\n' + matrix(arr20, 1, 20), function () {
            var ret = helixArray(arr20, 1, 20);
            var expected = arr20;
            assert.deepEqual(ret, expected);
        });

        it('should helix(5,4)\n' + matrix(arr20, 5, 4), function () {
            var ret = helixArray(arr20, 5, 4);
            var expected = [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12,
                11
            ];
            assert.deepEqual(ret, expected);
        });

        it('should helix(4, 5)\n' + matrix(arr20, 4, 5), function () {
            var ret = helixArray(arr20, 4, 5);
            var expected = [0, 1, 2, 3, 7, 11, 15, 19, 18, 17, 16, 12, 8, 4, 5, 6, 10, 14, 13,
                9
            ];
            assert.deepEqual(ret, expected);
        });
    });


    var arr63 = g(63);

    describe('Array with 63 elements', function () {
        it('should helix(7, 9)\n' + matrix(arr63, 7, 9), function () {
            var ret = helixArray(arr63, 7, 9);
            var expected = [0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 48, 55, 62, 61, 60, 59, 58,
                57, 56, 49, 42, 35, 28, 21, 14, 7, 8, 9, 10, 11, 12, 19, 26, 33, 40, 47, 54,
                53, 52, 51, 50, 43, 36, 29, 22, 15, 16, 17, 18, 25, 32, 39, 46, 45, 44, 37,
                30, 23, 24, 31, 38
            ];
            assert.deepEqual(ret, expected);
        });

        it('should helix(9, 7)\n' + matrix(arr63, 9, 7), function () {
            var ret = helixArray(arr63, 9, 7);
            var expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 17, 26, 35, 44, 53, 62, 61, 60, 59, 58,
                57, 56, 55, 54, 45, 36, 27, 18, 9, 10, 11, 12, 13, 14, 15, 16, 25, 34, 43,
                52, 51, 50, 49, 48, 47, 46, 37, 28, 19, 20, 21, 22, 23, 24, 33, 42, 41, 40,
                39, 38, 29, 30, 31, 32
            ];
            assert.deepEqual(ret, expected);
        });
    });
});