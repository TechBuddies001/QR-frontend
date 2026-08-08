import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://admin.tarkshyasolution.in/api'
    : 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add auth token
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const isPartnerPath = window.location.pathname.startsWith('/partner');
    const token = isPartnerPath 
      ? localStorage.getItem('partner_token') 
      : localStorage.getItem('admin_token');
      
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        const isPartnerPath = window.location.pathname.startsWith('/partner');
        
        if (isPartnerPath) {
          localStorage.removeItem('partner_token');
          if (!window.location.pathname.startsWith('/partner/login')) {
            window.location.href = '/partner/login';
          }
        } else {
          localStorage.removeItem('admin_token');
          if (!window.location.pathname.startsWith('/admin/login')) {
            window.location.href = '/admin/login';
          }
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
