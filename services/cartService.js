const cartData = require('../data/cartData');

async function getCart(userId){
    return await cartData.getCartData(userId);
}

async function updateCart(userId,cartItems)
{
    if(!Array.isArray(cartItems))
    {
        throw new Error('Cart item must be an array')
    }
    await cartData.updateCartData(userId,cartItems);
}

module.exports = {
    getCart,
    updateCart
}