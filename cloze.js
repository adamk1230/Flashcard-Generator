var inquirer = require("inquirer");
var ClozeCard = require("./ClozeCard.js");
var fs = require("fs");



//Creating our global variables
var count = 0;
var cards = [];
var right = 0;
var wrong = 0;


fs.readFile("cloze.JSON", "utf8", function(error, data) {
			if (error) {
				return console.log(error);
			}
			// console.log(JSON.parse(data).cards[0]);
			var cardsArray = JSON.parse(data).cards;
			var card = [];

			for (var i = 0; i < cardsArray.length; i++) {
				card[i] = new ClozeCard(cardsArray[i].question, cardsArray[i].cloze);
				cards.push(card[i])
			}

			askCloze();

			


		});





var askCloze = function(){
	if (count < cards.length){
		inquirer.prompt([
		{
			type: "input",
			message: cards[count].partial,
			name: "response"

		}
		]).then(function(answers) {
			if(answers.response == cards[count].cloze){
			console.log("You got the question right!");
			right++;
			console.log("Correct: " + right);
			console.log("Incorrect: " + wrong);
		}
			else{
				console.log("You got the question wrong!");
				console.log("The correct answer is " + cards[count].cloze);
				wrong++;
				console.log("Correct: " + right);
				console.log("Incorrect: " + wrong);
			}
		count++;
		askCloze();
	});
			

}
}

