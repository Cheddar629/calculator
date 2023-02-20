let currentNum1 = '';
let currentNum2 = '';
let displayValue = '';
let currentOperator = '';
let result = '';
let operationOngoing = false; 
let isDecimal = false;

// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('#btn2')
// const btn3 = document.querySelector('#btn3')
// const btn4 = document.querySelector('#btn4')
// const btn5 = document.querySelector('#btn5')
// const btn6 = document.querySelector('#btn6')
// const btn7 = document.querySelector('#btn7')
// const btn8 = document.querySelector('#btn8')
// const btn9 = document.querySelector('#btn9')
// const btn0 = document.querySelector('#btn0')

const numBtn = document.querySelectorAll('.numBtn')

// const btnAdd = document.querySelector('#btnAdd')
// const btnSub = document.querySelector('#btnSub')
// const btn1Mul = document.querySelector('#btnMul')
// const btnDiv = document.querySelector('#btnDiv')

const operatorBtn = document.querySelectorAll('.operatorBtn')
const btnEqual = document.querySelector('.btnEqual')
const btnClear = document.querySelector('.btnClear')
const display = document.querySelector('.display')
const btnChangeSign = document.querySelector('.changeSignBtn')
const btnPercentage = document.querySelector('.percentageBtn')
const btnDecimal = document.querySelector('.decimalBtn')


numBtn.forEach(button => {
    button.addEventListener('click', displayNumber)
})

operatorBtn.forEach(button => {
    button.addEventListener('click', setOperator)
})

btnEqual.addEventListener('click', () => {
    if (currentNum2 === '') return;
    displayValue = operate(Number(currentNum1), Number(currentNum2), currentOperator);
    display.textContent = displayValue;

    currentNum1 = '';
    currentNum2 = '';
    operationOngoing = false;
})

btnClear.addEventListener('click', clearDisplay)

btnChangeSign.addEventListener('click', () => {
    if (!operationOngoing) {
        currentNum1 = changeSign(currentNum1)
        displayValue = currentNum1
        result = displayValue
        display.textContent = displayValue;
    } else if (operationOngoing) {
        currentNum2 = changeSign(currentNum2)
        displayValue = currentNum2
        result = displayValue
        display.textContent = displayValue;
    }
})

btnPercentage.addEventListener('click', () => {
    displayValue = percentage(displayValue)
    result = displayValue
    display.textContent = displayValue;
    if (!operationOngoing) {
        currentNum1 = displayValue;
    } else if (operationOngoing) {
        currentNum2 = displayValue;
    }
})

btnDecimal.addEventListener('click', () => {
    if (displayValue.includes('.')) {
        isDecimal = true;
        return
    }
    displayValue += '.'
    result = displayValue
    display.textContent = displayValue;
    if (!operationOngoing) {
        currentNum1 = displayValue;
    } else if (operationOngoing) {
        currentNum2 = displayValue;
    }
})


// function that displays the numbers
function displayNumber() {
    if (!operationOngoing) {
        result = '';
        if(currentNum1 === '') displayValue = '';
        if(displayValue.length > 15) return;
        displayValue += this.value;
        currentNum1 = displayValue;
        display.textContent = displayValue;
    } else if (operationOngoing) {
        if(currentNum2 === '') displayValue = '';
        if(currentNum2 === '-0') displayValue = '-'
        if(displayValue.length > 15) return;
        displayValue += this.value;
        currentNum2 = displayValue;
        display.textContent = displayValue;
    }
}


// function that sets the operation in the calculator
function setOperator () {
    if(!(currentNum1 === '') && !(currentNum2 === '')) {
        displayValue = operate(Number(currentNum1), Number(currentNum2), currentOperator);
        display.textContent = displayValue;
        currentNum1 = displayValue;
        currentNum2 = '';
        result = '';
        currentOperator = this.value;
    }
    if(!(result === '')) {
        currentNum1 = result;
        operationOngoing = true;
        currentOperator = this.value;
    }
    if (display === '') return;
    operationOngoing = true;
    currentOperator = this.value;
}



// function that adds two numbers
function add (a, b) {
    let rta = a + b
    if (rta % 1 === 0) {
        return rta;
    } else {
        return parseFloat(rta.toFixed(9))
    }
}

// function that subtracts two numbers
function subtract (a, b) {
    let rta = a - b
    if (rta % 1 === 0) {
        return rta;
    } else {
        return parseFloat(rta.toFixed(9))
    }
}

// function that multiplies two numbers
function multiply (a, b) {
    let rta = a * b
    if (rta % 1 === 0) {
        return rta;
    } else {
        return parseFloat(rta.toFixed(9))
    }
}

// function that divides two numbers 
function divide (a, b) {
    let rta = a / b
    if (rta % 1 === 0) {
        return rta;
    } else {
        return parseFloat(rta.toFixed(9))
    }
}

// function that will do the operations
function operate (a, b, operator) {
    if (operator === 'add') result = add(a, b);
    if (operator === 'subtract') result = subtract(a, b);
    if (operator === 'multiply') result = multiply(a, b);
    if (operator === 'divide') result = divide(a, b);

    return result;
}

// function that clears the display
function clearDisplay () {
    displayValue = '';
    result = '';
    if(!operationOngoing) {
        currentNum1 = displayValue;
    } else if (operationOngoing) {
        currentNum2 = displayValue
    }
    display.textContent = displayValue;
}

// function that changes the sing of the number
function changeSign(num) {
    if (num === "") return "-0";
    return 0 - num;
}

// function that changes number into percentage
function percentage (num) {
    return num * 0.01;
}

// function tha checks if the result of the operation gives a float number
function isFloat(num) {
    return n % 1 !== 0;
}
