import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Forgot from './components/Auth/Forgot';
import EnterOTP from './components/Auth/EnterOtp';
import ResetPassword from './components/Auth/ResetPass';
import Breadcrumb from './components/Common/Breadcrumb';
// Profile Setting page
import DashboardPage from './components/ProfileScreen/ProfileSetting';
import ChangePassword from './components/ProfileScreen/ChangePassword';
import EditProfile from './components/ProfileScreen/EditProfile';
import TermsCondition from './components/ProfileScreen/TermsCondition';
import ProfileSetting from './components/ProfileScreen/ProfileSetting';
import PrivacyPolicy from './components/ProfileScreen/PrivacyPolicy';
// Billing Dashboard Page
import Dashboard from './components/Dashboard/Dashboard';
import PendingBills from './components/Billing&Payment/PendingBills';
import PendingBillOnline from './components/Billing&Payment/PendingBillOnline';
import PendingBillInsurance from './components/Billing&Payment/PendingBillInsurance';
import CreateBill from './components/Billing&Payment/CreateBill';
import InvoiceDetails from './components/Billing&Payment/PendingBillOnline';
import SelectInvoiceTheme from './components/Billing&Payment/InvoiceTheme';
import DoctorManage from './components/DoctorManagement/DoctorManage';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<DashboardPage />} />
        <Route path="/breadcrumb" element={<Breadcrumb />} />
        {/* Auth--------- */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/enter-otp" element={<EnterOTP />} />
        <Route path="/reset-pass" element={<ResetPassword />} />
        <Route path="/change-pass" element={<ChangePassword />} />
        {/* ProfileSetting ------ */}
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Billing Dashboard -------- */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pending-bills" element={<PendingBills />} />
        <Route path="/bills-online" element={<PendingBillOnline />} />
        <Route path="/bills-insurance" element={<PendingBillInsurance />} />
        <Route path="/create-bill" element={<CreateBill />} />
        <Route path="/invoice-theme" element={<SelectInvoiceTheme />} />
        {/* Doctor Management ------ */}
        <Route path="/doctor-manage" element={<DoctorManage />} />

      </Routes>
    </Router>
  );
}

export default App;
