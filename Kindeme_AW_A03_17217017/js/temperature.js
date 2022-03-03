"use strict";

const $ = (selector) => document.querySelector(selector);
let convertResult = 0;
let inputValue = 0;

const calculateClesius = (fahrenheitValue) => {
	return ((fahrenheitValue - 32) * 5) / 9;
};

const calculateFahrenheit = (celsiusValue) => {
	return (celsiusValue * 9) / 5 + 32;
};

const toCelsius = () => {
	clearTextBoxes();
	$("#degree_label_1").textContent = "Enter F degrees";
	$("#degree_label_2").textContent = "Degree Celsius";
	$("#degrees_entered").focus();
};

const toFahrenheit = () => {
	clearTextBoxes();
	$("#degree_label_1").textContent = "Enter C degrees";
	$("#degree_label_2").textContent = "Degree Fahrenheit";
	$("#degrees_entered").focus();
};
const clearTextBoxes = () => {
	$("#degrees_entered").value = "";
	$("#degrees_computed").value = "";
	$("#degree_label_1").textContent = "";
	$("#degree_label_2").textContent = "";
};

const convertTemp = (e) => {
	e.preventDefault();
	if ($("#to_celsius").checked) {
		inputValue = $("#degrees_entered").value;
		if (inputValue == "") {
			$("#message").textContent =
				"You must enter a valid number for degrees";
		} else {
			inputValue = parseFloat($("#degrees_entered").value);

			convertResult = calculateClesius(inputValue).toFixed(0);
			$("#degrees_computed").value = convertResult;
		}
	} else if ($("#to_fahrenheit").checked) {
		inputValue = $("#degrees_entered").value;
		if (inputValue == "") {
			$("#message").textContent =
				"You must enter a valid number for degrees";
		} else {
			inputValue = parseFloat($("#degrees_entered").value);
			convertResult = calculateFahrenheit(inputValue).toFixed(0);
			$("#degrees_computed").value = convertResult;
		}
	}
};

document.addEventListener("DOMContentLoaded", () => {
	$("#to_celsius").addEventListener("click", toCelsius);
	$("#to_fahrenheit").addEventListener("click", toFahrenheit);
	$("#convert").addEventListener("click", convertTemp);
	$("#degrees_entered").addEventListener("click", () => {
		$("#degrees_entered").value = "";
		$("#degrees_computed").value = "";
	});
});
