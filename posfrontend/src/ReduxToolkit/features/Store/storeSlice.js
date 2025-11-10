import { createSlice } from "@reduxjs/toolkit";
import { createStore, getAllStores, getStoreByAdmin, getStoreById, moderateStore, updateStore } from "./storeThunk";



const initialState = {
    store: null,
    stores: [],
    employees: [],
    loading: false,
    error: null,
};

const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createStore.pending, (state) => {
                state.loading = true;
            })
            .addCase(createStore.fulfilled, (state, action) => {
                state.loading = false;
                state.store = action.payload;
            })
            .addCase(createStore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getStoreByAdmin.fulfilled, (state, action) => {
                state.store = action.payload;
            })

            .addCase(getStoreById.fulfilled, (state, action) => {
                state.store = action.payload;
            })
            .addCase(getAllStores.fulfilled, (state, action) => {
                state.stores = action.payload;
            })
            .addCase(updateStore.fulfilled, (state, action) => {
                state.store = action.payload;
            })

            // Update store in list after moderation
            .addCase(moderateStore.fulfilled, (state, action) => {
                const updated = action.payload;
                state.stores = state.stores.map(store =>
                    store.id === updated.id ? updated : store
                );
            })
    }
})

export default storeSlice.reducer;