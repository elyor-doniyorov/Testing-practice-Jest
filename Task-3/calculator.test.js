const { expect } = require('@jest/globals');
const Calculator = require('./calculator.js');

describe('Calculator', () => {
    describe('Check if parametars are Numbers', () => {
        test('If parametrs are not Numbers functions should return "Your inputs should be Numbers"', () => {
            const userOne = new Calculator("React", 3);
            expect(userOne.add()).toEqual('Your inputs should be Numbers');
            expect(userOne.subtract()).toEqual('Your inputs should be Numbers');
            expect(userOne.divide()).toEqual('Your inputs should be Numbers');
            expect(userOne.multiply()).toEqual('Your inputs should be Numbers');
        })
        test('If parametrs are not Numbers functions should return "Your inputs should be Numbers"', () => {
            const userOne = new Calculator(2, "Html");
            expect(userOne.add()).toEqual('Your inputs should be Numbers');
            expect(userOne.subtract()).toEqual('Your inputs should be Numbers');
            expect(userOne.divide()).toEqual('Your inputs should be Numbers');
            expect(userOne.multiply()).toEqual('Your inputs should be Numbers');
        })
        test('If parametrs are not Numbers functions should return "Your inputs should be Numbers"', () => {
            const userOne = new Calculator("React", "Html");
            expect(userOne.add()).toEqual('Your inputs should be Numbers');
            expect(userOne.subtract()).toEqual('Your inputs should be Numbers');
            expect(userOne.divide()).toEqual('Your inputs should be Numbers');
            expect(userOne.multiply()).toEqual('Your inputs should be Numbers');
        })
    })
    describe('Check results One', () => {
        const userTwo = new Calculator(6, 3);
        test('userTwo.add() should return 9', () => {
            expect(userTwo.add()).toBe(9);
        })
        test('userTwo.subtract() should return 3', () => {
            expect(userTwo.subtract()).toBe(3);
        })
        test('userTwo.divide() should return 2', () => {
            expect(userTwo.divide()).toBe(2);
        })
        test('userTwo.multiply() should return 18', () => {
            expect(userTwo.multiply()).toBe(18);
        })

    })
    describe('Check results Two', () => {
        const userThree = new Calculator(15, 5);
        test('userThree.add() should return 20', () => {
            expect(userThree.add()).toBe(20);
        })
        test('userThree.subtract() should return 10', () => {
            expect(userThree.subtract()).toBe(10);
        })
        test('userThree.divide() should return 3', () => {
            expect(userThree.divide()).toBe(3);
        })
        test('userThree.multiply() should return 75', () => {
            expect(userThree.multiply()).toBe(75);
        })

    })
});