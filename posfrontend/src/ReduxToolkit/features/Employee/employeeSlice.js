import { createSlice } from "@reduxjs/toolkit";
import { createBranchEmployee, createStoreEmployee, updateEmployee, deleteEmployee, findEmployeeById, findStoreEmployees, findBranchEmployees } from "./employeeThunk";

const initialState = {
    employees: [],
    employee: null,
    loading: false,
    error: null,
};

const employeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createStoreEmployee.pending, (state) => {
                state.loading = true;
            })
            .addCase(createStoreEmployee.fulfilled, (state, action) => {
                state.loading = false;
                state.employees.push(action.payload);
            })
            .addCase(createStoreEmployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createBranchEmployee.pending, (state) => {
                state.loading = true;
            })
            .addCase(createBranchEmployee.fulfilled, (state, action) => {
                state.loading = false;
                state.employees.push(action.payload);
            })
            .addCase(createBranchEmployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(updateEmployee.fulfilled, (state, action) => {
                const index = state.employees.findIndex((e) => e.id === action.payload.id);
                if (index !== -1) {
                    state.employees[index] = action.payload;
                }
            })

            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.employees = state.employees.filter((e) => e.id !== action.payload);
            })

            .addCase(findEmployeeById.fulfilled, (state, action) => {
                state.employee = action.payload;
            })

            .addCase(findStoreEmployees.fulfilled, (state, action) => {
                state.employees = action.payload;
            })

            .addCase(findBranchEmployees.fulfilled, (state, action) => {
                state.employees = action.payload;
                // console.log("")
            });
    },
});

export default employeSlice.reducer;