var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var fs = require("fs");



//Creating our global variables
var count = 0;
var cards = [];

//Creating a new constructor function for BasicCard
// function BasicCard (front, back){
// 	this.front = front;
// 	this.back = back;
// };
// var mydata = require('mydata.json')
// var mydata = []

// //Creating a new variable for a new card. This has the first question and first answer
// var card1 = new BasicCard("Who invented peanut butter?", "George Washington Carver");
// var card2 = new BasicCard("Question question question TWO", "Answer");
// var card3 = new BasicCard("What is the best way to code?", "Janky");
// var card4 = new BasicCard("What is my favorite animal?", "Sloths");

 
// cards.push(card1);
// cards.push(card2);
// cards.push(card3);
// cards.push(card4);

fs.readFile("basic.JSON", "utf8", function(error, data) {
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





var askBasic = function(){
	if (count < 4){
		inquirer.prompt([
		{
			type: "input",
			message: cards[count].front,
			name: "response"

		}
		]).then(function(answers) {
			if(answers.response == cards[count].back){
			console.log("You got the question right!");
		}
			else{
				console.log("You got the question wrong!");
			}
		count++;
		askBasic();
	});
			

}
}

