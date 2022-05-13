"use Strict";
$(document).ready((e) => {
	// const emailPattern =
	// 	/ \b [A-Za-z0-9._%+-] + @[A-Za-z0-9.-] + \.[A-Za-z] {2,4} \b /;

	const datePattern =
		/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

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
		let contractError = false;
		let generalError = false;

		//validate date
		const arrivalDate = $("#arrival_date").val().trim();
		const theDate = new Date(arrivalDate);

		if (theDate == "Invalid Date") {
			$("#arrival_date").next().text("Required");
			isValid = false;
			generalError = true;
		} else {
			$("#arrival_date").next().text("");
		}
		$("#arrival_date").val(arrivalDate);

		//validate the number of nights

		const nights = $("#nights").val().trim();
		if (nights == "") {
			$("#nights").next().text("Required.");
			isValid = false;
			generalError = true;
		} else if (isNaN(nights)) {
			$("#nights").next().text("Must be a valid number.");
			isValid = false;
			// generalError = true;
		} else {
			$("#nights").next().text("");
		}

		$("#nights").val(nights);

		//validate the name entry
		const name = $("#contact_name").val().trim();
		if (name == "") {
			$("#contact_name").next().text("Required");
			isValid = false;
			contractError = true;
		} else {
			$("#contact_name").next().text("");
		}
		$("#contact_name").val(name);

		//validate email
		const emailPattern =
			/ \b [A-Za-z0-9._%+-] + @[A-Za-z0-9.-] + \.[A-Za-z] {2,4} \b /;
		const email = $("#contact_email").val().trim();
		if (email == "") {
			$("#contact_email").next().text("Required");
			isValid = false;
			contractError = true;
		} else if (emailPattern.test(email)) {
			$("#contact_email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#contact_email").next().text("");
		}

		//validate the phone number
		const phone = $("#phone").val().trim();

		if (phone == "") {
			$("#phone").next().text("Required.");
			isValid = false;
			contractError = true;
		} else {
			$("#phone").next().text("");
		}
		$("#phone").val(phone);

		const getRoomType = () => {
			return $("input[name=room]:checked").val();
		};

		const getBedType = () => {
			return $("input[name=bed]:checked").val();
		};
		const getCheckin = () => {
			return $("#checkin").is(":checked");
		};
		// prevent the submission
		if (!isValid) {
			if (generalError == true) {
				$("#tabs").tabs("option", "active", 0);
			} else {
				$("#tabs").tabs("option", "active", 2);
			}
			event.preventDefault();
		} else {
			const reservation = [];

			reservation.push(["contact_name", name]);
			reservation.push(["contact_name", email]);
			reservation.push(["phone", phone]);
			reservation.push(["arrival_Date", arrivalDate]);
			reservation.push(["night", nights]);
			reservation.push(["room_type", getRoomType()]);
			reservation.push(["bed_type", getBedType()]);
			reservation.push(["checkin", getCheckin()]);
		}

		sessionStorage.reservation = JSON.stringify(reservation);
	});
});
