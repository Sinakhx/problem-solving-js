// Good
function makeBankAccount(){
    let balance = 0;
    
    const getBalance = () => {
        return balance;
    }

    const setBalance = (newBalance) => {
        balance = newBalance;
    }

    return {
        getBalance,
        setBalance
    };
}

const account = makeBankAccount();
account.setBalance(100);
account.getBalance();