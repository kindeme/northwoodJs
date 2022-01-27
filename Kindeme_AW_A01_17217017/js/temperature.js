let fahrenheitTemp = 0;
do {
	fahrenheitTemp = parseInt(
		prompt(
			"Enter Farhrenheit temperature \n Or enter 999 to end application",
			999
		)
	);

	if (fahrenheitTemp >= -100 && fahrenheitTemp <= 500) {
		const celsius = parseFloat(((fahrenheitTemp - 32) * 5) / 9);
		const html = `<p>${fahrenheitTemp} Fahrenheit = ${celsius.toFixed(
			1
		)} Celsius`;
		document.write(html);
	} else if (fahrenheitTemp != 999) {
		alert("Entry must range from -100 to +500.");
	}
} while (fahrenheitTemp != 999);

//
