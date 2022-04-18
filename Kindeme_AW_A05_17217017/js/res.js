"use Strict";
$(document).ready((e) => {
	$("#nav-toggle").click((evt) => {
		$("#nav").toggleClass("open");
		evt.preventDefault();
	});

	$("#tabs").tabs();
	// $("#tabs").tabs("option", "active", 0);
	$("#policies").click(() => {
		$("#dialog").dialog({ modal: true });
	});
	$("#arrival_date").datepicker({
		minDate: new Date(),
		maxDate: +90,
	});
	$("#reservation_form").submit((event) => {
		let isValid = true;

		const nightsReserved = $("#nights").val().trim();
		if (nightsReserved == "") {
			$("#nights").next().text("this field is required.");
		} else if (nightsReserved < 0) {
			$("#nights").next().text("Must be a valid number.");
			isValid = false;
		} else {
			$("#nights").next().text("");
		}

		const name = $("#contact_name").val().trim();
		if (name == "") {
			$("#contact_name").next().text("this field is required.");
			isValid = false;
		} else {
			$("#contact_name").next().text("");
		}

		const emailPattern =
			/ \b [A-Za-z0-9._%+-] + @[A-Za-z0-9.-] + \.[A-Za-z] {2,4} \b /;
		const email = $("#contact_email").val().trim();
		if (email == "") {
			$("#contact_email").next().text("this field is required.");
		} else if (!emailPattern.test(email)) {
			$("#contact_email").next().text("Must be a valid email address.");

			isValid = false;
		} else {
			$("#contact_email").next().text("");
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
