import api from "@/util/api";
import { getAuthHeaders } from "@/utill/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const startShift = createAsyncThunk("/shiftReport/start",
    async (branchId, { rejectWithValue }) => {
        try {

            const headers = getAuthHeaders();

            const res = await api.post(`/api/shift-reports/start?branchId=${branchId}`, {}, { headers })

            console.log("shift started successfully", res.data);

            return res.data;

        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data.message || "Failed to start shift")
        }
    }

)


export const endShift = createAsyncThunk("/shiftReport/end",
    async (_, { rejectWithValue }) => {
        try {

            const headers = getAuthHeaders();

            const res = await api.patch(`/api/shift-reports/end`, {}, { headers })

            console.log("shift end successfully", res.data);

            return res.data;

        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data.message || "Failed to end shift")
        }
    }

)

export const getCurrentShiftProgress = createAsyncThunk("/shiftReport/getCurrent",
    async (_, { rejectWithValue }) => {
        try {

            const headers = getAuthHeaders();

            const res = await api.get(`/api/shift-reports/current`, { headers })

            console.log("current shift successfully", res.data);

            return res.data;

        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data.message || "Failed to fetch current shift")
        }
    }

)


export const getShiftReportByDate = createAsyncThunk("/shiftReport/getByDate",
    async ({ cashierId, date }, { rejectWithValue }) => {
        try {

            const headers = getAuthHeaders();

            const formattedDate = encodeURIComponent(date);

            const res = await api.get(`/api/shift-reports/cashier/${cashierId}/by-date?date=${formattedDate}`, { headers })

            console.log("shift report by date successfully", res.data);

            return res.data;

        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data.message || "Failed to fetch shift report by date"

            )
        }
    }
)


export const getShiftByCashier = createAsyncThunk("/shiftReport/getByCashier",
    async (cashierId, { rejectWithValue }) => {
        try {

            const headers = getAuthHeaders();

            const res = await api.get(`/api/shift-reports/cashier/${cashierId}`, { headers })

            console.log("cashier shift successfully", res.data);

            return res.data;

        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data.message || "Failed to fetch cashier shift")
        }
    }

)

export const getShiftByBranch = createAsyncThunk("/shiftReport/getByBranch",
    async (branchId, { rejectWithValue }) => {
        try {

            const headers = getAuthHeaders();

            const res = await api.get(`/api/shift-reports/branch/${branchId}`, { headers })

            console.log("branch shift successfully", res.data);

            return res.data;

        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data.message || "Failed to fetch branch shift")
        }
    }

)

export const getShiftById = createAsyncThunk("/shiftReport/getById",
    async (id, { rejectWithValue }) => {
        try {

            const headers = getAuthHeaders();

            const res = await api.get(`/api/shift-reports/${id}`, { headers })

            console.log("shift by id successfully", res.data);

            return res.data;

        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response?.data.message || "Failed to fetch shift id")
        }
    }

)