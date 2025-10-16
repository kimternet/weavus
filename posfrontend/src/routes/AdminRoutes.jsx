import AdminLayout from '@/pages/superAdmin/AdminLayout'
import AdminSettings from '@/pages/superAdmin/AdminSettings'
import AdminDashboard from '@/pages/superAdmin/Dashboard/AdminDashboard'
import PendingRequest from '@/pages/superAdmin/PendingRequest'
import StoreList from '@/pages/superAdmin/StoreList'
import Subscriptions from '@/pages/superAdmin/Subscriptions'
import React from 'react'
import { Route, Routes } from 'react-router'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="stores" element={<StoreList />} />
                <Route path="requests" element={<PendingRequest />} />
                <Route path="subscriptions" element={<Subscriptions />} />
                <Route path="settings" element={<AdminSettings />} />

            </Route>
        </Routes>
    )
}

export default AdminRoutes