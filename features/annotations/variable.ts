let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothing: null = null;
let nothingMuch: undefined = undefined;

// non primitives

//objects
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//classes
class Car {}

let car: Car;
car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
// here we are annotating the variable and return type
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations:

//1) Function that returns the 'any' type

const json = '{"x": 10,"y": 5}';

const co_ordinates: { x: number; y: number } = JSON.parse(json);
console.log(co_ordinates);

//2 when variable declaration and intialization are on different lines;
// will not show error => we have to solve it
const allColors = ["red", "green", "blue", "purple"];

// TypeScript will throw an error because favColor is
//declared as a string but may not be assigned any value if the condition is never met.
let favColor: string = "";

for (let i = 0; i < allColors.length; i++) {
  if (allColors[i] === "green") {
    favColor = "green";
  }
}
console.log(favColor);

//3) Variable whose type cannot be inferred correctly:

let nums = [-1, -4, 9, -30];
// let numAboveZero = false;
let numAboveZero: boolean | number = false;  // single variable that has different types

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    numAboveZero = nums[i]; //Type 'number' is not assignable to type 'boolean'
  }
}


