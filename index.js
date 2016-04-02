'use strict';

module.exports = function (array, property) {
    var total = 0;

    array.forEach(function (obj) {
        total += (obj[property] || 0);
    });

    return total;
};
