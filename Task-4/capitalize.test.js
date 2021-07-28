const { it, expect } = require('@jest/globals');
const capitalize = require('./capitalize.js');

it('capitalize(1) should return "Your input should be a string"', () => {
    expect(capitalize(1)).toEqual('Your input should be a string');
})
it('capitalize("jest") should return string', () => {
    expect(typeof capitalize("jest")).toBe('string');
})
it('capitalize("jest") should return "Jest"', () => {
    expect(capitalize("jest")).toBe('Jest');
})
