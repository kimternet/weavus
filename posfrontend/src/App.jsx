import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import CreateOrder from "./pages/cashier/CreateOrder"
import CustomerLookup from './pages/cashier/CustomerManagement/CustomerLookup'
import OrderHistory from './pages/cashier/OrderHistory/OrderHistory'
import RefundPage from './pages/cashier/Refund/RefundPage'
import ShiftSummaryPage from './pages/cashier/ShiftReport/ShiftSummaryPage'
import CashierRoutes from './routes/CashierRoutes'
import BranchLayout from './pages/branch/BranchLayout/BranchLayout'
import BranchRoutes from './routes/BranchRoutes'
import StoreDashboardLayout from './pages/store/Dashboard/StoreDashboardLayout'
import StoreRoutes from './routes/StoreRoutes'
function App() {

  return (
    <>

      <Routes>
        {/* <Route path="/cashier/*" element={<CashierRoutes />} /> */}
        <Route path="/" element={<Navigate to="/store" />} />
        <Route path="/store/*" element={<StoreRoutes />} />
        <Route path="/branch/*" element={<BranchRoutes />} />
      </Routes>
    </>
  );
}

export default App;
