import { createSlice } from "@reduxjs/toolkit";
import { getStoreOverview, getSalesTrends, getMonthlySales, getDailySales, getSalesByCategory, getSalesByPaymentMethod, getSalesByBranch, getPaymentBreakdown, getBranchPerformance, getStoreAlerts } from "./storeAnalyticsThunk";

const initialState = {
    // Store Overview Data
    storeOverview: null,

    // Sales Data
    salesTrends: null,
    monthlySales: [],
    dailySales: [],

    // Category and Payment Data
    salesByCategory: [],
    salesByPaymentMethod: [],
    paymentBreakdown: [],

    // Branch Data
    salesByBranch: [],
    branchPerformance: null,

    // Alerts
    storeAlerts: null,

    // Loading and Error States
    loading: false,
    error: null,
};


const storeAnalyticsSlice = createSlice({
    name: "storeAnalytics",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStoreOverview.pending, (state) => {
                state.loading = true
            })
            .addCase(getStoreOverview.fulfilled, (state, action) => {
                state.loading = false;
                state.storeOverview = action.payload
            })
            .addCase(getStoreOverview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            // Sales Trends
            .addCase(getSalesTrends.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSalesTrends.fulfilled, (state, action) => {
                state.loading = false;
                state.salesTrends = action.payload;
            })
            .addCase(getSalesTrends.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Monthly Sales
            .addCase(getMonthlySales.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMonthlySales.fulfilled, (state, action) => {
                state.loading = false;
                state.monthlySales = action.payload;
            })
            .addCase(getMonthlySales.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Daily Sales
            .addCase(getDailySales.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDailySales.fulfilled, (state, action) => {
                state.loading = false;
                state.dailySales = action.payload;
            })
            .addCase(getDailySales.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Sales by Category
            .addCase(getSalesByCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSalesByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.salesByCategory = action.payload;
            })
            .addCase(getSalesByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Sales by Payment Method
            .addCase(getSalesByPaymentMethod.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSalesByPaymentMethod.fulfilled, (state, action) => {
                state.loading = false;
                state.salesByPaymentMethod = action.payload;
            })
            .addCase(getSalesByPaymentMethod.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Sales by Branch
            .addCase(getSalesByBranch.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSalesByBranch.fulfilled, (state, action) => {
                state.loading = false;
                state.salesByBranch = action.payload;
            })
            .addCase(getSalesByBranch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Payment Breakdown
            .addCase(getPaymentBreakdown.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPaymentBreakdown.fulfilled, (state, action) => {
                state.loading = false;
                state.paymentBreakdown = action.payload;
            })
            .addCase(getPaymentBreakdown.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Branch Performance
            .addCase(getBranchPerformance.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBranchPerformance.fulfilled, (state, action) => {
                state.loading = false;
                state.branchPerformance = action.payload;
            })
            .addCase(getBranchPerformance.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Store Alerts
            .addCase(getStoreAlerts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getStoreAlerts.fulfilled, (state, action) => {
                state.loading = false;
                state.storeAlerts = action.payload;
            })
            .addCase(getStoreAlerts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default storeAnalyticsSlice.reducer