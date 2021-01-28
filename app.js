const buttons = document.querySelector('.calculator');
const output = document.querySelector('.output');
const result = document.querySelector('.result');

// Initial value
let rightSide = [];
let leftSide = [];
let operator = '';
// Input all number
buttons.addEventListener('click', (e) => {
	if (operator == '' && isNaN(convertToNum(e.target.innerText)) == false) {
		rightSide.push(convertToNum(e.target.innerText));
	} else if (isNaN(convertToNum(e.target.innerText))) {
		operator = e.target.innerText;
	} else {
		leftSide.push(convertToNum(e.target.innerText));
	}
	console.log(rightSide, operator, leftSide);
	output.innerText = `${rightSide.join('')}${operator}${leftSide.join('')}`;
});

// Getting the result
result.addEventListener('click', () => {
	if (rightSide.length != 0 && leftSide.length != 0) {
		output.innerText = operation(
			convertToNum(rightSide.join('')),
			convertToNum(leftSide.join('')),
			operator
		);
		rightSide = [];
		leftSide = [];
		operator = '';
	}
});
//text to number convert
const convertToNum = (text) => {
	return parseFloat(text);
};

// Main operation
const operation = (a, b, operator) => {
	switch (operator) {
		case '+':
			return a + b;
			break;
		case '-':
			return a - b;
			break;
		case '*':
			return a * b;
			break;
		case '/':
			return a / b;
			break;
	}
};
