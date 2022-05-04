"use strict";
$(document).ready(() => {
	const reservation = JSON.parse(sessionStorage.reservation);
	for (let value of reservation) {
		$("#" + value[0]).text(value[1]);
	}
});
