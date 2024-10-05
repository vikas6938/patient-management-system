const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbConnection = require('./config/db');
const path = require('path');
const userRouter = require('./routes/patient.route');
const doctorRouter = require('./routes/doctor.route');
const adminRouter = require('./routes/admin.route');
const appointmentRouter = require('./routes/appointment.route');

// Initialize app
const app = express();

// Upload Images
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Middleware to parse incoming JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());  // Enable CORS
app.use('/api/auth', userRouter);
app.use("/api/doctor", doctorRouter)
app.use("/api/admin", adminRouter)
app.use("/api/appointment", appointmentRouter)

// Database connection
dbConnection();

// Mount the API routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 