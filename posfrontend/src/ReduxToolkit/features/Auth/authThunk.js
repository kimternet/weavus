import api from "@/utill/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk("auth/signup",
    async (userData, { rejectWithValue }) => {
        try {
            const res = await api.post("/api/auth/signup", userData)
            localStorage.setItem("jwt", res.data.data.jwt)
            console.log("signup success", res.data)
            return res.data
        } catch (error) {
            console.log("signup error", error)
            return rejectWithValue(error.response?.data?.message || "signup failed");
        }
    }
);


// export const login = createAsyncThunk("auth/login",
//     async (loginData, { rejectWithValue }) => {
//         try {
//             const res = await api.post("/api/auth/login", loginData);
//             localStorage.setItem("jwt", res.data.jwt);
//             console.log("login success", res.data);
//             return res.data;
//         } catch (error) {
//             console.log("login error", error);
//             return rejectWithValue(error.response?.data?.message || "login failed");
//         }
//     }
// );
export const login = createAsyncThunk("auth/login",
    async (loginData, { rejectWithValue }) => {
        try {
            // ✅ 경로 수정: /auth/login → /api/auth/login
            const res = await api.post("/api/auth/login", loginData);

            // ✅ signup과 구조 맞춰서 확인 필요 (예: res.data.data.jwt 인지)
            localStorage.setItem("jwt", res.data.jwt);
            console.log("login success", res.data);
            return res.data;
        } catch (error) {
            console.log("login error", error);
            return rejectWithValue(error.response?.data?.message || "login failed");
        }
    }
);