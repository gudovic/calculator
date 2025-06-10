const display = document.getElementById('display');
const smallDisplay = document.getElementById('small-display');

function clickableBtn(){
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
	let displayValue = display.textContent;
	let buttonValue = button.textContent;
  	let firstString = smallDisplay.textContent;
	// Need to fix this so it works on clicking symbols and dont return NaN
	if (display.textContent === "Can't divide by zero") {display.textContent = ""; smallDisplay.textContent = ""}
		//Number show up on click
		if (!isNaN(buttonValue)) {
		if (display.textContent == 0) {display.textContent = ""}
		display.textContent = display.textContent + button.textContent;}
		//Handle calculation
   		else if ((button.textContent=='+'||button.textContent=='-'||button.textContent=='*'||button.textContent=='/') && displayValue !== "" && firstString !== "") {
		if (firstString.includes('+')) {let result = (Number(displayValue)+Number(firstString.slice(0, -1))); smallDisplay.textContent = result + button.textContent; display.textContent = "";} 
		else if (firstString.includes('-')) {let result = (Number(firstString.slice(0, -1))-Number(displayValue)); smallDisplay.textContent = result + button.textContent; display.textContent = "";}
		else if (firstString.includes('*')) {let result = (Number(firstString.slice(0, -1))*Number(displayValue)); smallDisplay.textContent = result + button.textContent; display.textContent = "";}
		else if (firstString.includes('/')) 
			{if (Number(displayValue == 0)) {display.textContent = "Can't divide by zero"} 
			else {let result = (Number(firstString.slice(0, -1))/Number(displayValue)); smallDisplay.textContent = result + button.textContent; display.textContent = "";}}


	
	}
	
		//Change operation when display i empty
    else if (button.textContent=='+'||button.textContent=='-'||button.textContent=='*'||button.textContent=='/') {
    	if (display.textContent === "") {smallDisplay.textContent = firstString.slice(0, -1) + button.textContent}
      	else smallDisplay.textContent = display.textContent + button.textContent;
        			display.textContent = "";}
		//Function of weird buttons, need to fix comma bugg when you put 0.
			else if (button.textContent=='Backspace') {display.textContent = displayValue.slice(0, -1) || '0'}
    		else if (button.textContent=='C') {display.textContent = '0'; smallDisplay.textContent = ''}
    		else if (button.textContent=='CE') {display.textContent = '0'}
			else if (button.textContent=='.') {if (!display.textContent.includes('.')) display.textContent = display.textContent + button.textContent}

}))
}
clickableBtn();
