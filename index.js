const nodemailer = require('nodemailer');

// Create a transporter with your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'vectagraphics07@gmail.com',
        pass: '<password?>'
    }
});

// Function to send emails
const sendEmail = (subject, body, toEmails) => {
    const mailOptions = {
        from: 'vectagraphics07@gmail.com',
        to: toEmails.join(', '),
        subject: subject,
        text: body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error('Error:', error);
        }
        console.log('Email sent:', info.response);
    });
};

// Example usage
const subject = 'Test Email';
const body = 'This is a test email sent from a Node.js script.';
const toEmails = ['Shivansh0507@gmail.com', 'Shivansh0301@gmail.com', 'vectagraphics07@gmail.com', 'wankhede.tech@gmail.com'];

sendEmail(subject, body, toEmails);
