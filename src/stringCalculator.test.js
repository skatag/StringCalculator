//stringCalculator.test.js
const add = require("./stringCalculator");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

