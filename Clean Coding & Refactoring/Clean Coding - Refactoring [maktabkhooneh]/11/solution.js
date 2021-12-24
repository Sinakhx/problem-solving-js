// Good
const addItemToCart = (cart, item) => {
    return [...cart, { item, date: Date.now() }];
}