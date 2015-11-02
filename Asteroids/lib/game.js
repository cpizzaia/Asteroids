(function () {
  if (typeof Asteroids === "undefined"){
    Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.asteroids = [];
  }

  var canvas = document.getElementById('canvas');

  var DIM_X = canvas.width;
  var DIM_Y = canvas.height;
  var NUM_ASTEROIDS = 1;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < NUM_ASTEROIDS; i++){
      var pos = this.randomPosition();
      this.asteroids.push(new Asteroids.Asteroid(pos));
    }
  }


  Game.prototype.randomPosition = function () {
    return [Math.floor(Math.random() * DIM_X), Math.floor(Math.random() * DIM_Y)]
  }



})();
