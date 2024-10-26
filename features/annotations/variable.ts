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
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
