"use Strict";
$(document).ready((e) => {
	$("#nav-toggle").click((evt) => {
		$("#nav").toggleClass("open");
		evt.preventDefault();
	});

	$("#save").click((event) => {
		// $("#save").click((event) => {
		let isValid = true;

		const emailPattern =
			/ \b [A-Za-z0-9._%+-] + @[A-Za-z0-9.-] + \.[A-Za-z] {2,4} \b /;
		const email = $("#contact_email").val().trim();
		if (email == "") {
			$("#contact_email").next().text("Required");
			isValid = false;
		} else if (!emailPattern.test(email)) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}

		//validate the phone number
		const phone = $("#phone").val().trim();

		if (phone == "") {
			$("#phone").next().text("Required.");
			isValid = false;
		} else {
			$("#phone").next().text("");
		}
		// $("#phone").val(phone);

		//validate the zip number
		const zip = $("#zip").val().trim();

		if (phone == "") {
			$("#zip").next().text("Required.");
			isValid = false;
		} else {
			$("#zip").next().text("");
		}
		// $("#zip").val(phone);

		// prevent the submission
		if (!isValid) {
			event.preventDefault();
		} else {
			const profile = [];
			profile.push(["email", email]);
			profile.push(["phone", phone]);
			profile.push(["zip", zip]);

			sessionStorage.profile = JSON.stringify(profile);
			location.href = "profile.html";
		}
	});
});
