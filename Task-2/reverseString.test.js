const reverseString = require('./reverseString.js');

it('reverseString("Jest") should return string', () => {
    expect(typeof reverseString('Jest')).toBe('string');
})
it('reverseString("Jest") should return "tseJ"', () => {
    expect(reverseString('Jest')).toBe('tseJ');
})
