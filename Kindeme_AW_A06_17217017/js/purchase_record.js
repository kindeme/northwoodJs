"use strict";
$(document).ready(() => {
	$("#nav-toggle").click((evt) => {
		$("#nav").toggleClass("open");
		evt.preventDefault();
	});

	const  emailPattern =  / \b [A-Za-z0-9._%+-] + @[A-Za-z0-9.-] + \.[A-Za-z] {2,4} \b / ;
   const datePattern = /^(0?[1-9]|[12][0-9]|3[01])[]
});
