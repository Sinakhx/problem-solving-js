// Low Cohesion
class myInput {
    checkEmail = () => {}
    validateEmail = () => {}
    validatePhone = () => {}
    printValue = () => {}
    printAddress = () => {}
}

// High Cohesion
class MyInput {}

class Validator {
    validateEmail = () => {}
    validatePhone = () => {}
}

class Mailer {
    validateEmail = () => {}
}

class Printer {
    printValue = () => {}
    printAddress = () => {}
}