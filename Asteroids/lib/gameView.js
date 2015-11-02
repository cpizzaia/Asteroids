(function () {
  if (typeof Asteroids === "undefined"){
    Asteroids = {};
  }


  var GameView = Asteroids.GameView = function (game) {
    this.game = game;
    this.ctx = document.getElementById('canvas').getContext('2d');

  };


  GameView.prototype.start = function () {
    setInterval(this.game.moveObjects.bind(this.game), 20);
    setInterval(this.game.draw.bind(this.game), 20);
  }


})();
