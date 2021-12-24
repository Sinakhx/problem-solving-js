// Bad
const addItemToCart = (cart, item) => {
    cart.push({ item, date: Date.now() });
}