import api from "@/utill/api";
import { getAuthHeaders } from "@/utill/getAuthHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createRefund = createAsyncThunk("/refund/create",
    async (refundDTO, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();

            const res = await api.post("/api/refunds", refundDTO, { headers })

            console.log("create refund success", res.data);

            return res.data

        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message || "Failed to create refund")

        }
    }
);

export const getAllRefund = createAsyncThunk("/refund/getAll",
    async (_, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();

            const res = await api.get("/api/refunds", { headers })

            console.log("get All refund success", res.data);

            return res.data

        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message || "Failed to get all refund");

        }
    }
);


export const getRefundByCashier = createAsyncThunk("/refund/getByCashier",
    async (cashierId, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();

            const res = await api.get(`/api/refunds/cashier/${cashierId}`, { headers }, {
                headers,
            });

            console.log("get refund by cashier success", res.data);

            return res.data

        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message || "Failed to get cashier refund")

        }
    }
);

export const getRefundByBranch = createAsyncThunk("/refund/getByBranch",
    async (branchId, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();

            const res = await api.get(`/api/refunds/branch/${branchId}`, { headers }, {
                headers,
            });

            console.log("get refund by branch success", res.data);

            return res.data

        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message || "Failed to get branch refund")

        }
    }
);

export const getRefundByShift = createAsyncThunk("/refund/getByShift",
    async (shiftReportId, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();

            const res = await api.get(`/api/refunds/shift/${shiftReportId}`, { headers }, {
                headers,
            });

            console.log("get refund by shift success", res.data);

            return res.data

        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message || "Failed to get shift refund")

        }
    }
);

export const getRefundByCashierAndDateRange = createAsyncThunk("/refund/getByCashierAndDateRange",
    async ({ cashierId, from, to }, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();

            const formattedFrom = encodeURIComponent(from);
            const formattedTo = encodeURIComponent(to);



            const res = await api.get(`/api/refunds/cashier/${cashierId}/range?from=${formattedFrom}&to=${formattedTo}`, { headers }, {
                headers,
            });

            console.log("get by date range success", res.data);

            return res.data

        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message || "Failed to get refund");

        }
    }
);

export const getRefundById = createAsyncThunk("/refund/getById",
    async (refundId, { rejectWithValue }) => {

        try {

            const headers = getAuthHeaders();

            const res = await api.get(`/api/refunds/${refundId}`, { headers }, {
                headers,
            });

            console.log("get refund by id success", res.data);

            return res.data

        } catch (error) {

            console.log("error", error)
            return rejectWithValue(error.response?.data?.message || "Failed to get refund by id");

        }
    }
);