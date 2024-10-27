// const tata = {
//   model: "tiago",
//   year: "2020",
//   broken: true,
// };

// // long type annotations
// const printVehicle = (vehicle: {
//   model: string;
//   year: string;
//   broken: boolean;
// }): void => {
//   console.log(`Model : ${vehicle.model}`);
//   console.log(`Year : ${vehicle.year}`);
//   console.log(`Broken : ${vehicle.broken}`);
// };
// printVehicle(tata);

// // fixing long type annotations
interface Vehicle {
  model: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const tata: Vehicle = {
  model: "tiago",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Model name is ${this.model}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Model : ${vehicle.model}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken : ${vehicle.broken}`);
  console.log(`Summary : ${vehicle.summary()}`);
};
// printVehicle(tata);

//more generic way of interface:
interface Reportable {
  summary(): string;
}

const transaction = {
  amount: 200,
  date: new Date().toDateString(),
  item: "ice cream",
  summary(): string {
    return `New transaction made for : ${this.amount} on ${this.date} to buy ${this.item}`;
  },
};


/**
 * Note : code Reuse with interfaces:
 * let's say we have a new object drink
 * So both Objects 'drink' and 'transaction' utilise the interface 'Reportable'
 * which enables code reusability
 */
const drink = {
  color: "brown",
  sugar: 40,
  summary(): string {
    return `My drink is ${this.color} colored and it contains ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(transaction);
printSummary(drink);
