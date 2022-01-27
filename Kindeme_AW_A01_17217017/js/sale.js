const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];
let quarterTotals = [];
let sum = 0;
let totalsByQuarter = "";

for (let j = 0; j < region1.length; j++) {
	sum += region`${j + 1}`[j];

	// // quarterTotals[i] = sum;
	// sum = 0;
	// console.log(`region${j + 1}`.length);
}
console.log(sum);

// for (let i = 0; i <= quarterTotals.length; i++) {
// 	totalsShow += `Q${i} :  ${quarterTotals[i]} \n`;
// 	document.write(`<p>${totalsShow} </p>`);
// }
