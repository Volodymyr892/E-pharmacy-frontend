import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://e-pharmacy-backend-w3td.onrender.com/";

export const getAuthHeader = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        setAuthHeaderToken(token);
    }
}

export const setAuthHeaderToken = token =>{
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const register = createAsyncThunk(
    "user/register",
    async(_, thunkApi)=>{
        try {
            const response = await axios.post("");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)