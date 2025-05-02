import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://e-pharmacy-backend-w3td.onrender.com/";


export const storesNearest = createAsyncThunk(
    "stores/storesNearest",
    async(_,thunkApi)=>{
        try {
            const response = await axios.get("/api/stores/nearest");
            return response.data; 
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const medicineStore = createAsyncThunk(
    "stores/medicaneStores",
    async(_,thunkApi)=>{
        try {
            const response = await axios.get("api/stores");
            console.log("🚀 ~ async ~ response:", response)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
export const customerReviews =createAsyncThunk(
    "store/customerReviews",
    async(_,thunkApi)=>{
        try {
            const response = await axios.get("api/customer-reviews");
            console.log("🚀 ~ async ~ response.data:", response.data)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)