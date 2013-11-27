

var getArticleText = function (title, onComplete) {
	var page = new Morebits.wiki.page('Փետրվար_18');

	page.load(function () {
		var text = page.getPageText();
		onComplete(text);
	});

};

var showText = function(){
	var processText = function (text) {
		addPerson(text, 1);
	};

	getArticleText("February", processText);

}