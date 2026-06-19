import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { User, Lock, LogOut } from 'lucide-react-native';
import { AuthContext } from '../context/AuthContext';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import api from '../utils/api';
import { theme } from '../utils/theme';

export default function ProfileScreen() {
  const { user, logout, updateProfileState } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Name is required');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: name.trim(),
        phone: phone.trim(),
      };

      if (currentPassword && newPassword) {
        payload.currentPassword = currentPassword;
        payload.newPassword = newPassword;
      }

      const res = await api.post('/user/settings', payload);
      
      // Update global context state
      updateProfileState(res.data.user);

      Alert.alert('Success', 'Profile settings updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      console.error(err);
      const errMsg = err.response?.data?.error || 'Failed to update settings';
      Alert.alert('Update Error', errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.avatarContainer}>
              <User size={30} color={theme.colors.primary} />
            </View>
            <Text style={styles.userEmail}>{user?.email}</Text>
          </View>

          {/* Section: Personal Info */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Personal Details</Text>
            <CustomInput
              label="Full Name"
              placeholder="e.g. Rahul Sharma"
              value={name}
              onChangeText={setName}
            />
            <CustomInput
              label="Phone Number"
              placeholder="e.g. 9876543210"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>

          {/* Section: Password Update */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Change Password</Text>
            <Text style={styles.sectionDesc}>
              Leave blank if you do not want to modify your password.
            </Text>
            <CustomInput
              label="Current Password"
              placeholder="Enter current password"
              value={currentPassword}
              onChangeText={setCurrentPassword}
              secureTextEntry
            />
            <CustomInput
              label="New Password"
              placeholder="Enter new password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
          </View>

          {/* Actions */}
          <CustomButton
            title="Save Changes"
            onPress={handleUpdateProfile}
            loading={loading}
            variant="primary"
            style={styles.saveBtn}
          />

          <CustomButton
            title="Sign Out"
            onPress={logout}
            variant="outline"
            style={styles.logoutBtn}
          />

          <View style={{ height: 40 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatarContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  userEmail: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EEF2F6',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: theme.colors.primary,
    marginBottom: 12,
  },
  sectionDesc: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 18,
  },
  saveBtn: {
    marginTop: 10,
  },
  logoutBtn: {
    borderColor: theme.colors.danger,
    borderWidth: 1.5,
    marginTop: 10,
  },
});
