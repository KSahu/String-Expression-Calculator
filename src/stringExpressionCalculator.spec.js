const add = require('./stringExpressionCalculator.js');

describe("string calculator add function test suite", () => {

  describe("should be able to add comma separated numbers", () => {

    it("should return zero for empty string", () => {
        const result = add("");
        expect(result).toBe(0);
    })

    it("should return the input as number if string has one number", () => {
        const result = add("3");
        expect(result).toBe(3);
    })

    it("should return sum of comma separated two numbers in the string", () => {
        const result = add("2,3");
        expect(result).toBe(5);
    })

  })





})
