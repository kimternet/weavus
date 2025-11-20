import { createSlice } from "@reduxjs/toolkit";
import { getCategoryWiseSalesBreakdown, getDailySalesChart, getPaymentBreakdown, getTodayOverview, getTopCashiersByRevenue, getTopProductsByQuantity } from "./branchAnalyticsThunk";

const initialState = {
    dailySales: [],
    topProducts: [],
    topCashiers: [],
    categorySales: [],
    todayOverview: null,
    paymentBreakdown: [],
    loading: false,
    error: null,
};

const branchAnalyticsSlice = createSlice({
    name: "branchAnalytics",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(getDailySalesChart.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDailySalesChart.fulfilled, (state, action) => {
                state.loading = false;
                state.dailySales = action.payload;
            })
            .addCase(getDailySalesChart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Top Products
            .addCase(getTopProductsByQuantity.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTopProductsByQuantity.fulfilled, (state, action) => {
                state.loading = false;
                state.topProducts = action.payload;
            })
            .addCase(getTopProductsByQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Top Cashiers
            .addCase(getTopCashiersByRevenue.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTopCashiersByRevenue.fulfilled, (state, action) => {
                state.loading = false;
                state.topCashiers = action.payload;
            })
            .addCase(getTopCashiersByRevenue.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Category Sales
            .addCase(getCategoryWiseSalesBreakdown.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategoryWiseSalesBreakdown.fulfilled, (state, action) => {
                state.loading = false;
                state.categorySales = action.payload;
            })
            .addCase(getCategoryWiseSalesBreakdown.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Today Overview
            .addCase(getTodayOverview.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTodayOverview.fulfilled, (state, action) => {
                state.loading = false;
                state.todayOverview = action.payload;
            })
            .addCase(getTodayOverview.rejected, (state, action) => {
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

    }

})

export default branchAnalyticsSlice.reducer;