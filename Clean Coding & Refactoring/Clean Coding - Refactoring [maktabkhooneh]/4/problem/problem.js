function pushNotification(){
    console.log('pushNotification')
}

function sendSMS(){
    console.log('sendSMS')
}

function sendEmail(){
    console.log('sendEmail')
}

function register(message){
    // registered
    console.log('registered')

    sendEmail();
    sendSMS();
    pushNotification();
}

function buy(message){
    // bought
    console.log('bought')

    sendEmail();
    sendSMS();
    pushNotification();
}

buy();
register();
