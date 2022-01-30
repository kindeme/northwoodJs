const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];
const regionsArray = [region1, region2, region3, region4, region5];
console.log(regionsArray);
let quarterTotals = [0, 0, 0, 0];
let regionsTotal = [0, 0, 0, 0, 0];
let sum = 0;
let html = "";
let totalSales = 0;
for (let i = 0; i < regionsArray.length; i++) {
	for (j = 0; j < regionsArray[i].length; j++) {
		sum += regionsArray[i][j];
	}
	regionsTotal[i] = sum;
	sum = 0;
}
for (let i = 0; i < regionsArray.length; i++) {
	for (j = 0; j < regionsArray.length; j++) {
		sum += regionsArray[j][i];
	}
	quarterTotals[i] = sum;
	sum = 0;
}

for (let i = 0; i < quarterTotals.length - 1; i++) {
	html += `<p>Q${i + 1} : $ ${quarterTotals[i]} \n </p>`;
}
document.write(`<h1>Sales by Quarter </h1>`);

document.write(html);
html = "";

for (let i = 0; i < regionsTotal.length; i++) {
	html += `<p> Region${i + 1} : $ ${regionsTotal[i]} \n </p>`;
	sum += regionsTotal[i];
}
document.write(`<h1>Sales by Regions </h1>`);

document.write(html);
document.write(`<h1>Total Sales </h1>`);
document.write(`<p> $${sum}</p>`);
