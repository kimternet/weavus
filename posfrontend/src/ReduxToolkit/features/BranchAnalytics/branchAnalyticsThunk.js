import api from "@/utill/api";
import { getAuthHeaders } from "@/utill/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getDailySalesChart = createAsyncThunk(
    "/branchAnalytics/getDailySalesChart",
    async ({ branchId, days = 7 }, { rejectWithValue }) => {

        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/branch-analytics/daily-sales?
                branchId=${branchId}&days=${days}`, { headers })
            console.log("get daily sales data success ", res.data)
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

export const getTopProductsByQuantity = createAsyncThunk(
    "/branchAnalytics/getTopProductsByQuantity",
    async (branchId, { rejectWithValue }) => {

        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/branch-analytics/top-products?
                branchId=${branchId}`, { headers })
            console.log("get top products data success ", res.data)
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

export const getTopCashiersByRevenue = createAsyncThunk(
    "/branchAnalytics/getTopCashiersByRevenue",
    async (branchId, { rejectWithValue }) => {

        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/branch-analytics/top-cashiers?
                branchId=${branchId}`, { headers })
            console.log("get top cashiers data success ", res.data)
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message);
        }
    }
)


export const getCategoryWiseSalesBreakdown = createAsyncThunk(
    "/branchAnalytics/getCategoryWiseSalesBreakdown",
    async ({ branchId, date }, { rejectWithValue }) => {

        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/branch-analytics/category-sales?
                branchId=${branchId}&date${date}`, { headers })
            console.log("category wise sales success ", res.data)
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

export const getTodayOverview = createAsyncThunk(
    "/branchAnalytics/getTodayOverview",
    async (branchId, { rejectWithValue }) => {

        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/branch-analytics/today-overview?
                branchId=${branchId}`, { headers })
            console.log("get today overview", res.data)
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

export const getPaymentBreakdown = createAsyncThunk(
    "/branchAnalytics/getPaymentBreakdown",
    async ({ branchId, date }, { rejectWithValue }) => {

        try {
            const headers = getAuthHeaders();
            const res = await api.get(`/api/branch-analytics/payment-breakdown?
                branchId=${branchId}&${date}`, { headers })
            console.log("payment breakdown success ", res.data)
            return res.data;
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data?.message);
        }
    }
)