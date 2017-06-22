function ClozeCard (text, cloze){

	if (!text.includes(cloze)){
		console.log("Error: Cloze does not appear within text.")
	}

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");

};

module.exports = ClozeCard;