// Good
function shouldShowSpinner(){
    return fsm.state === "fetching" && isEmpty(listNode);
}
if (shouldShowSpinner()){
    // ...
}