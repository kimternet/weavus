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
import AdminLayout from './pages/superAdmin/AdminLayout'
import AdminRoutes from './routes/AdminRoutes'
import Login from './pages/Auth/Login'
import { useDispatch } from 'react-redux'
import { getUserProfile } from './ReduxToolkit/features/User/userThunk'
import { useEffect } from 'react'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {  // ✅ JWT가 있을 때만 호출
      dispatch(getUserProfile(jwt))
    }
  }, [dispatch])  // ✅ dependency array 추가

  return (
    <>

      <Routes>
        {/* <Route path="/cashier/*" element={<CashierRoutes />} /> */}
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/cashier/*" element={<CashierRoutes />} />
        <Route path="/store/*" element={<StoreRoutes />} />
        <Route path="/branch/*" element={<BranchRoutes />} />
        <Route path="/super-admin/*" element={<AdminRoutes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
