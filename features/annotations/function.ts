// Annotation around functions:

const add = (a: number, b: number) => {
  return a + b;
};

const sub = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

//function return values:

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (todaysWeather: { date: Date; weather: string }) => {
  console.log(todaysWeather.date);
  console.log(todaysWeather.weather);
};

//first {} is argument
// second {} is annotation
const logWeather2 = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};
