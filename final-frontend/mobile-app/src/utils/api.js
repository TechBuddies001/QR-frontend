import axios from 'axios';
import { getStoredToken } from './tokenStorage';

const API_BASE = 'https://tarkshyasolution.in/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to automatically attach authorization token
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await getStoredToken('admin_token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error reading token from tokenStorage', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api;
export { API_BASE };
