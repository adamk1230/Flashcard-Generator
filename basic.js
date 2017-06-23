var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var fs = require("fs");



//Creating our global variables
var count = 0;
var cards = [];
var right = 0;
var wrong = 0;

//Reads the basic.json file, then pushes it through the BasicCard constructor, and then pushes the cards into the cards array.
fs.readFile("basic.json", "utf8", function(error, data) {
			if (error) {
				return console.log(error);
			}
			// console.log(JSON.parse(data).cards[0]);
			var cardsArray = JSON.parse(data).cards;
			var card = [];

			for (var i = 0; i < cardsArray.length; i++) {
				card[i] = new BasicCard(cardsArray[i].question, cardsArray[i].answer);
				cards.push(card[i])
			}

			askBasic();


		});


//function to write question to node app
var askBasic = function(response){
	if (count < cards.length){
		inquirer.prompt([
		{
			type: "input",
			message: cards[count].front,
			name: "response"

		}
		]).then(function(answers) {
			if(answers.response == cards[count].back){
			console.log("You got the question right!");
			right++;
			console.log("Correct: " + right);
			console.log("Incorrect: " + wrong);
		}
			else{
				console.log("You got the question wrong!");
				console.log("The correct answer is " + cards[count].back);
				wrong++;
				console.log("Correct: " + right);
				console.log("Incorrect: " + wrong);
			}
		count++;
		askBasic();
	});
			

}
}

