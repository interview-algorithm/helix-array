/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-04-20[17:51:36]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */

import isArray from 'isarray';
import isIngeger from 'is-integer';

const helixFrom = (arr, x, y, width, height, oriWidth, oriHeight) => {
    if (width < 1 || height < 1) {
        return [];
    }

    let ret = arr.slice(oriWidth * x + y, oriWidth * x + y + width);

    for (let i = 0; i < height - 2; ++i) {
        ret.push(arr[oriWidth * (y + i + 1) + x + width - 1]);
    }

    if (height > 1) {
        for (let i = width - 1; i >= 0; --i) {
            ret.push(arr[oriWidth * (y + height - 1) + x + i]);
        }
    }

    if (width > 1) {
        for (let i = height - 2; i > 0; --i) {
            ret.push(arr[oriWidth * (y + i) + x]);
        }
    }

    return ret;
};

export const helixArray = (arr, width, height) => {
    if (!isArray(arr)) {
        throw new Error('"arr" should be an array');
    }

    if (!isIngeger(width) || !isIngeger(height)) {
        throw new Error('"width" and "height" both should be integers');
    }

    if (width * height !== arr.length) {
        throw new Error('Array\'s length should equal "width"*"height"');
    }

    if (!arr.length) {
        return [];
    }

    let ret = [];
    for (let i = 0; i < Math.ceil((Math.min(width, height) / 2)); ++i) {
        ret = ret.concat(helixFrom(arr, i, i, width - i * 2, height - i * 2, width, height));
    }

    return ret;

};