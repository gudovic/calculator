const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons');
const smallDisplay = document.getElementById('small-display');

let firstValue = '';
let operator = '';
let secondValue = '';

buttons.forEach(btn => btn.addEventListener('click', () => {
    handleClick(btn);
}))

function handleClick(btn) {
    const type = btn.dataset.type;
    const value = btn.dataset.value;

    if (type === 'number') {
        if (value === '.' && display.textContent.includes('.')) return;
        display.textContent += value
    } else if (type === 'operator' && value !== '=') {
        if (firstValue === '') {
            firstValue = display.textContent;
            operator = value;
            display.textContent = '';
        } else if (display.textContent === '') {
            operator = value;
        }
    }
        else if (type === 'operator' && value === '=') {
            if (firstValue !== '') {
                secondValue = display.textContent;
                const result = operation(firstValue, operator, secondValue);
                display.textContent = result;
                smallDisplay.textContent = `${firstValue} ${operator} ${secondValue} =`;
                firstValue = '';
                secondValue = '';
                operator = '';
            }
        } 

}

function operation(first, operator, second) {
    first = Number(first);
    second = Number(second);
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return second === 0 ? "Can't divide by zero" : first / second;
        default:
            return "Error";
    }
}