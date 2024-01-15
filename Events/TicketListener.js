const TicketManager = require('./TicketManager')
const EmailService = require('./EmailService')

const ticketManager = new TicketManager(2);
const emailService = new EmailService();

ticketManager.on('ticketPurchased', (person, price, time) => {
    console.log(`${person} bought a ticket for ${price} on ${time}`);
    emailService.sendEmail(person);
});

ticketManager.on('noTicketAvailable', (err) => {
    console.error(err);
});


ticketManager.buy('person-1@gmail.com', 200)
ticketManager.buy('person-2@gmail.com', 300)
ticketManager.buy('person-3@gmail.com', 400)