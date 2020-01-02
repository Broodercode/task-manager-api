const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'c_schiebelbein@hotmail.com',
        subject: `Thanks for considering me ${name}`,
        text: `Welcome to the app, ${name}.  Let me know how you get along with the application.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'c_schiebelbein@hotmail.com',
        subject: `Goodbye ${name} :(`,
        text: `Goodbye ${name}, I am sorry to see you go.  Please let me know if there is anything I could have done to improve your experience.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}