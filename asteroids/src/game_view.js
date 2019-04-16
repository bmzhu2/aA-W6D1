const Game = require('./game.js');

function GameView(ctx) {
  this.ctx = ctx;
  this.game = new Game(this.ctx);
}

GameView.prototype.start = function() {
  const refresh =  setInterval(() => {
    this.game.moveObjects();
    this.game.draw(this.ctx);
  }, 10);
}

module.exports = GameView;