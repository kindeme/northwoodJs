"use Strict";
$(document).ready(() => {
	const profile = JSON.parse(sessionStorage.profile);
	for (let value of profile) {
		("#" + value[0]).text(value[1]);
	}
	$("#back").click(() => {
		history.back();
	});
});
