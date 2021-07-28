const { expect, it } = require('@jest/globals');
const stringLength = require('./stringLength.js');

it('"Jest" should contain 4', () => {
  expect(stringLength("Jest")).toBe(4);
});

it('str should coantain no less than 1 or no more than ten', () => {
  expect(stringLength("") || stringLength("Jest is awesome!")).toEqual("Your text should contain not less than one element or not more than ten elements");
})