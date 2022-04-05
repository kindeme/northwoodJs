"use strict";
$(document).ready(() => {
	$("#nav-toggle").click((evt) => {
		$("#nav").toggleClass("open");
		evt.preventDefault();
	});

	$("#collapse_expand h3").click((evt) => {
		evt.preventDefault();
		const h3 = evt.currentTarget;
		$(h3).prev().toggleClass("hide");
		if ($(h3).prev().attr("class") == "hide") {
			$(h3).text("show More");
		} else {
			$(h3).text("show less");
		}
	});
});
