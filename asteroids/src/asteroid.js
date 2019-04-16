const Util = require("./util.js");
const MovingObject = require("./moving_object.js");


function Asteroid(options) {
  let ast_options = {
    pos: options['pos'],
    color: 'gray',
    radius: 25,
    vel: Util.randomVec(1)
  }
  MovingObject.call(this, ast_options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;