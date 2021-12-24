const store = {};

function addOne(){
    store.counter = (store.counter || 0) + 1;
}

function addTen(){
    store.counter = (store.counter || 0) + 10;
}