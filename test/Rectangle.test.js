var assert = require('assert');
var Rectangle = require('../src/Rectangle');

describe('Rectangle', function () {
    describe('area', function () {
        it('should return area of rectangle', function () {
            assert.equal(Rectangle.area(5, 2), 10);
        })
    })
});