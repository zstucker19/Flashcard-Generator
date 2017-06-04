var inquirer = require("inquirer");
var Promise = require("bluebird");



var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;

	console.log(this.front);
	console.log(this.back);
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

	createCard();

module.exports = BasicCard;