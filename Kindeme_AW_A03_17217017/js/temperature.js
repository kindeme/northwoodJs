// In your JavaScript file, I recommend the following function expressions:
// toCelsius
// toFahrenheit
// clearTextBoxes
// convertTemp
// In your document.addEventListener()
// when the to_celsius radio button is clicked, then call toCelsius function expression
// when the to_fahrenheit radio button is clicked, then call toFahrenheit
// In both toCelsius and toFahrenheit function expression, you need to use the .textCcontent properties to dynamically change the text of the labels.

const $ = (selector) => document.querySelector(selector);

const celsiusConvertion = $("#to_celsius");
const fahrenheitConvertion = $("#to_fahrenheit");
const input = $("#degree_label_1");
const result = $("#degree_label_2");
const message = $("#message");
let convertResult = 0;
let inputValue = 0;
let isValid = true;

const calculateClesius = (fahrenheitValue) => {
	return ((fahrenheitValue - 32) * 5) / 9;
};

const calculateFahrenheit = (celsiusValue) => {
	return (celsiusValue * 9) / 5 + 32;
};
if (fahrenheitConvertion.checked) {
	toFahrenheit();
} else {
	toCelsius();
}

const toCelsius = () => {
	clearTextBoxes();
	input.parentNode.firstChild.textContent = "Enter F degrees";
	result.parentNode.firstChild.textContent = "Degree Celsius";
	input.focus();
};

const toFahrenheit = () => {
	clearTextBoxes();
	input.parentNode.firstChild.textContent = "Enter C degrees";
	result.parentNode.firstChild.textContent = "Degree Fahrenheit";
	input.focus();
};
const clearTextBoxes = () => {
	input.value = "";
	result.value = "";
	input.parentNode.firstChild.textContent = "";
};

const convertTemp = (e) => {
	e.preventDefault();
	if (celsiusConvertion.checked) {
		//toCelsius();
		inputValue = input.value;
		if (inputValue == "") {
			message.textContent = "This field is require";
		} else {
			convertResult = calculateClesius(parseFloat(inputValue)).tofixed(0);
			result.textContent = convertResult;
		}
	} else if (fahrenheitConvertion.checked) {
		//toFahrenheit();
		inputValue = input.value;
		if (inputValue == "") {
			message.textContent = "This field is require";
		} else {
			convertResult = calculateFahrenheit(parseFloat(inputValue)).tofixed(
				0
			);
			result.textContent = convertResult;
		}
	}
};

document.addEventListener("DOMContentLoaded", () => {
	$("#to_celsius").addEventListener("Change", toCelsius);
	$("#to_fahrenheit").addEventListener("Change", toFahrenheit);
	$("#convert").addEventListener("click", convertTemp);
});
