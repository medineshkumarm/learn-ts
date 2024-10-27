var Person = {
    firstName: "Mike",
    lastName: "Tyson",
    age: 49,
    co_ordinates: {
        lat: 4,
        lng: 15,
    },
    setAge: function (age) {
        this.age = age;
    },
};
Person.age = 50;
console.log(Person);
//object destructing:
var age = Person.age;
console.log(age);
