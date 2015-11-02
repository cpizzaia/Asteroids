(function (){

  if (typeof Asteroids === "undefined"){
    Asteroids = {};
  }


  var COLOR = "black";
  var RADIUS = 10;


  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    Asteroids.MovingObject.call(this, {pos: pos, vel: Asteroids.Util.prototype.randomVec(10),game: game});
    this.color = COLOR;
    this.radius = RADIUS;
  }

  window.Asteroids.Util.prototype.inherits(Asteroids.MovingObject, Asteroids.Asteroid)






})();
