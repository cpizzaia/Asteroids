
(function (){
  var context = canvas.getContext("2d");

  if (typeof Asteroids === "undefined"){
    Asteroids = {};
  }
  var MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  }

  MovingObject.prototype.draw = function (radius, pos) {
    context.beginPath();
    context.arc(pos[0], pos[1], radius, 0, 2*Math.PI);
    context.stroke();
  }

  MovingObject.protoype.move = function (){
    this.pos = [this.vel[0] + this.pos[0], this.vel[1] + this.pos[1];
  }





})();
