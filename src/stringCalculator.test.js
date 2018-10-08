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