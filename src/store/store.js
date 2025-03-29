import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { productListReducer } from "./productListSlice";


export const store = configureStore({
    reducer: {
        cartState: cartReducer,
        productsState: productListReducer
    
    }
});