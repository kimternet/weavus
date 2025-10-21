import { createSlice } from "@reduxjs/toolkit";
import { createBranch, getAllBranchesByStore, getBranchById, updateBranch, } from "./branchThunk";

const initialState = {
    branch: null,
    branches: [],
    employees: [],
    loading: false,
    error: null,
};

const branchSlice = createSlice({
    name: "branch",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createBranch.pending, (state) => {
                state.loading = true
            })
            .addCase(createBranch.fulfilled, (state, action) => {
                state.loading = false;
                state.branches.push(action.payload);
                if (state.branch.id == action.payload.id) {
                    state.branch = action.payload
                }
            })
            .addCase(createBranch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getBranchById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBranchById.fulfilled, (state, action) => {
                state.loading = false;
                state.branch = action.payload;
            })
            .addCase(getBranchById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getAllBranchesByStore.fulfilled, (state, action) => {
                state.branches = action.payload;
            })

            .addCase(updateBranch.fulfilled, (state, action) => {
                state.branch = action.payload;
            })
    },
});

export default branchSlice.reducer;