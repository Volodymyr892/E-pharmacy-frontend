import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./operation";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: {
            results: []
        },
        error: null,
        isLoading: false,
    },
    extraReducers: builder => {
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.isLoading = true;
            state.error = false;
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products = action.payload.data.data; 
            console.log("🚀 ~ .addCase ~  state.products:",  state.products)
        })
    }
})

export const productsReducer = productsSlice.reducer;