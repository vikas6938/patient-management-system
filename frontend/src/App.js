import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Forgot from './components/Auth/Forgot';
import EnterOTP from './components/Auth/EnterOtp';
import ResetPassword from './components/Auth/ResetPass';
import AdminPanel from './components/Admin/AdminPanel';
import ProfileSettings from './components/Admin/ProfileSettings';  // Corrected path
import EditProfile from './components/Admin/EditProfile';  // Corrected path
import AdminDashboard from './components/Admin/AdminDashboard';
import ChangePassword from './components/Admin/ChangePassword';
import TermsCondition from './components/Admin/TermsCondition';
import PolicyPrivacy from './components/Admin/PolicyPrivacy';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/enter-otp" element={<EnterOTP />} />
        <Route path="/reset-pass" element={<ResetPassword />} />

        {/* Admin Panel with Nested Routes */}
        <Route path="/" element={<AdminPanel />}>
          <Route index element={<ProfileSettings />} />  {/* Default route */}
          <Route path="profile-setting" element={<ProfileSettings />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="changePass" element={<ChangePassword />} />
          <Route path="termsCondition" element={<TermsCondition />} />
          <Route path="policyPrivacy" element={<PolicyPrivacy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
