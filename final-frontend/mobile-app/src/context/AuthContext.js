import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { getStoredToken, setStoredToken, deleteStoredToken } from '../utils/tokenStorage';
import api from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ id: 'mock', name: 'Mock User', email: 'mock@example.com' });
  const [token, setToken] = useState('mock-token');
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const storedToken = await getStoredToken('admin_token');
        if (storedToken) {
          // Verify token and fetch profile by fetching dashboard
          const res = await api.get('/user/dashboard', {
            headers: { Authorization: `Bearer ${storedToken}` }
          });
          setUser(res.data.user);
          setToken(storedToken);
        }
      } catch (e) {
        console.log('Restoring token failed or token expired', e);
        // Clear invalid token
        await deleteStoredToken('admin_token');
      } finally {
        setIsLoading(false);
      }
    };


    bootstrapAsync();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await api.post('/auth/login', { email, password });
      const { token: returnedToken, role } = res.data;
      
      // We only allow customers/users or admins playing with it.
      const userData = res.data.user || res.data.admin;
      
      if (!userData) {
        throw new Error('Invalid account type');
      }

      await setStoredToken('admin_token', returnedToken);
      setUser(userData);
      setToken(returnedToken);
      return true;
    } catch (err) {
      console.error(err);
      const errMsg = err.response?.data?.error || err.message || 'Login failed';
      Alert.alert('Login Error', errMsg);
      return false;
    }
  };

  const signup = async (email, password, name, phone) => {
    try {
      await api.post('/auth/signup', { email, password, name, phone });
      Alert.alert('Success', 'Signup completed successfully! Please login.');
      return true;
    } catch (err) {
      console.error(err);
      const errMsg = err.response?.data?.error || 'Registration failed';
      Alert.alert('Registration Error', errMsg);
      return false;
    }
  };

  const logout = async () => {
    try {
      await deleteStoredToken('admin_token');
      setUser(null);
      setToken(null);
    } catch (err) {
      console.error('Logout failed', err);
    }
  };


  const updateProfileState = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        token,
        login,
        signup,
        logout,
        updateProfileState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
