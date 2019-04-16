const Asteroid = require('./asteroid.js');

function Game(ctx) {
  this.ctx = ctx;
  this.dim_x = 1000;
  this.dim_y = 1000;
  this.num_asteroids = 5;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  
  for (let i = 0; i < this.num_asteroids; i++) {
    this.asteroids.push(new Asteroid({
      pos: this.randomPosition()
    }))
  }
}

Game.prototype.randomPosition = function() {
  pos_x = Math.floor(Math.random() * this.dim_x) + 1;
  pos_y = Math.floor(Math.random() * this.dim_y) + 1;
  return [pos_x, pos_y];
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.dim_x, this.dim_y);
  this.asteroids.forEach((asteroid) => {
    asteroid.draw(ctx);
  });
}

Game.prototype.moveObjects = function() {
  this.asteroids.forEach((asteroid) => {
    asteroid.move();
  });
}

module.exports = Game;