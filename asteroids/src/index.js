const MovingObject = require('./moving_object.js');
const GameView = require('./game_view.js');
window.MovingObject = MovingObject;
console.log("Webpack is working!")
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');

  const view = new GameView(ctx);
  view.start();
});


