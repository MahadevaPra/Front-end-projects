const resultInput = document.getElementById('result');

// Event listener for keydown
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Check if the key is a number or operator
    if (key >= '0' && key <= '9' || key === '.') {
        event.preventDefault();  // Prevent double appending
        appendToResult(key);  // Append number or decimal point
    } else if (['+', '-', '*', '/', '%'].includes(key)) {
        event.preventDefault();  // Prevent appending the operator twice
        if (!isLastCharOperator()) {  // Only append if last char is not an operator
            appendToResult(key);
        }
    } else if (key === 'Enter' || key === '=') {  // Trigger calculation for Enter or = key
        event.preventDefault();
        calculateResult();
    }
});

// Function to check if the last character is an operator
function isLastCharOperator() {
    const lastChar = resultInput.value.slice(-1);
    return ['+', '-', '*', '/', '%'].includes(lastChar);  // Return true if it's an operator
}

// Function to clear the result
function clearResult() {
    resultInput.value = '';
}

// Function to delete the last character
function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

// Function to append value to the input
function appendToResult(value) {
    resultInput.value += value;
}

// Function to calculate the result
function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value);  // Evaluate the expression in resultInput
    } catch (error) {
        resultInput.value = 'Error';  // If invalid input, show 'Error'
    }
}
