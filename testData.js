module.exports = {
    additionCases: [
      { inputs: [2, 3], expected: 5 },
      { inputs: [1, 2, 3, 4], expected: 10 }
    ],
    subtractionCases: [
      { inputs: [10, 4], expected: 6 },
      { inputs: [5, 0], expected: 5 }
    ],
    divisionCases: [
      { inputs: [10, 2], expected: 5 },
      { inputs: [0, 5], expected: 0 }
    ],
    multiplicationCases: [
      { inputs: [2, 3, 4], expected: 24 },
      { inputs: [5, 0], expected: 0 }
    ],
    squareRootCases: [
      { input: 9, expected: 3 },
      { input: 0, expected: 0 }
    ],
    errorCases: [
      { method: 'add', inputs: [], error: 'Not enough parameters to perform this operation' },
      { method: 'add', inputs: [2, "text"], errorType: TypeError },
      { method: 'subtract', inputs: [5], errorType: Error },
      { method: 'divide', inputs: [10, 0], error: '"divisor" cannot be 0' },
      { method: 'multiply', inputs: [], error: 'Not enough parameters to perform this operation' },
      { method: 'squareRoot', inputs: [-4], error: '"radicand" must be non-negative' }
    ]
  };
  