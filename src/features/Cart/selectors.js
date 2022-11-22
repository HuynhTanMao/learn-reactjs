import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state) => state.cart.cartItems;

console.log(cartItemSelector);

// Count number of product in cart
export const cartItemsCountSelector = createSelector(cartItemSelector, (cartItem) =>
    cartItem.reduce((count, item) => count + item.quantity, 0)
);

// Total cart item

export const totalCartItem = createSelector(cartItemSelector, (cartItem) =>
    cartItem.reduce((total, item) => total + item.product.salePrice * item.quantity, 0)
);