const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.on('customEvent', function () {
    console.log('customEvent Triggered')
});

eventEmitter.emit('customEvent');