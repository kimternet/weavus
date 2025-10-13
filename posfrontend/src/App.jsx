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
function App() {

  return (
    <>

      <Routes>
        {/* <Route path="/cashier/*" element={<CashierRoutes />} /> */}
        <Route path="/" element={<Navigate to={"/branch"} />} />
        <Route path="/branch/*" element={<BranchRoutes />} />
      </Routes>
    </>
  );
}

export default App;
