const express = require('express')
const app = express();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "sanjaysamantra2@gmail.com",
        pass: "gdyh wndp wcgg vnym",
    },
});

async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'sanjaysamantra2@gmail.com', // sender address
        to: "emailashu18@gmail.com, vamsimyneni501@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
}




app.get('/sendEmail', (req, res) => {
    main().catch(console.error);
    res.send('Email Sent Successfully...')
})

app.listen(5000)