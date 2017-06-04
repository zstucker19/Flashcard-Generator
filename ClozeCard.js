var inquirer = require("inquirer");
var Promise = require("bluebird");



var ClozeCard = function(text, cloze) {
	if(text.includes(cloze)) {

	this.fullText = text;
	this.cloze = cloze;

	this.partial = this.fullText.replace(this.cloze, "...");

	console.log(this.text);
	console.log(this.cloze);
	console.log(this.partial);

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

	createCard();



module.exports = ClozeCard;