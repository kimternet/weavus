import CashierDashboardLayout from '@/pages/cashier/CashierDashboardLayout'
import CreateOrder from '@/pages/cashier/CreateOrder'
import CustomerLookup from '@/pages/cashier/CustomerManagement/CustomerLookup'
import OrderHistory from '@/pages/cashier/OrderHistory/OrderHistory'
import RefundPage from '@/pages/cashier/Refund/RefundPage'
import ShiftSummaryPage from '@/pages/cashier/ShiftReport/ShiftSummaryPage'
import React from 'react'
import { Route, Routes } from 'react-router'

const CashierRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<CreateOrder />} />
            <Route path='/orders' element={<OrderHistory />} />
            <Route path='/customers' element={<CustomerLookup />} />
            <Route path='/returns' element={<RefundPage />} />
            <Route path='/shift-summary' element={<ShiftSummaryPage />} />

        </Routes>
    )
}

export default CashierRoutes