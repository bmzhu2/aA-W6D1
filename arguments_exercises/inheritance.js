Function.prototype.inherits = function(parent) {
  function Surrogate() {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject() {
  this.velocity = 0;
 }
 MovingObject.prototype.move = function(dx, dy) {
   //movement
 }

function Ship() {
  MovingObject.call(this);
 }
Ship.inherits(MovingObject);
Ship.prototype.shoot = function () {
  console.log("shooting");
}


function Asteroid() {
  MovingObject.call(this);
 }
Asteroid.inherits(MovingObject);
Asteroid.prototype.crash = function () {
  //crashes
}