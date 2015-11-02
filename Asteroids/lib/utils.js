
(function (){
  var context = canvas.getContext("2d");

  if (typeof Asteroids === "undefined"){
    Asteroids = {};
  }
  var Util = Asteroids.Util = function () {
  }


  Util.prototype.inherits = function(ParentClass, ChildClass){
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  }

  Util.prototype.randomVec = function (magnitude) {
    var x = Math.random()*10;
    var y = Math.sqrt(magnitude * magnitude - x*x);
    return [x, y];
  }





})();
