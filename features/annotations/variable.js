var apples = 5;
var speed = "fast";
var hasName = true;
var nothing = null;
var nothingMuch = undefined;
// non primitives
//objects
var now = new Date();
//Array
var colors = ["red", "green", "blue"];
var myNumbers = [1, 2, 3];
var truths = [true, true, false];
//classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car;
car = new Car();
// Object literal
var point = {
    x: 10,
    y: 20,
};
//Function
var logNumber = function (i) {
    console.log(i);
};
//when to use annotations:
//1) Function that returns the 'any' type
var json = '{"x": 10,"y": 5}';
var co_ordinates = JSON.parse(json);
console.log(co_ordinates);
//2 when variable declaration and intialization are on different lines;
// will not show error => we have to solve it
var allColors = ["red", "green", "blue", "purple"];
var favColor;
for (var i = 0; i < allColors.length; i++) {
    if (allColors[i] == "green") {
        favColor = true;
    }
}
console.log(favColor);
