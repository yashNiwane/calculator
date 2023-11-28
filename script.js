let currentInput = '';
let currentOperation = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    currentOperation = operation;
    currentInput += ' ' + operation + ' ';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    updateDisplay();
}

function calculateResult() {
    const expression = currentInput.replace(/[^-()\d/*+.]/g, '');
    try {
        const result = eval(expression);
        currentInput = result.toString();
        updateDisplay();
        resultDisplayed = true;
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        resultDisplayed = true;
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
