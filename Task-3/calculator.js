class Calculator {
  constructor(numOne, numTwo) {
      this.numOne = numOne;
      this.numTwo = numTwo;
  }
  add() {
      if(typeof(this.numOne) === 'number' && typeof(this.numTwo) === 'number') {
          return this.numOne + this.numTwo;
      } else {
          return 'Your inputs should be Numbers'
      }
  }
  subtract() {
      if(typeof(this.numOne) === 'number' && typeof(this.numTwo) === 'number') {
          return this.numOne - this.numTwo;
      } else {
          return 'Your inputs should be Numbers'
      }
  }
  divide() {
      if(typeof(this.numOne) === 'number' && typeof(this.numTwo) === 'number') {
          return this.numOne / this.numTwo;
      } else {
          return 'Your inputs should be Numbers'
      };
  }
  multiply() {
      if(typeof(this.numOne) === 'number' && typeof(this.numTwo) === 'number') {
          return this.numOne * this.numTwo;
      } else {
          return 'Your inputs should be Numbers'
      }
  }
}

module.exports = Calculator;