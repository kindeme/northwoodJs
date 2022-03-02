"use strict";
const $ = (selector) => document.querySelector(selector);

const focusAndSelect = (selector) => {
	const elem = $(selector);
	elem.focus();
	elem.select();
};

const makeChange = (amount) => {
	let cents = amount;
	const quarters = parseInt(cents / 25);
	cents = cents % 25;
	const dimes = parseInt(cents / 10);
	cents = cents % 10;
	const nickels = parseInt(cents / 5);
	cents = cents % 5;
	const pennies = parseInt(cents);

	$("#quarters").value = quarters.toString();
	$("#dimes").value = dimes.toString();
	$("#nickels").value = nickels.toString();
	$("#pennies").value = pennies.toString();
};

const processEntry = () => {
	const change = parseInt($("#change").value);

	if (isNaN(change) || change <= 0 || change >= 100) {
		alert("Entry must be grater than  0 and less than 100");
		focusAndSelect("#change");
	} else {
		makeChange(change);
		focusAndSelect("#change");
	}
};

document.addEventListener("DOMContentLoaded", () => {
	$("#calculate").addEventListener("click", processEntry);
});
