
const API_BASE = window.location.hostname === 'localhost' ? 'http://localhost:5001/api' : '/api';

const api = {
  get: async (endpoint) => {
    const token = localStorage.getItem('admin_token');
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    if (!res.ok) throw { response: { data } };
    return { data };
  },
  post: async (endpoint, body) => {
    const token = localStorage.getItem('admin_token');
    const isFormData = body instanceof FormData;
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 
        'Authorization': token ? `Bearer ${token}` : '',
        ...(isFormData ? {} : { 'Content-Type': 'application/json' })
      },
      body: isFormData ? body : JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) throw { response: { data } };
    return { data };
  },
  put: async (endpoint, body) => {
    const token = localStorage.getItem('admin_token');
    const isFormData = body instanceof FormData;
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'PUT',
      headers: { 
        'Authorization': token ? `Bearer ${token}` : '',
        ...(isFormData ? {} : { 'Content-Type': 'application/json' })
      },
      body: isFormData ? body : JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) throw { response: { data } };
    return { data };
  },
  delete: async (endpoint) => {
    const token = localStorage.getItem('admin_token');
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'DELETE',
      headers: { 
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json' 
      }
    });
    const data = await res.json();
    if (!res.ok) throw { response: { data } };
    return { data };
  }
};

export default api;
