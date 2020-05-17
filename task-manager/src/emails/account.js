const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const msg = {
    to: 'yvan.lopez.it@gmail.com',
    from: 'yvan.lopez.it@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
}

sgMail.send(msg)

// sgMail.send(msg).then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//         console.error(error.response.body)
//     }
// });