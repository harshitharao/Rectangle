var assert = require('assert');

describe('Rectangle', function () {
    describe('area', function () {
        it('should return area of rectangle', function () {
            assert.equal(Rectangle.area(5, 2), 10);
        })
    })
});