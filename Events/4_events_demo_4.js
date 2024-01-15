const events = require("events");
const event = new events.EventEmitter();

const cars = ['tata', 'honda', 'toyota']

event.on("add", (car) => {
    cars.push(car);
    console.log(cars)
});
event.on("deleteLast", (car) => {
    cars.pop();
    console.log(cars)
});
event.on("deleteFirst", (car) => {
    cars.shift();
    console.log(cars)
});

event.emit('add', 'maruti');
event.emit('deleteFirst');