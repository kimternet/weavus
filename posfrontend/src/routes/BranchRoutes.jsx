import BranchLayout from '@/pages/branch/BranchLayout/BranchLayout'
import Dashboard from '@/pages/branch/Dashboard/Dashboard';
import BranchEmployee from '@/pages/branch/employee/BranchEmployee';
import Inventory from '@/pages/branch/Inventory/Inventory';
import Orders from '@/pages/branch/order/Orders';
import Reports from '@/pages/branch/Reports/Reports';
import Settings from '@/pages/branch/Settings/Settings';
import Transactions from '@/pages/branch/Transactions/Transactions';
import React from 'react'
import { Route, Routes } from 'react-router'

const BranchRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<BranchLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="employees" element={<BranchEmployee />} />
                {/* <Route path="customers" element={<Customers />} /> */}
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />

            </Route>
        </Routes>
    );
};

export default BranchRoutes;