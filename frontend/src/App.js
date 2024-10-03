import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';

function App() {
  return (
      <div className="container" style={{ width: '1920px', height: '1064px' }}>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Register/>} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/appointments/new" element={<AppointmentForm />} />
          <Route path="/patient-records" element={<PatientRecord />} />
          <Route path="/prescription" element={<PrescriptionForm />} />
          <Route path="/payment" element={<Payment />} /> */}
        </Routes>
      </div>
      );
}

export default App;
