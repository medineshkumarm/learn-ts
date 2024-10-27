// basic inheritance:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class Method modifiers
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log("zeeng zeeng");
    };
    //private : Property 'honk' is private and only accessible within class 'Vehicle'
    //protected: Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses.ts
    Vehicle.prototype.honk = function () {
        console.log("beep beep");
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
//not possible for private and protected methods
// vehicle.honk();
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive = function () {
        console.log("chugga chugga");
    };
    Car.prototype.startDrivingProcess = function () {
        this.drive();
        this.honk();
    };
    return Car;
}(Vehicle));
var vehicleObj = new Vehicle();
vehicleObj.drive();
// vehicleObj.honk(); // not possible
var carObj = new Car();
carObj.startDrivingProcess();
// carObj.honk(); //not possible
// Fields in classes
var Fruit = /** @class */ (function () {
    //   color: string;
    //   constructor(color: string) {
    //     this.color = color;
    //   }
    function Fruit(color) {
        this.color = color;
    } // shorthand for the above code
    return Fruit;
}());
var fruit = new Fruit("red");
console.log(fruit.color);
//Fields with Inheritance:
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    return Apple;
}(Fruit));
var apple = new Apple(4, "green");
console.log(apple);
