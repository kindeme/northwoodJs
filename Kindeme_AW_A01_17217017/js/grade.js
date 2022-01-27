let grade = 0;
do {
	grade = parseInt(
		prompt(
			"Enter number grade from 0 through 100 \n Or enter 999 to end entries",
			999
		)
	);

	if (grade < 70) {
		const html = `<p> Grade ${grade} = F`;
		document.write(html);
	} else if (grade <= 77) {
		const html = `<p> Grade ${grade} = D`;
		document.write(html);
	} else if (grade <= 84) {
		const html = `<p> Grade ${grade} = C`;
		document.write(html);
	} else if (grade <= 92) {
		const html = `<p> Grade ${grade} = B`;
		document.write(html);
	} else if (grade <= 100) {
		const html = `<p> Grade ${grade} = A`;
		document.write(html);
	} else if (grade != 999) {
		alert("Your number is out of range");
	}
} while (grade != 999);
