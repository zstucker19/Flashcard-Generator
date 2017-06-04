var inquirer = require("inquirer");
var Promise = require("bluebird");



var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;

	console.log(this.front);
	console.log(this.back);

	startCards();
};


var createCard = function() {
	return new Promise(function(resolve, reject) {

	inquirer.prompt([
		{
			name: "front",
			message: "What is the question?"
		}, {
			name:"back",
			message: "What is the answer?"
		}
		]).then(function(answers) {
			var newQuestion = new BasicCard(
				answers.front,
				answers.back);
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


module.exports = BasicCard;