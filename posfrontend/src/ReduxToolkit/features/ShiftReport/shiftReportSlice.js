import { createSlice } from "@reduxjs/toolkit";

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
                state.loading = true
            })
    }
})