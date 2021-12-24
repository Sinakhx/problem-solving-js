const globalState = {};

// Not Local
function handleChange(){ globalState = false; }

// Change Locally
function handleChangeLocally(oldState){
    const state = false;
    return state;
}

const newVariable = handleChangeLocally(oldState)