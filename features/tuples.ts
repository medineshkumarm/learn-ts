const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//This is an array
const pepsi: (string | number | boolean)[] = ["brown", true, 40];

//This is a Tuple
const coke: [string, boolean, number] = ["black", true, 41];
// coke[0] = 100; //error

//type alias
type Drink = [string, boolean, number];
const fanta: Drink = ["orange", true, 35];

//why tuple is not use in realworld often?

const carSpecs: [number, number] = [300, 32423]; //tuple

//object
const carStats = {
  horsepower: 300,
  milesCovered: 32423,
};
