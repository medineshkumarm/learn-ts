const carMakers = ["ford", "tata", "toyato"];
const dates = [new Date(), new Date()];

const carsBy: string[][] = [];
const carsByMake = [["fordEco"], ["tata tiago"], ["toyato innova"]];

//help with type inference:
const car = carMakers[0]; //automatically infered as string;
const myCar = carMakers.pop();

// Prevent incompatible values
//Argument of type 'number' is not assignable to parameter of type 'string'.
// carMakers.push(200);

//Help with 'map'
carMakers.map((car: string) => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2024-27-10");
importantDates.push(new Date());
// importantDates.push(222); //error
