var inquirer = require("inquirer");
var Promise = require("bluebird");



var ClozeCard = function(text, cloze) {
	if(text.includes(cloze)) {

	this.fullText = text;
	this.cloze = cloze;

	this.partial = this.fullText.replace(this.cloze, "...");

	console.log(this.fullText);
	console.log(this.cloze);
	console.log(this.partial);

	startCards();

} else {
	console.log("Error");
}
};

var createCard = function() {
	return new Promise(function(resolve, reject) {

	inquirer.prompt([
		{
			name: "text",
			message: "What is the entire question?"
		}, {
			name:"cloze",
			message: "What is the correct answer in the text?"
		}
		]).then(function(answers) {
			var newQuestion = new ClozeCard(
				answers.text,
				answers.cloze);
			resolve(newQuestion);
		});
	})
};

function startCards() {
	inquirer.prompt([
	{
		name: "check",
		message: "Would you like to make a new flash card?"
	}
		]).then(function(answers) {
			if(answers.check === "yes" || answers.check === "Yes") {
				createCard();
			} else if(answers.check === "no" || answers.check === "No") {
				return true;
			} else {
				console.log("Please say yes or no...");
				startCards();
			}
		})
};

	startCards();



module.exports = ClozeCard;