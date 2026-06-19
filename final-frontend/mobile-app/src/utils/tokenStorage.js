import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

export const getStoredToken = async (key) => {
  if (Platform.OS === 'web') {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.error('Error reading token from localStorage', e);
      return null;
    }
  }
  try {
    return await SecureStore.getItemAsync(key);
  } catch (e) {
    console.error('Error reading token from SecureStore', e);
    return null;
  }
};

export const setStoredToken = async (key, val) => {
  if (Platform.OS === 'web') {
    try {
      localStorage.setItem(key, val);
    } catch (e) {
      console.error('Error setting token in localStorage', e);
    }
    return;
  }
  try {
    await SecureStore.setItemAsync(key, val);
  } catch (e) {
    console.error('Error setting token in SecureStore', e);
  }
};

export const deleteStoredToken = async (key) => {
  if (Platform.OS === 'web') {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing token from localStorage', e);
    }
    return;
  }
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (e) {
    console.error('Error removing token from SecureStore', e);
  }
};
