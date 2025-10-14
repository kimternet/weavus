import Branches from '@/pages/store/Branch/Branches'
import StoreDashboard from '@/pages/store/Dashboard/StoreDashboard'
import StoreDashboardLayout from '@/pages/store/Dashboard/StoreDashboardLayout'
import React from 'react'
import { Route, Routes } from 'react-router'

const StoreRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StoreDashboardLayout />}>
                <Route index element={<StoreDashboard />} />
                <Route path="dashboard" element={<StoreDashboard />} />
                <Route path="branches" element={<Branches />} />
                <Route path="stores" element={<Branches />} />
                <Route path="products" element={<Branches />} />
                <Route path="categories" element={<Branches />} />
                <Route path="employees" element={<Branches />} />
                <Route path="alerts" element={<Branches />} />
                <Route path="sales" element={<Branches />} />
                <Route path="reports" element={<Branches />} />
                <Route path="upgrade" element={<Branches />} />
                <Route path="settings" element={<Branches />} />

            </Route>
        </Routes>
    )
}

export default StoreRoutes