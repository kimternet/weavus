import { createSlice } from "@reduxjs/toolkit";
import { endShift, getCurrentShiftProgress, getShiftByBranch, getShiftByCashier, getShiftById, getShiftReportByDate, startShift } from "./shiftReportthunk";

const initialState = {
    shifts: [],
    currentShift: null,
    selectedShift: null,
    shiftsByCashier: [],
    shiftsByBranch: [],
    loading: false,
    error: null,
};

const shiftReportSlice = createSlice({
    name: "shiftReport",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(startShift.pending, (state) => {
                state.loading = true;
            })
            .addCase(startShift.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedShift = action.payload;
                state.shifts.push(action.payload);
            })
            .addCase(startShift.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // End Shift
            .addCase(endShift.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(endShift.fulfilled, (state, action) => {
                state.loading = false;
                // Update the current shift with end time and final stats
                if (state.currentShift && state.currentShift.id === action.payload.id) {
                    state.currentShift = action.payload;
                }
                // Update the shift in the shifts array
                const index = state.shifts.findIndex(shift => shift.id === action.payload.id);
                if (index !== -1) {
                    state.shifts[index] = action.payload;
                }
            })
            .addCase(endShift.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get Current Shift Progress
            .addCase(getCurrentShiftProgress.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCurrentShiftProgress.fulfilled, (state, action) => {
                state.loading = false;
                state.currentShift = action.payload;
            })
            .addCase(getCurrentShiftProgress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get Shift Report by Date
            .addCase(getShiftReportByDate.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getShiftReportByDate.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedShift = action.payload;
            })
            .addCase(getShiftReportByDate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get Shifts by Cashier
            .addCase(getShiftByCashier.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getShiftByCashier.fulfilled, (state, action) => {
                state.loading = false;
                state.shiftsByCashier = action.payload;
            })
            .addCase(getShiftByCashier.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get Shifts by Branch
            .addCase(getShiftByBranch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getShiftByBranch.fulfilled, (state, action) => {
                state.loading = false;
                state.shiftsByBranch = action.payload;
            })
            .addCase(getShiftByBranch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // Get Shift by ID
            .addCase(getShiftById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getShiftById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedShift = action.payload;
            })
            .addCase(getShiftById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default shiftReportSlice.reducer;