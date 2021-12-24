// Bad
function makeBankAccount(){
    // ...
    return {
        balance: 0,
        // ...
    };
}

const account = makeBankAccount();
account.balance = 100;