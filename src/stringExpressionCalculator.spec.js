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

    it("should return sum of comma separated numbers in any amount given in the string", () => {
        const result = add("2,3,4,5");
        expect(result).toBe(14);
    })

  });

  describe("should support additional delimiters", () => {
    
    it("should be able to handle new line between numbers instead of commas", () => {
        const result = add("1\n2,3");
        expect(result).toBe(6);
    })

    /*
    ** delimiters can be changed by appending the delimiter in the string itself as below
    ** "//[delimiter]\n[numbers...]"
    */
    it("should be able change the delimiter with given format", () => {
        const result = add("//;\n1;2");
        expect(result).toBe(3);
    })
  });

  describe("should not allow negative numbers", () => {

    it("should throw exception as 'negative numbers not allowed <negative_number>'", () => {
        expect(() => add("-1")).toThrowError("negative numbers not allowed -1");
    })

    it("should include all negative numbers in error message separated by comma", () => {
        expect(() => add("-1,-2")).toThrowError("negative numbers not allowed -1,-2");
    })

  });





})
