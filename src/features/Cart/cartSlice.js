const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: []
    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },

        hideMiniCart(state) {
            state.showMiniCart = false;
        },

        addToCart(state, action) {
            // newItem = { id, product, quantity }
            const newItem = action.payload;
            const indexCartItem = state.cartItems.findIndex(x => x.id === newItem.id);

            if (indexCartItem >= 0) {
                // increate quantity
                state.cartItems[indexCartItem].quantity = state.cartItems[indexCartItem].quantity + newItem.quantity;
            } else {
                // add to cart
                state.cartItems.push(newItem);
            }
        },

        setQuantity(state, action) {
            const { id, quantity } = action.payload; // id, quantity
            // check if product is available in cart
            const indexItem = state.cartItems.findIndex(x => x.id === id);
            if (indexItem >= 0) {
                state.cartItems[indexItem].quantity = quantity;
            }
        },

        removeItemCart(state, action) {
            const idNeedToRemove = action.payload;
            state.cartItems = state.cartItems.filter(x => x.id !== idNeedToRemove);
        }

    }
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeItemCart } = actions;
export default reducer;