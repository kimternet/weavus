import api from "@/utill/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk("auth/signup",
    async (useActionData, { rejectWithValue }) => {
        try {
            const res = await api.post("/auth/signup", userData)
            localStorage.setItem("jwt", res.data.data.jwt)
            console.log("signup success", res.data)
            return res.data
        } catch (error) {
            console.log("signup error", error)
            return rejectWithValue(error.response?.data?.message || "signup failed");
        }
    }
);


export const login = createAsyncThunk("auth/signup",
    async (loginData, { rejectWithValue }) => {
        try {
            const res = await api.post("/auth/login", loginData)
            localStorage.setItem("jwt", res.data.data.jwt)
            console.log("login success", res.data)
            return res.data
        } catch (error) {
            console.log("login error", error)
            return rejectWithValue(error.response?.data?.message || "signup failed");
        }
    }
);
