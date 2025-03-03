const Calculator = require('./calculator');
const testData = require('./testData');

describe('Calculator', () => {
  let calculator;

  beforeAll(() => {
    calculator = new Calculator();
  });

  describe('add()', () => {
    test.each(testData.additionCases)('should add numbers correctly', ({ inputs, expected }) => {
      expect(calculator.add(...inputs)).toBe(expected);
    });
  });

  describe('subtract()', () => {
    test.each(testData.subtractionCases)('should subtract numbers correctly', ({ inputs, expected }) => {
      expect(calculator.subtract(...inputs)).toBe(expected);
    });
  });

  describe('divide()', () => {
    test.each(testData.divisionCases)('should divide numbers correctly', ({ inputs, expected }) => {
      expect(calculator.divide(...inputs)).toBe(expected);
    });
  });

  describe('multiply()', () => {
    test.each(testData.multiplicationCases)('should multiply numbers correctly', ({ inputs, expected }) => {
      expect(calculator.multiply(...inputs)).toBe(expected);
    });
  });

  describe('squareRoot()', () => {
    test.each(testData.squareRootCases)('should calculate square root correctly', ({ input, expected }) => {
      expect(calculator.squareRoot(input)).toBe(expected);
    });
  });

  describe('Error handling', () => {
    test.each(testData.errorCases)('should throw expected errors', ({ method, inputs, error, errorType }) => {
      if (error) {
        expect(() => calculator[method](...inputs)).toThrow(error);
      } else if (errorType) {
        expect(() => calculator[method](...inputs)).toThrow(errorType);
      }
    });
  });
});
