import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemTocart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }
            else
            {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            state.totalQuantity++;
        },
        removeItemFromCart(state, action){
            const itemIdToRemove = action.payload;
            const existingItem = state.items.find(item => item.id === itemIdToRemove);
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== itemIdToRemove);
            }
            else
            {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            state.totalQuantity--;
        }
    }
});
export const cartActions = cartSlice.actions;

export default cartSlice;