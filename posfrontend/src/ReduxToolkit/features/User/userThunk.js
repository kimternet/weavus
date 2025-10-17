import api from "@/utill/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";

export const getUserProfile = createAsyncThunk("user/getProfile",
    async (token, { isRejectedWithValue }) => {
        try {
            const res = await api.get("/api/users/profile", {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log("get user Profile success", res.data)
            return res.data;
        } catch (error) {
            console.log("error", error?.response?.data);
            return isRejectedWithValue(
                error?.response?.data?.message || "Failed to fetch profile"
            );
        }
    }
);


export const getAllCustomer = createAsyncThunk("user/getCustomers",
    async (token, { isRejectedWithValue }) => {
        try {
            const res = await api.get("/api/users/customer", {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log("get customers success", res.data)
            return res.data;
        } catch (error) {
            console.log("error", error?.response?.data);
            return isRejectedWithValue(
                error?.response?.data?.message || "Failed to fetch Customers"
            );
        }
    }
);

export const getAllCashier = createAsyncThunk("user/getCashiers",
    async (token, { isRejectedWithValue }) => {
        try {
            const res = await api.get("/api/users/cashier", {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log("get cashiers success", res.data)
            return res.data;
        } catch (error) {
            console.log("error", error?.response?.data);
            return isRejectedWithValue(
                error?.response?.data?.message || "Failed to cashiers"
            );
        }
    }
);

export const getUserById = createAsyncThunk("user/getById",
    async (userId, { isRejectedWithValue }) => {
        try {
            const res = await api.get(`/api/users/${userId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
            });
            console.log("get user by id success", res.data)
            return res.data;
        } catch (error) {
            console.log("error", error?.response?.data);
            return isRejectedWithValue(
                error?.response?.data?.message || "Failed to fetch user by id"
            );
        }
    }
);

export const logout = createAsyncThunk("user/logout",
    async (_, { isRejectedWithValue }) => {
        try {
            localStorage.removeItem("jwt")
        } catch (error) {
            console.log("error", error);
            return isRejectedWithValue("Failed to logout"
            );
        }
    }
);