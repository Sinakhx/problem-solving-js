const store = {};

// No Coupling
function aNoCoupling() { store.foo = 'x' };
function bNoCoupling() { store.bar = 'y' };
aNoCoupling();
bNoCoupling();

// Tight Coupling (bad)
function aTightCoupling(){
    store.counter = (store.counter || 0) + 1;
}

function bTightCoupling(){
    store.counter = (store.counter || 0) + 10;
}

// Loose Coupling
function aLooseCoupling(store){
    return Object.assign({}, store, { foo: 'x' });
}

function bLooseCoupling(store){
    return Object.assign({}, store, { foo: 'y' });
}

const store0 = {};
const store1 = aLooseCoupling(store0);
const store2 = aLooseCoupling(store1);