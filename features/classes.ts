// basic inheritance:

//class Method modifiers

class Vehicle {
  public drive(): void {
    console.log("zeeng zeeng");
  }
  //private : Property 'honk' is private and only accessible within class 'Vehicle'
  //protected: Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses.ts
  protected honk() {
    console.log("beep beep");
  }
}
const vehicle = new Vehicle();
//not possible for private and protected methods
// vehicle.honk();

class Car extends Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicleObj = new Vehicle();
vehicleObj.drive();
// vehicleObj.honk(); // not possible

const carObj = new Car();
carObj.startDrivingProcess();
// carObj.honk(); //not possible

// Fields in classes
class Fruit {
  //   color: string;
  //   constructor(color: string) {
  //     this.color = color;
  //   }

  constructor(public color: string) {} // shorthand for the above code
}

const fruit = new Fruit("red");
console.log(fruit.color);

//Fields with Inheritance:
class Apple extends Fruit {
  constructor(public wheels: number, color: string) {
    super(color);
  }
}

const apple = new Apple(4, "green");
console.log(apple);