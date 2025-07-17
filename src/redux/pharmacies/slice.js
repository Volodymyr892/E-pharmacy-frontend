import { createSlice } from "@reduxjs/toolkit";
import { customerReviews, medicineStore, storesNearest } from "./operation.js";

const storesSlice = createSlice({
    name: "stores",
    initialState:{
        stores: {
            results: [],
            items: [],
            reviews: []
        },
        error: null,
        isLoading: false,
    },
    extraReducers: builder => {
        builder
        .addCase(storesNearest.pending, (state)=>{
            state.isLoading = true; 
            state.error = false;
        })
        .addCase(storesNearest.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.stores.results = action.payload.data;
        })
        .addCase(storesNearest.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error?.message || "Something went wrong";
        })

        .addCase(medicineStore.pending, (state)=>{
            state.isLoading = true;
            state.error = false;
        })
        .addCase(medicineStore.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.stores.items = action.payload.data;
            // console.log("🚀 ~ .addCase ~ state.stores.items:", state.stores.items)
        })
        .addCase(medicineStore.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error?.message || "Failed to fetch medicine store data";
        })

        .addCase(customerReviews.pending, (state)=>{
            state.isLoading = true;
            state.error = false;
        })
        .addCase(customerReviews.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.stores.reviews = action.payload.data;
            // console.log("🚀 ~ .addCase ~ state.stores.reviews :", state.stores.reviews )
        })
    }
})

export const storesReducer = storesSlice.reducer