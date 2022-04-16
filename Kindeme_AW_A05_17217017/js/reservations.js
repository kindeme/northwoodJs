"use strict";
$(document).ready(() => {
	$("#nav-toggle").click((evt) => {
		$("#nav").toggleClass("open");
		evt.preventDefault();
	});

	$("#arrival").focus();

	$("#form_validation").submit((event) => {
		let isValid = true;

		const datePattern = / ^ [01] ? \d\/[0-3]\d\/\d {4} $ /;
		const arrivalDate = $("#arrival").val().trim();
		if (arrivalDate == "") {
			$("#arrival").next().text("this field is required.");
		} else if (!datePattern.test(arrivalDate)) {
			$("#arrival").next().text("Must be a valid date.");
			isValid = false;
		} else {
			$("#arrival").next().text("");
		}

		const nightsReserved = $("#nights").val().trim();
		if (nightsReserved == "") {
			$("#nights").next().text("this field is required.");
		} else if (nightsReserved < 0) {
			$("#nights").next().text("Must be a valid number.");
			isValid = false;
		} else {
			$("#nights").next().text("");
		}

		const name = $("#name").val().trim();
		if (name == "") {
			$("#name").next().text("this field is required.");
			isValid = false;
		} else {
			$("#name").next().text("");
		}

		const emailPattern =
			/ \b [A-Za-z0-9._%+-] + @[A-Za-z0-9.-] + \.[A-Za-z] {2,4} \b /;
		const email = $("#email").val().trim();
		if (email == "") {
			$("#email").next().text("this field is required.");
		} else if (!emailPattern.test(email)) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}

		const phonePattern =
			/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
		const phone = $("#phone").val().trim();

		if (phone == "") {
			$("#phone").next().text("this field is required.");
		} else if (!phonePattern.test(email)) {
			$("#phone").next().text("Must be a valid hone number.");
			isValid = false;
		} else {
			$("#phone").next().text("");
		}

		if (isValid == false) {
			event.preventDefault();
		}
	});
});
