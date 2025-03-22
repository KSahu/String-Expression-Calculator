const add = require('./stringExpressionCalculator.js');

describe("string calculator add function test suite", () => {

  describe("should be able to add comma separated numbers", () => {

    it("should return zero for empty string", () => {
        const result = add("");
        expect(result).toBe(0);
    })

  })





})
