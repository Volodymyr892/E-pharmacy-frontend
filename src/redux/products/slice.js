import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, productsId } from "./operation";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: {
            results: []
        },
        product: {},
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
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message; 
        })
        .addCase(productsId.pending, (state)=>{
            state.isLoading = true;
            state.error = false;
        })
        .addCase(productsId.fulfilled, (state, action)=>{ 
            state.isLoading = false;
            state.product = action.payload.data;
        })
    }
})

export const productsReducer = productsSlice.reducer;