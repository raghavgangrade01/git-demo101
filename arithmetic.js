function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Cannot divide by zero";
        case '%':
            return b !== 0 ? a % b : "Cannot mod by zero";
        default:
            return "Invalid operator";
    }
}

// Example usage:
console.log(calculate(10, 5, '+')); // Output: 15
console.log(calculate(10, 5, '-')); // Output: 5
console.log(calculate(10, 5, '*')); // Output: 50
console.log(calculate(10, 5, '/')); // Output: 2
console.log(calculate(10, 0, '%')); // Output: "Cannot divide by zero"
