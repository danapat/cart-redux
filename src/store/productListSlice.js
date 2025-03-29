import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
    name: "productList",
    initialState: {
        products: [
            {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png", "amountInStock": 5},
            {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png", "amountInStock": 5},
            {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png", "amountInStock": 5},
            {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/1004.png", "amountInStock": 5},
            {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1005.png", "amountInStock": 5},
            {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png", "amountInStock": 5}
          ]
       },

    reducers: {
        decreaseAmount(state, action) {
            const founded = state.products.filter(item => item.id === action.payload.id);
            let updatedProducts;

            if (founded.length > 0) {
                updatedProducts = state.products.map(item =>
                    item.id === action.payload.id
                        ? { ...item, amountInStock: item.amountInStock - 1}
                        : item
                );
            }
            return { ...state, products: updatedProducts };
        },
        increaseAmount(state, action) {
            const founded = state.products.filter(item => item.id === action.payload.id);
            let updatedProducts;

            if (founded.length > 0) {
                updatedProducts = state.products.map(item =>
                    item.id === action.payload.id
                        ? { ...item, amountInStock: item.amountInStock + 1}
                        : item
                );
            }
            return { ...state, products: updatedProducts };
        }
    }
});

export const { decreaseAmount, increaseAmount } = productListSlice.actions;
export const productListReducer = productListSlice.reducer;