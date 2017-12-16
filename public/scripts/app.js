'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  // arguments no longer accessible
  // console.log(arguments);
  return a + b;
};

console.log(add(56, 1));

// this keyword - no longer bound

var user = {
  name: 'Mikael',
  cities: ['Singapore', 'Jakarta'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

console.log(user.printPlacesLived());

var multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 1264,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
