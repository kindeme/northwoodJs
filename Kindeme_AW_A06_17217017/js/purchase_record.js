"use strict";

const checkIfExists = (textEntered, elementName) => {
	if (textEntered == "" || textEntered == undefined || textEntered == "NaN") {
		switch (elementName) {
			case "email":
				throw new Error("Email Required");
			case "date":
				throw new Error("Date Required");
			case "amount":
				throw new Error("Amount Required");
		}
	}
	return textEntered;
};

const calculateDiscount = (inputPrice, discount) => {
	return inputPrice * discount;
};

$(document).ready(() => {
	$("#nav-toggle").click((evt) => {
		$("#nav").toggleClass("open");
		evt.preventDefault();
	});

	$("#date").datepicker({
		minDate: -20,
		maxDate: new Date(),
	});
	const emailPattern =
		/ \b [A-Za-z0-9._%+-] + @[A-Za-z0-9.-] + \.[A-Za-z] {2,4} \b /;
	const datePattern = /^(0?[1-9]|[12][0-9]|3[01])[]/;

	$("#submit").click(() => {
		try {
			const email = $("#email").val().trim();
			const date = $("#date").val().trim();
			const discount = $("#discount").val().trim();
			const purchase_amount = $("#purchase_amount").val().trim();
			checkIfExists(email);
			const value = 0;

			switch (discount) {
				case "none":
					value = purchase_amount;
					break;
				case "military":
				case "student":
					value =
						purchase_amount -
						calculateDiscount(purchase_amount * 0.1);
					break;
				case "aarp":
					value =
						purchase_amount -
						calculateDiscount(purchase_amount * 0.15);
			}

			$("#discounted_price").val(value);
		} catch (error) {
			$("#message").text(error.name + ": " + error.message);
		} finally {
			$("#email").focus();
		}
	});

	$("#clear").click(() => {
		$("#investment").val("");
		$("#discounted_price").val("");
		$("#discount").val("");
		$("#purchase_amount").val("");
	});
});
