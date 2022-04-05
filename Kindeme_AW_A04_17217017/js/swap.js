"use strict";
$(document).ready(() => {
	$("#nav-toggle").click((evt) => {
		$("#nav").toggleClass("open");
		evt.preventDefault();
	});

	// preload images
	$("#image_list a").each((index, link) => {
		const image = new Image();
		image.src = link.href;
	});

	//attach event handlers for links

	$("#image_list a").click((evt) => {
		evt.preventDefault();
		const link = evt.currentTarget;
		// $("#main_image").attr("src", link.href);
		// $("#caption").text(link.title);
		$("#caption").fadeOut(1000);
		$("#main_image").fadeOut(1000, () => {
			$("#main_image").attr("src", link.href).fadeIn(1000);
			$("#caption").text(link.title).fadeIn(1000);
		});
	});
	$("li:first-child a").focus();
});
