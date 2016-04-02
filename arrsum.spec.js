'use strict';

const test = require('modunit');
const arrsum = require('./index');

test('it returns 0 for empty array', t => {
    let array = [];

    let total = arrsum(array, 'somevalue');

    t.assert.equal(0, total);
});

test('it returns 0 if property doesn\'t exist', (t, input, property) => {
    let total = arrsum(input, property);

    t.assert.equal(0, total);
}, [
    [
        [ { value: 3 }, { value: 2} ], 'nonexistent'
    ],
    [
        [ { count: 17 }, { count: 17 } ], 'also-non-existent'
    ]
]);
