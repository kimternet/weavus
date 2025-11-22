import api from "@/utill/api";
import { getAuthHeaders } from "@/utill/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getStoreOverview = createAsyncThunk(
    "storeAnalytics/getStoreOverview",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders()
            const res = await api.get(`/api/store/analytics/${id}/overview`,
                { headers }
            )
            console.log("get store overview", res.data)
            return res.data
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)

export const getSalesTrends = createAsyncThunk(
    "storeAnalytics/getSalesTrends",
    async ({ storeAdminId, period }, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders()
            const res = await api.get(`/api/store/analytics/${storeAdminId}/sales-trends?period=${period}`,
                { headers }
            )
            console.log("sales trends success", res.data)
            return res.data
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)

export const getMonthlySales = createAsyncThunk(
    "storeAnalytics/getMonthlySales",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders()
            const res = await api.get(`/api/store/analytics/${id}/sales/monthly`,
                { headers }
            )
            console.log("get monthly sales", res.data)
            return res.data
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)

export const getDailySales = createAsyncThunk(
    "storeAnalytics/getDailySales",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders()
            const res = await api.get(`/api/store/analytics/${id}/sales/daily`,
                { headers }
            )
            console.log("get daily sales", res.data)
            return res.data
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)

export const getSalesByCategory = createAsyncThunk(
    "storeAnalytics/getSalesByCategory",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders()
            const res = await api.get(`/api/store/analytics/${id}/sales/category`,
                { headers }
            )
            console.log("get sales By category", res.data)
            return res.data
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)

export const getSalesByPaymentMethod = createAsyncThunk(
    "storeAnalytics/getSalesByPaymentMethod",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders()
            const res = await api.get(`/api/store/analytics/${id}/sales/payment-method`,
                { headers }
            )
            console.log("get sales by payment method", res.data)
            return res.data
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)

export const getSalesByBranch = createAsyncThunk(
    "storeAnalytics/getSalesByBranch",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders()
            const res = await api.get(`/api/store/analytics/${id}/sales/branch`,
                { headers }
            )
            console.log("get branch sales", res.data)
            return res.data
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)

export const getPaymentBreakdown = createAsyncThunk(
    "storeAnalytics/getPaymentBreakdown",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders()
            const res = await api.get(`/api/store/analytics/${id}/payments`,
                { headers }
            )
            console.log("get payment breakdown", res.data)
            return res.data
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)

export const getBranchPerformance = createAsyncThunk(
    "storeAnalytics/getBranchPerformance",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders()
            const res = await api.get(`/api/store/analytics/${id}/branch-performance`,
                { headers }
            )
            console.log("get daily sales", res.data)
            return res.data
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)

export const getStoreAlerts = createAsyncThunk(
    "storeAnalytics/getStoreAlert",
    async (id, { rejectWithValue }) => {
        try {
            const headers = getAuthHeaders()
            const res = await api.get(`/api/store/analytics/${id}/alerts`,
                { headers }
            )
            console.log("store alerts success", res.data)
            return res.data
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)