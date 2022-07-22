import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            let item = action.payload;
            //console.log('item in addToCart: ', item);
            state.cartItems = [...state.cartItems, item];
            console.log('Elemento de carrito: ', state.cartItems);
        }
    }
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;