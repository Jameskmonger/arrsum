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

test('it counts properties when all match', (t, input, property, output) => {
    let total = arrsum(input, property);

    t.assert.equal(output, total);
}, [
    [
        [ { value: 3 }, { value: 2} ], 'value', 5
    ],
    [
        [ { count: 17 }, { count: 17 } ], 'count', 34
    ]
]);

test('it counts properties when some match', (t, input, property, output) => {
    let total = arrsum(input, property);

    t.assert.equal(output, total);
}, [
    [
        [ { value: 3 }, { value: 2}, { other: 4 } ], 'value', 5
    ],
    [
        [ { junk: 17 }, { rubbish: 50}, { count: 17 }, { count: 3 } ], 'count', 20
    ]
]);

test('it works with decimals', (t, input, output) => {
    let total = arrsum(input, 'value');

    t.assert.equal(output, total);
}, [
    [
        [ { value: 3.2 }, { value: 2.2 }, { value: 4.5 } ], 9.9
    ],
    [
        [ { value: 1.3 }, { value: 50.65 }, { value: 2.4 }, { value: 8.1 } ], 62.45
    ]
]);
