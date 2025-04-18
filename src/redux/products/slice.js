import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {}
})

export const productsReducer = productsSlice.reducer;