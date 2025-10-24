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
    },
});

export default globalState;