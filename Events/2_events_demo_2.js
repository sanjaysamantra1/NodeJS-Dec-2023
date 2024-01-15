const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.on('sayHi', function () {
    console.log('Hi Asutosh')
});
eventEmitter.addListener('sayHi', function () {
    console.log('Hi Vamsi')
});

eventEmitter.emit('sayHi');