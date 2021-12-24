const pushNotification = require("./pushNotification");
const sendEmail = require("./sendEmail");
// const sendSMS = require("./sendSMS");

function register(message){
    // registered
    console.log('registered')

    sendEmail();
    // sendSMS();
    pushNotification();
}

module.exports = register