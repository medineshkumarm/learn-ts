const Person = {
  firstName: "Mike",
  lastName: "Tyson",
  age: 49,
  co_ordinates: {
    lat: 4,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

Person.age = 50;

console.log(Person);

//object destructing:
const { age }: { age: number } = Person;

const {
  co_ordinates: { lat, lng },
}: { co_ordinates: { lat: number; lng: number } } = Person;
