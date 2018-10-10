//stringCalculator.test.js
const add = require("./stringCalculator");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return the number when there is only one number in the string", () => {
	expect(add("1")).toBe(1);
});

it("should return sum of two given numbers", () => {
	expect(add("1,2")).toBe(3);
});

it("should return sum of three given numbers", () => {
	expect(add("1,2,3")).toBe(6);
});

it("should return sum of numbers with new line used as a delimiter", () => {
	expect(add("3\n3\n3")).toBe(9);
});

it("should return sum of numbers with both delimiters used", () => {
	expect(add("3, 3\n 4")).toBe(10);
});

it("should not allow negative numbers", function(){
      expect( function(){ add("-1,2,3"); } ).toThrow(new Error("Negatives not allowed: " +"-1"));
});

it("should display negative numbers with error message", function(){
      expect( function(){ add("-1,2,3"); } ).toThrow(new Error("Negatives not allowed: " + "-1"));
});