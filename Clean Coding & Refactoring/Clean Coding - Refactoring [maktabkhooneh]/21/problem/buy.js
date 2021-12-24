const pushNotification = require("./pushNotification");
const sendEmail = require("./sendEmail");
// const sendSMS = require("./sendSMS");

function buy(message){
    // bought
    console.log('bought')

    sendEmail();
    // sendSMS();
    pushNotification();
}

module.exports = buy