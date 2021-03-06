"use strict";

var sum = function () {
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

Function.prototype.myBind = function (context) {
  var fn = this;
  var bindArguments = Array.prototype.slice.call(arguments, 1);

  return function () {
    return fn.apply(context, bindArguments.concat([].slice.call(arguments)));

  }
}

var Cat = function (name) {
  this.name = name;
};

Cat.prototype.sayName = function () {
  console.log("My name is " + this.name);
};

Cat.prototype.sayHelloAndName = function (hello) {
  console.log("My name is " + this.name + " " + hello);
}
var c = new Cat ("Cody");


function curriedSum (numArgs) {
  var numbers = [];
  function _curriedFunction (arg) {
    numbers.push(arg);
    if (numbers.length === numArgs) {
      var sum = 0;
      numbers.forEach(function(el){
        sum += el;
      });
      return sum;

    } else {
      return _curriedFunction;
    }



  }
  return _curriedFunction;
}

Function.prototype.curry = function (numArgs){
  var fn = this;
  var args = [];
  function _curriedFunction2(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      fn.apply(this, args);
    }
    else {
      return _curriedFunction2;
    }

  }
  return _curriedFunction2
}

var func = function (arg1, arg2, arg3) {
  console.log(arg1 + " " + arg2 + " " + arg3);
};
