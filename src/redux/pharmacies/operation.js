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