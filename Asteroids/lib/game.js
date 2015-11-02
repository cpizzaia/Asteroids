(function () {
  if (typeof Asteroids === "undefined"){
    Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    this.context = document.getElementById('canvas').getContext('2d');
    this.addAsteroids();
  }

  var canvas = document.getElementById('canvas');
  var DIM_X = canvas.width;
  var DIM_Y = canvas.height;
  var NUM_ASTEROIDS = 100;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < NUM_ASTEROIDS; i++){
      do  {
        var pos = this.randomPosition();
        var asteroid = new Asteroids.Asteroid(pos);
      } while (this.asteroidAlreadyOnField(asteroid));
        this.asteroids.push(asteroid);
    }
  }

  Game.prototype.asteroidAlreadyOnField = function (asteroid) {
    if (this.asteroids.length === 0) {
      return false;
    }

    for (var i = 0; i < this.asteroids.length; i++) {
      if (this.distance(this.asteroids[i], asteroid) <= (this.asteroids[i].radius + asteroid.radius)){
        return true;
      }
    }
    return false;
  }

  Game.prototype.distance = function (asteroid1, asteroid2) {
    pos1 = asteroid1.pos;
    pos2 = asteroid2.pos;

    return Math.sqrt(Math.pow((pos1[0] - pos2[0]), 2) + Math.pow((pos1[1] - pos2[1]), 2));
  }


  Game.prototype.draw = function() {
    this.context.clearRect(0, 0, 800, 600);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw();
    }
  }

  Game.prototype.randomPosition = function () {
    return [Math.floor(Math.random() * DIM_X), Math.floor(Math.random() * DIM_Y)]
  }

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (el) {

      el.move();
    })
    this.draw();
  }

  g = new Game();
  // asteroid1 =  new Asteroids.Asteroid([100, 100]);
  // asteroid2 =  new Asteroids.Asteroid([200, 200]);
  // asteroid3 =  new Asteroids.Asteroid([100, 100]);
  // g.asteroids.push(asteroid1);
  // g.asteroids.push(asteroid2);
  // console.log(g.distance(asteroid1, asteroid2));
  // console.log(g.asteroidAlreadyOnField(asteroid3));



})();
