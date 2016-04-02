'use strict';

var forkeys = require('forkeys-compat');

module.exports = function (array, property) {
    var total = 0;

    array.forEach(function (obj) {
        total += (obj[property] || 0);
    });

    return total;
};
