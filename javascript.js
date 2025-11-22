function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return (a / b);
}

let currentInput = '';
let currentOperation = '';
let previousInput = '';

function chooseNum(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput
}

function chooseOperator(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate(); // Calculate the previous operation before appending a new one
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = previousInput;
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let a = parseFloat(previousInput);
    let b = parseFloat(currentInput);
    let result;

    switch (currentOperation) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            return;
    }
    
    document.getElementById('display').value = result
    ;

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}