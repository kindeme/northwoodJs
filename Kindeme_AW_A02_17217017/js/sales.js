"use strict";
const $ = (selector) => document.querySelector(selector);

const focusAndSelect = (selector) => {
	const elem = $(selector);
	elem.focus();
	elem.select();
};

const processEntries = () => {
	const subTotal = parseFloat($("#subTotal").value);
	const taxRate = parseFloat($("#taxRate").value);

	if (isNaN(subTotal) || subTotal <= 0 || subTotal > 10000) {
		alert("SubTotal must be > 0 and < 10000");
		focusAndSelect("#subTotal");
	} else if (isNaN(taxRate) || taxRate <= 0 || taxRate > 12) {
		alert("TaxRate must be > 0 and < 12");
		focusAndSelect("#subTotal");
	} else {
		let salesTax = subTotal * (taxRate / 100);
		$("#salesTax").value = ` $ ${salesTax.toFixed(2).toString()}`;
		$("#total").value = ` $ ${(salesTax + subTotal).toFixed(2).toString()}`;
		focusAndSelect("#subTotal");
	}
};

const clearEntries = () => {
	$("#subTotal").value = "";
	$("#taxRate").value = "";
	$("#salesTax").value = "";
	$("#total").value = "";
};

const clearSubTotal = () => {
	$("#subTotal").value = "";
};

const clearRate = () => {
	$("#taxRate").value = "";
};
document.addEventListener("DOMContentLoaded", () => {
	$("#calculate").addEventListener("click", processEntries);
	$("#clear").addEventListener("click", clearEntries);
	$("#subTotal").addEventListener("click", clearSubTotal);
	$("#taxRate").addEventListener("click", clearRate);
});
