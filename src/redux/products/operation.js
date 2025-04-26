import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// e-pharmacy-backend-w3td.onrender.com/

axios.defaults.baseURL = "https://e-pharmacy-backend-w3td.onrender.com/";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async(_, thunkApi)=>{
        try {
            const response = await axios.get('api/products')
            // console.log("🚀 ~ async ~ response:", response)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)