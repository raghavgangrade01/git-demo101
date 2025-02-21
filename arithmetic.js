function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Error: Cannot divide by zero";
        case '%':
            return b !== 0 ? a % b : "Error: Cannot mod by zero";
        default:
            return "Error: Unknown operation";
    }
}

// Example usage:
console.log(calculate(10, 5, '%')); // Output: 0
console.log(calculate(10, 3, '%')); // Output: 1
console.log(calculate(10, 0, '%')); // Output: "Error: Cannot mod by zero"
