const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.on('greet', function (name, msg) {
    console.log(`Hello ${name} , ${msg}`)
});

eventEmitter.emit('greet', 'Asutosh', 'Good Morning!!');