'use strict';

const test = require('modunit');
const arrsum = require('./index');

test('it returns 0 for empty array', t => {
    let array = [];

    let total = arrsum(array, 'somevalue');

    t.assert.equal(0, total);
});
