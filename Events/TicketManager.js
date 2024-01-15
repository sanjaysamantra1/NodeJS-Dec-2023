const EventEmitter = require('events');

class TicketManager extends EventEmitter {
    constructor(ticketCount) {
        super();
        this.ticketCount = ticketCount;
    }
    buy(email, price) {
        if (this.ticketCount > 0) {
            this.ticketCount--;
            this.emit('ticketPurchased', email, price, new Date().toLocaleTimeString())
        } else {
            this.emit('noTicketAvailable', new Error('There are no more ticket available to purchase'))
        }
    }
}
module.exports = TicketManager;