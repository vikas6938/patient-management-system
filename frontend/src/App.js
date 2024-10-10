import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Forgot from './components/Auth/Forgot';
import EnterOTP from './components/Auth/EnterOtp';
import ResetPassword from './components/Auth/ResetPass';
import DashboardPage from './components/ProfileScreen/ProfileSetting';
import EditProfile from './components/ProfileScreen/EditProfile';
import ChangePassword from './components/ProfileScreen/ChangePassword';
import TermsCondition from './components/ProfileScreen/TermsCondition';
import ProfileSetting from './components/ProfileScreen/ProfileSetting';
import PrivacyPolicy from './components/ProfileScreen/PrivacyPolicy';
import Dashboard from './components/Dashboard/Dashboard';
import Breadcrumb from './components/Common/Breadcrumb';
import PendingBills from './components/Billing&Payment/PendingBills';
import PendingBillOnline from './components/Billing&Payment/PendingBillOnline';
import CreateBill from './components/Billing&Payment/CreateBill';


function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/enter-otp" element={<EnterOTP />} />
        <Route path="/reset-pass" element={<ResetPassword />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-pass" element={<ChangePassword />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/breadcrumb" element={<Breadcrumb />} />
        <Route path="/pending-bills" element={<PendingBills />} />
        <Route path="/bills-online" element={<PendingBillOnline />} />
        <Route path="/create-bill" element={<CreateBill />} />
      </Routes>
    </Router>
  );
}

export default App;
