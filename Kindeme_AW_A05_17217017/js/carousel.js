"use strict";
$(document).ready(() => {
	$("#nav-toggle").click((evt) => {
		$("#nav").toggleClass("open");
		evt.preventDefault();
	});

	$("#slider").bxSlider({
		auto: true,
		autoControls: true,
		// stopAutoOnClick: true,
		pager: true,
		slideWidth: 600,
		captions: true,
		slideMargin: 10,
		minSlide: 2,
		maxSlide: 2,
		pagerType: "short",
	});
});
