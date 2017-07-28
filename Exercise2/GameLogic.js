class Game {
    constructor(){
      this.target = Math.floor(Math.random()*100)
      this.attempts=0;
      this.message = ""
		  this.gameOver = false
    }
    play(guess){
      this.attempts += 1
		if(guess > this.target)
			this.message = "Aim Lower"
		else if(guess < this.target)
			this.message = "Aim Higher"
		else{
			this.message = `You've got it in ${this.attempts} attempts`
			this.gameOver = true
		}
    }
}
module.exports.Game = Game
