/**
 * Copyright (C) 2016 tieba.baidu.com
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

describe('helix array', function () {
    var arr = [];
    for (i = 0; i < 20; ++i) {
        arr.push(i);
    }
    it('should helix(5,4):' + arr, function () {
        var ret = helixArray(arr, 5, 4);
        var expected = [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11];
        assert.deepEqual(ret, expected);
    });

    it('should helix(4, 5):' + arr, function () {
        var ret = helixArray(arr, 4, 5);
        console.log(ret);
        var expected = [0, 1, 2, 3, 7, 11, 15, 19, 18, 17, 16, 12, 8, 4, 5, 6, 10, 14, 13, 9, 5];
        assert.deepEqual(ret, expected);
    });
});