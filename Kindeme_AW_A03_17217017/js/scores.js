"use strict";
const $ = (selector) => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];
const resultDiv = $("#result");
const scoreDiv = $("#scores");
let average = 0;
let highScore = 0;
let totalScores = 0;
let highScoreName = "";
let scoresValues = "";
let arraysContents = "";

const createElementWithText = (tagName, text) => {
	const element = document.createElement(tagName);
	const textNode = document.createTextNode(text);
	element.appendChild(textNode);
	return element;
};

const addScore = () => {
	if ($("#name").value !== null && $("#score").value !== null) {
		names.push($("#name").value);
		scores.push($("#score").value);
	} else {
		$("#errorMessage").textContent = "Enter valide name and score";
	}
	$("#name").value = "";
	$("#score").value = "";
};
const displayResults = () => {
	for (let i in scores) {
		totalScores += scores[i];
		//console.log(totalScores);
		//console.log(highScore);
		if (highScore < scores[i]) {
			highScore = scores[i];
			highScoreName = names[i];
		}
	}

	average = (totalScores / scores.length).toFixed(0);
	const headerNode = createElementWithText("h2", "Results");
	const averageNode = createElementWithText(
		"p",
		`Average score = ${average}`
	);

	const highScore = createElementWithText(
		"p",
		`High Score = ${highScoreName} with a score of ${highScore}`
	);

	if (resultDiv.firstChild) {
		resultDiv.replaceChild(headerNode, resultDiv.firstChild);
		resultDiv.replaceChild(
			averageNode,
			resultDiv.firstChild.nextElementSibblings
		);
		resultDiv.replaceChild(highScore, resultDiv.lastChild);
	} else {
		resultDiv.appendChild(headerNode);
		resultDiv.appendChild(averageNode);
		resultDiv.appendChild(highScore);
	}
};

const displayScores = () => {
	for (let i in scores) {
		arraysContents += `${names[i]} \t ${scores[i]} \n`;
	}

	const headerNode = createElementWithText("h2", "Scores");
	const element = document.createElement("p");
	const contentNode = createElementWithText("div", `${arraysContents} `);

	if (scoreDiv.firstChild) {
		scoreDiv.replaceChild(headerNode, scoreDiv.firstChild);
		scoreDiv.replaceChild(contentNode, scoreDiv.lastChild);
	} else {
		scoreDiv.appendChild(headerNode);
		scoreDiv.append(contentNode);
	}
};

document.addEventListener("DOMContentLoaded", () => {
	$("#displayResults").addEventListener("click", displayResults);
	$("#displayScores").addEventListener("click", displayScores);
	$("#addToArray").addEventListener("click", addScore);
	$("#name").focus();
});
