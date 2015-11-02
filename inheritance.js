Function.prototype.inherits = function (parent) {
  var Surrogate = function () {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this
}

function MovingObject () {};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);

MovingObject.prototype.speed = function (vx)  {
  console.log("Speed is " + vx);
};

Ship.prototype.shipSpeed = function (vx) {
  console.log("Ship speed is " + vx);
};
