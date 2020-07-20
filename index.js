var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "mail.righi-srl.it",
    port: 587,
    auth: {
        user: "righi-srl.it",
        pass: "Ri2020$Mom",
    }
});

var mailOptions = {
    from: 'info@righi-srl.it',
    to: 'info@righi-srl.it',
    subject: 'prova, sono Diego',
    text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
    html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer',
};

transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});