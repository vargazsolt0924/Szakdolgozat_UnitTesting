const Calculator = require('./calculator'); 

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(); 
  });

  test('should add numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(1, 2, 3, 4)).toBe(10);
  });

  test('should throw error when no parameters are provided', () => {
    expect(() => calculator.add()).toThrow('Not enough parameters to perform this operation');
    expect(() => calculator.multiply()).toThrow('Not enough parameters to perform this operation');
  });
  

  test('should subtract numbers correctly', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test('should multiply numbers correctly', () => {
    expect(calculator.multiply(2, 3, 4)).toBe(24);
  });

  test('should divide numbers correctly', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow('"divisor" cannot be 0');
  });

 /* test('should calculate square root correctly', () => {
    expect(calculator.squareRoot(9)).toBe(3);
  });*/

  test('should throw error for negative square root', () => {
    expect(() => calculator.squareRoot(-4)).toThrow('"radicand" must be non-negative');
  });

  test('should throw error when input is not a number', () => {
    expect(() => calculator.add(2, "text")).toThrow(TypeError);
  });
});
