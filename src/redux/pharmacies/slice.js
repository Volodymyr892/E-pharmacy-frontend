import { createSlice } from "@reduxjs/toolkit";

const storesSlice = createSlice({
    name: "stores",
    initialState:{
        stores: {
            results:[]
        },
        error: null,
        isLoading: false,
    },
})

export const storesReducer = storesSlice.reducer