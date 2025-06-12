const display = document.getElementById('display');
const smallDisplay = document.getElementById('small-display');
const buttons = document.querySelectorAll('.buttons');

let firstValue = '';
let operator = '';
let secondValue = '';
let shouldResetDisplay = false;

buttons.forEach(btn => {
  btn.addEventListener('click', () => handleClick(btn));
});

function handleClick(btn) {
  const type = btn.dataset.type;
  const value = btn.dataset.value;

  if (type === 'number') {
    if (shouldResetDisplay) {
      display.textContent = '';
      shouldResetDisplay = false;
    }
    if (value === '.' && display.textContent.includes('.')) return;
    display.textContent += value;
  }

  else if (type === 'operator' && value !== '=') {
    if (display.textContent === '') return;
    if (firstValue && operator && !shouldResetDisplay) {
      secondValue = display.textContent;
      const result = operate(firstValue, operator, secondValue);
      display.textContent = result;
      smallDisplay.textContent = `${result} ${value}`;
      firstValue = result;
    } else {
      firstValue = display.textContent;
      smallDisplay.textContent = `${firstValue} ${value}`;
    }
    operator = value;
    shouldResetDisplay = true;
  }

  else if (type === 'operator' && value === '=') {
    if (!firstValue || !operator || shouldResetDisplay) return;
    secondValue = display.textContent;
    const result = operate(firstValue, operator, secondValue);
    display.textContent = result;
    smallDisplay.textContent = `${firstValue} ${operator} ${secondValue} =`;
    firstValue = '';
    secondValue = '';
    operator = '';
    shouldResetDisplay = true;
  }

  else if (type === 'clear') {
    display.textContent = '';
    smallDisplay.textContent = '';
    firstValue = '';
    secondValue = '';
    operator = '';
    shouldResetDisplay = false;
  }

  else if (type === 'ce') {
    display.textContent = '';
  }

  else if (type === 'delete') {
    display.textContent = display.textContent.slice(0, -1);
  }
}

function operate(a, op, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? "Can't divide by zero" : a / b;
    default: return 'Error';
  }
}
