var IOUtil = require('./IOUtil').IOUtil;
var Game = require('./GameLogic').Game

let game = new Game()

console.log("Welcome to the Guessing Game. Enter a number between 1 and 100");
IOUtil.start(function(text){
		game.play(text.trim())
		console.log(game.message);
		if(game.gameOver)
			IOUtil.stop()
});
