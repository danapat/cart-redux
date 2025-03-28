import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },

    reducers: {
        add(state, action) {
            const founded = state.cartList.filter(item => item.product.id === action.payload.id);
            let updatedCartList;

            if (founded.length > 0) {
                updatedCartList = state.cartList.map(item =>
                    item.product.id === action.payload.id
                        ? { ...item, count: item.count < action.payload.amountInStock ? item.count + 1 : item.count }
                        : item
                );
            } else {
                updatedCartList = state.cartList.concat({ count: 1, product: action.payload });
            }
            let total = 0;
            updatedCartList.forEach(item => {
                total = total + item.count * item.product.price;
            });
            return { ...state, total: total, cartList: updatedCartList };
        },
        remove(state, action) {
            const updatedCartList = state.cartList
                .map(item =>
                    item.product.id === action.payload.id
                        ? {
                            ...item,
                            count: item.count > 0 ? item.count - 1 : 0
                        }
                        : item
                )
                .filter(item => item.count > 0);
            let total = 0;
            updatedCartList.forEach(item => {
                total = total + item.count * item.product.price;
            });
            return { ...state, total: total, cartList: updatedCartList };
        }
    }
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;