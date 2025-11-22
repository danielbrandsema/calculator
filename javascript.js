// basic function to add, subtract, multiply and divide:
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
    if (b === 0) return "You can not divide by 0!";
    return (a / b);
}

//variables for input of numbers and operator, to be able to make a calculation:
let currentInput = '';
let currentOperation = '';
let previousInput = '';

//function for displaying the chosen numbers from the buttons:
function chooseNum(number) {
    currentInput += number; //makes it possible to input multi-digit numbers
    document.getElementById('display').value = currentInput //shows current number in display
}

function addDecimal() {
    if (currentInput === '') {
        currentInput = '0.';
        document.getElementById('display').value = currentInput; //shows '0.' in display when '.' is clicked
    }
    if (currentInput.includes('.')) return; //makes sure that a second '.' is not possible in a number
    currentInput += '.';
    document.getElementById('display').value = currentInput;
}

//function for next step: choosing operator and next number:
function chooseOperator(operation) {
    if (currentInput === '' && previousInput === '') return; //makes sure to start with a number (instead of an operator)
    if (previousInput !== '' && currentInput === '') {
        currentOperation = operation; //makes sure that the last chosen operator is remembered, before choosing an new currentInput
        return; 
    }
    if (previousInput !== '' && currentInput !== '') {
        calculate(); 
    }
    currentOperation = operation; //chosen operator is remembered
    previousInput = currentInput; //makes the first chosen number the first number of the calculation
    currentInput = ''; //empties the currentInput so a second number can be chosen
    document.getElementById('display').value = previousInput; //makes sure that during the function the first chosen number stays in display
}

function calculate() {
    if (previousInput === '' || currentInput === '') return; //makes sure that for every calcultion two numbers are chosen
    let a = parseFloat(previousInput); 
    let b = parseFloat(currentInput); // variables a and b are connected to the chosen numbers, and turned into actual numbers (instead of strings)
    let result;

    switch (currentOperation) { //switch function chooses the right calculation based on chosen operator
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
    
    document.getElementById('display').value = result; //displays the result of the calculation

    previousInput = result.toString(); //stores the result (as a string) under variable currentInput, in case it has to be used for a new calculation
    currentOperation = null; //stops/removes the current operator in order to facilitate a new operator
    currentInput = ''; //rests currentInput to an empty string
}

function clearDisplay() {
    currentInput = ''; 
    previousInput = ''; 
    currentOperation = null;
    document.getElementById('display').value = '';
}