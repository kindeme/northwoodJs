"use strict";

$(document).ready((e) => {
	let passLength = 0;
	$("#password_length").Change(() => {
		passLength = $("#password_length").val();
	});
	$("#nav-toggle").click((evt) => {
		$("#nav").toggleClass("open");
		evt.preventDefault();
	});

	$("#submit_password").click((e) => {
		// e.preventDefault();
		passLength = $("#password_length").val();
		if (passLength == "") {
			alert("Please enter a correct number for password length");
		} else {
			const chars =
				"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
			const getRandomNumber = (max) => {
				let random = null;
				if (!isNaN(max)) {
					random = Math.random();
					random = Math.floor(random * max);
					random = random + 1;
				}
				return random;
			};
			let randomNumber = getRandomNumber(chars.length);
			let password = "";
			for (let i = 0; i < passLength; i++) {
				password += chars.charAt(Math.floor(randomNumber));
			}
			$("#generated_pass").text(password);
		}
	});
	$("#reset_password").click(() => {
		$("#generated_pass").text("");
		$("#generated_pass").val("");
		$("#password_length").focus();
		$("#password_length").val(8);
	});
});
