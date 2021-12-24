const pushNotification = require("./pushNotification");
const sendEmail = require("./sendEmail");
// const sendSMS = require("./sendSMS");

function sendNotification(){
    sendEmail();
    // sendSMS();
    pushNotification();
}

module.exports = sendNotification