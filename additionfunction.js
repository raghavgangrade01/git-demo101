const readline = require('readline'); // Import the readline module for reading input from the console

// This function adds two numbers and returns the result
const addFunction = (a, b) => {
    return a + b;
}

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for the first number
rl.question('Enter the first number: ', (num1) => {
    // Ask the user for the second number
    rl.question('Enter the second number: ', (num2) => {
        // Parse the input numbers and add them using the addFunction
        const result = addFunction(parseFloat(num1), parseFloat(num2));
        // Output the result to the console
        console.log(`The result is: ${result}`);
        // Close the readline interface
        rl.close();
    });
});

// Example usage of the addFunction
console.log(addFunction(2, 3)); // 5