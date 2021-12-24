const sendNotification = require("./sendNotification");

function buy(message){
    // bought
    console.log('bought')
    sendNotification();
}

module.exports = buy