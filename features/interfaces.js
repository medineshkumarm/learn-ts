// const tata = {
//   model: "tiago",
//   year: "2020",
//   broken: true,
// };
var tata = {
    model: "tiago",
    year: new Date(),
    broken: true,
    summary: function () {
        return "Model name is ".concat(this.model);
    },
};
var printVehicle = function (vehicle) {
    console.log("Model : ".concat(vehicle.model));
    console.log("Year : ".concat(vehicle.year));
    console.log("Broken : ".concat(vehicle.broken));
    console.log("Summary : ".concat(vehicle.summary()));
};
var transaction = {
    amount: 200,
    date: new Date().toDateString(),
    item: "ice cream",
    summary: function () {
        return "New transaction made for : ".concat(this.amount, " on ").concat(this.date, " to buy ").concat(this.item);
    },
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(transaction);
