const sendNotification = require("./sendNotification");


function register(message){
    // registered
    console.log('registered')
    sendNotification();
}

module.exports = register