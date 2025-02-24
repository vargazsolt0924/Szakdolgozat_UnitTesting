class Calculator {
    _validateNumberOfParameters(...params) {
      if (params.length < 1) {
        throw new Error('Not enough parameters to perform this operation');
      }
    }
  
    _validateType(...params) {
      if (!params.every((param) => typeof param === 'number')) {
        throw new TypeError(`Every input parameter must be a number`);
      }
    }
  
    add(...addends) {
      this._validateNumberOfParameters(...addends);
      this._validateType(...addends);
  
      return addends.reduce((sum, addend) => sum + addend, 0);
    }
  
    subtract(minuend, subtrahend) {
      this._validateType(minuend, subtrahend);
  
      return minuend - subtrahend;
    }
  
    divide(dividend, divisor) {
      this._validateType(dividend, divisor);
  
      if (divisor === 0) {
        throw new Error('"divisor" cannot be 0');
      }
  
      return dividend / divisor;
    }
  
    multiply(...factors) {
      this._validateNumberOfParameters(...factors);
      this._validateType(...factors);
  
      return factors.reduce((product, factor) => product * factor, 1);
    }
  
    squareRoot(radicand) {
      this._validateType(radicand);
  
      if (radicand < 0) {
        throw new Error('"radicand" must be non-negative');
      }
  
      return radicand ** 0.5;
    }
  }
  
  module.exports = Calculator;
  