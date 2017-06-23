var fs = require("fs");
var ary = [];

fs.readFile("basic.JSON", "utf8", function(error, data) {
			if (error) {
				return console.log(error);
			}
			// console.log(JSON.parse(data).cards[0]);
			var cardsArray = JSON.parse(data).cards;
			var card = [];

			for (var i = 0; i < cardsArray.length; i++) {
				card[i] = cardsArray[i];
				ary.push(card[i]);
			}

			console.log(ary);


		});

// console.log(require("./basic"));

