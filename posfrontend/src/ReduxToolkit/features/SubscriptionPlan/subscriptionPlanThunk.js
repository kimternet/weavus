import api from "@/utill/api";
import { getAuthHeaders } from "@/utill/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createSubscriptionPlan = createAsyncThunk(
    "/subscriptionPlan/create",
    async (plan, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();
            const res = await api.post(`/api/super-admin/subscription-plans`,
                plan, {
                headers,
            });

            console.log("create subscription plan success", res.data)
            return res.data;
        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message);
        }
    }
);

export const updateSubscriptionPlan = createAsyncThunk(
    "/subscriptionPlan/update",
    async ({ id, plan }, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();
            const res = await api.put(`/api/super-admin/subscription-plans/${id}`,
                plan, {
                headers,
            });

            console.log("update subscription plan success", res.data)
            return res.data;
        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message);
        }
    }
);

export const getAllSubscriptionPlans = createAsyncThunk(
    "/subscriptionPlan/getAll",
    async (_, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();
            const res = await api.get(`/api/super-admin/subscription-plans`,
                {
                    headers,
                });

            console.log("get all subscription plan success", res.data)
            return res.data;
        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message);
        }
    }
);

export const getSubscriptionPlanById = createAsyncThunk(
    "/subscriptionPlan/getById",
    async (id, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();
            const res = await api.get(`/api/super-admin/subscription-plans/${id}`,
                {
                    headers,
                });

            console.log("get subscription plan by Id success", res.data)
            return res.data;
        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message);
        }
    }
);

export const deleteSubscriptionPlan = createAsyncThunk(
    "/subscriptionPlan/delete",
    async (id, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();
            const res = await api.delete(`/api/super-admin/subscription-plans/${id}`,
                {
                    headers,
                });

            console.log("delete subscription plan success", res.data)
            return res.data;
        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message);
        }
    }
);