// src/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Update this to your backend URL

// Axios instance with base configuration
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to set the Authorization header with token
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// Authentication API
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

// Doctor Management API
export const addDoctor = async (doctorData) => {
  const response = await api.post('/doctors', doctorData);
  return response.data;
};

export const getDoctors = async () => {
  const response = await api.get('/doctors');
  return response.data;
};

export const deleteDoctor = async (doctorId) => {
  const response = await api.delete(`/doctors/${doctorId}`);
  return response.data;
};

// Patient Management API
export const getPatients = async () => {
  const response = await api.get('/patients');
  return response.data;
};

export const addPatient = async (patientData) => {
  const response = await api.post('/patients', patientData);
  return response.data;
};

export const deletePatient = async (patientId) => {
  const response = await api.delete(`/patients/${patientId}`);
  return response.data;
};

// Billing & Payment API
export const createBill = async (billData) => {
  const response = await api.post('/billing', billData);
  return response.data;
};

export const getBills = async () => {
  const response = await api.get('/billing');
  return response.data;
};

export default api;
