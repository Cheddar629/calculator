let currentNum1;
let currentNum2;
let currentOperator;
let result;

// function that adds two numbers
function add (a, b) {
    return a + b;
}

// function that subtracts two numbers
function subtract (a, b) {
    return a - b;
}

// function that multiplies two numbers
function multiply (a, b) {
    return a * b;
}

// function that divides two numbers 
function divide (a, b) {
    return a / b;
}

// function that will do the operations
function operate (a, b, operator) {
    if (operator === 'add') result = add(a, b);
    if (operator === 'subtract') result = subtract(a, b);
    if (operator === 'multiply') result = multiply(a, b);
    if (operator === 'divide') result = divide(a, b);

    return result;
}