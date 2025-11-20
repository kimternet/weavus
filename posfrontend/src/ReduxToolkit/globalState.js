import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/Auth/authSlice.js"
import userReducer from "./features/User/userSlice.js"
import customerReducer from "./features/Customer/customerSlice.js"
import orderReducer from "./features/Order/orderSlice.js"
import refundReducer from "./features/Order/orderSlice.js"
import shiftReportReducer from "./features/ShiftReport/shiftReportSlice.js"
import branchReducer from "./features/Branch/branchSlice.js"
import categoryReducer from "./features/Category/categorySlice.js"
import employeeReducer from "./features/Employee/employeeSlice.js"
import storeReducer from "./features/Store/storeSlice.js"
import productReducer from "./features/Product/productSlice.js"
import inventoryReducer from "./features/Inventory/inventorySlice.js"
import branchAnalyticsReducer from "./features/BranchAnalytics/branchAnalyticsSlice.js"

const globalState = configureStore({
    reducer: {

        auth: authReducer,
        user: userReducer,
        customer: customerReducer,
        order: orderReducer,
        refund: refundReducer,
        shiftReport: shiftReportReducer,
        branch: branchReducer,
        category: categoryReducer,
        employee: employeeReducer,
        store: storeReducer,
        product: productReducer,
        inventory: inventoryReducer,
        branchAnalytics: branchAnalyticsReducer,
    },
});

export default globalState;