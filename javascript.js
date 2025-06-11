const display = document.getElementById('display');
const smallDisplay = document.getElementById('small-display');

function clickableBtn(){
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
	let displayValue = display.textContent;
	let buttonValue = button.textContent;
  	let firstString = smallDisplay.textContent;
  if (display.textContent === 'Cant divide by zero') {smallDisplay.textContent = ''; display.textContent = ''; return;}
	//Handle number inputs
		if (!isNaN(buttonValue)) {
		if (display.textContent === '0') {display.textContent = ""} display.textContent = display.textContent + button.textContent;}
	//Chain calculation
    else if ((button.textContent=='+'||button.textContent=='-'||button.textContent=='*'||button.textContent=='/') && displayValue !== "" && firstString !== "") {
    if (firstString.includes('+')) {smallDisplay.textContent = (Number(firstString.slice(0, -1)) + Number(display.textContent) + buttonValue); display.textContent = ""}
    if (firstString.includes('-')) {smallDisplay.textContent = (Number(firstString.slice(0, -1)) - Number(display.textContent) + buttonValue); display.textContent = ""}
    if (firstString.includes('*')) {smallDisplay.textContent = (Number(firstString.slice(0, -1)) * Number(display.textContent) + buttonValue); display.textContent = ""}
    if (firstString.includes('/')) {smallDisplay.textContent = (Number(firstString.slice(0, -1)) / Number(display.textContent) + buttonValue); display.textContent = ""}
    if (firstString.includes('/') && displayValue == '0') {display.textContent = 'Cant divide by zero'; smallDisplay.textContent = ''} 
    }
    else if (button.textContent=='+'||button.textContent=='-'||button.textContent=='*'||button.textContent=='/') {
    	if (display.textContent === "") {smallDisplay.textContent = firstString.slice(0, -1) + button.textContent}
      	else smallDisplay.textContent = display.textContent + button.textContent;
        			display.textContent = "";}
		else if (button.textContent=='Backspace') {display.textContent = displayValue.slice(0, -1) || '0'}
    	else if (button.textContent=='C') {display.textContent = '0'; smallDisplay.textContent = ''}
    	else if (button.textContent=='CE') {display.textContent = '0'}
		else if (button.textContent=='.') {if (!displayValue.includes('.')){display.textContent = display.textContent + button.textContent}}
		else if (button.textContent=='=') {
    if (firstString.includes('+')) {display.textContent = (Number(firstString.slice(0, -1)) + Number(display.textContent) ); smallDisplay.textContent = ""}
    if (firstString.includes('-')) {display.textContent = (Number(firstString.slice(0, -1)) - Number(display.textContent) ); smallDisplay.textContent = ""}
    if (firstString.includes('*')) {display.textContent = (Number(firstString.slice(0, -1)) * Number(display.textContent) ); smallDisplay.textContent = ""}
    if (firstString.includes('/')) {display.textContent = (Number(firstString.slice(0, -1)) / Number(display.textContent) ); smallDisplay.textContent = ""}
    if (firstString.includes('/') && displayValue == '0') {display.textContent = 'Cant divide by zero'; smallDisplay.textContent = ''} 
    }
}))
}
clickableBtn();

