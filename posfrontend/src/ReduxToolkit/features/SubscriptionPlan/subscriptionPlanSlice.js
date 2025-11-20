import { createSlice } from "@reduxjs/toolkit";
import { createSubscriptionPlan, deleteSubscriptionPlan, getAllSubscriptionPlans, getSubscriptionPlanById, updateSubscriptionPlan } from "./subscriptionPlanThunk";

const initialState = {
    plans: [],
    selectedPlan: null,
    loading: false,
    error: null,
};

const subscriptionPlanSlice = createSlice({
    name: "subscriptionPlan",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createSubscriptionPlan.pending, (state) => {
                state.loading = false;

            })
            .addCase(createSubscriptionPlan.fulfilled, (state, action) => {
                state.loading = false;
                state.plans.push(action.payload)
            })
            .addCase(createSubscriptionPlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // 🔄 Update
            .addCase(updateSubscriptionPlan.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateSubscriptionPlan.fulfilled, (state, action) => {
                state.loading = false;
                state.plans = state.plans.map((plan) =>
                    plan.id === action.payload.id ? action.payload : plan
                );
            })
            .addCase(updateSubscriptionPlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // 📦 Get All
            .addCase(getAllSubscriptionPlans.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllSubscriptionPlans.fulfilled, (state, action) => {
                state.loading = false;
                state.plans = action.payload;
            })
            .addCase(getAllSubscriptionPlans.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // 🔍 Get by ID
            .addCase(getSubscriptionPlanById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSubscriptionPlanById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedPlan = action.payload;
            })
            .addCase(getSubscriptionPlanById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ❌ Delete
            .addCase(deleteSubscriptionPlan.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteSubscriptionPlan.fulfilled, (state, action) => {
                state.loading = false;
                state.plans = state.plans.filter((plan) => plan.id !== action.payload);
            })
            .addCase(deleteSubscriptionPlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default subscriptionPlanSlice.reducer;
