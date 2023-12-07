class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
    return this.result;
  }

  subtract(num) {
    this.result -= num;
    return this.result;
  }

  multiply(num) {
    this.result *= num;
    return this.result;
  }

  divide(num) {
    if (num === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    this.result /= num;
    return this.result;
  }
  

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const validExpression = /^[0-9+*\-/().\s]+$/;
    if (!validExpression.test(expression)) {
      throw new Error('Invalid expression');
    }

    // Use a library or implement an expression parser to evaluate the expression
    // Example using eval (not recommended for production due to security risks)
    try {
      const sanitizedExpression = expression.replace(/\s+/g, ''); // Remove spaces
      const result = eval(sanitizedExpression); // Evaluate the expression
      this.result = result; // Update the calculator's result
      return result;
    } catch (error) {
      throw new Error('Invalid expression');
    }
  }
}

module.exports = Calculator;
