"use strict";
$(document).ready(() => {
	$("#nav-toggle").click((evt) => {
		$("#nav").toggleClass("open");
		evt.preventDefault();
	});
});
