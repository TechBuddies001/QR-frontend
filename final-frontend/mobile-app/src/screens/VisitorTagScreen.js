import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  Linking,
  ActivityIndicator
} from 'react-native';
import {
  Shield,
  Phone,
  TriangleAlert,
  Car,
  Info,
  MapPin,
  User,
  ShieldCheck,
  BellRing,
  Camera
} from 'lucide-react-native';
import api from '../utils/api';
import { theme } from '../utils/theme';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';

export default function VisitorTagScreen({ route, navigation }) {
  const { tagCode, tag } = route.params;
  const [scannerPhone, setScannerPhone] = useState('');
  const [showCallInput, setShowCallInput] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [exophone, setExophone] = useState('');

  const handleWrongParkingAlert = async () => {
    try {
      // 1. Request Permissions
      const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();

      if (cameraStatus !== 'granted' || locationStatus !== 'granted') {
        Alert.alert('Permission Required', 'Camera and Location permissions are required to report wrong parking effectively.');
        return;
      }

      // 2. Capture Image
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      });

      if (result.canceled) {
        return; // User cancelled
      }

      setActionLoading(true);

      // 3. Get Location
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Trigger the public alert endpoint (Wrong Parking Alert)
      const res = await api.post(`/public/tag/${tagCode}/alert`, {
        scannerPhone: scannerPhone || 'A concerned citizen',
        lat: latitude,
        lng: longitude,
        imageUri: result.assets[0].uri // Note: If the backend supports image uploads in future, we can use formData. For now, sending the URI or base64.
      });
      
      if (res.data.success || res.status === 200 || res.status === 201) {
        Alert.alert(
          'Alert Sent',
          'Wrong parking notification has been dispatched to the vehicle owner immediately via V-KAWACH Secure Alert System.'
        );
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', err.response?.data?.error || 'Failed to dispatch alert. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleAccidentAlert = async () => {
    Alert.alert(
      'Confirm Emergency Alert',
      'Are you sure you want to report an accident? This will instantly trigger emergency notifications to the owner\'s emergency contacts.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Trigger Alert',
          style: 'destructive',
          onPress: async () => {
            setActionLoading(true);
            try {
              const res = await api.post(`/public/tag/${tagCode}/emergency`, {
                scannerPhone: scannerPhone || 'Emergency Reporter'
              });
              if (res.data.success) {
                Alert.alert(
                  'Emergency Notified',
                  'Emergency contacts have been notified successfully. Immediate help requested.'
                );
              }
            } catch (err) {
              console.error(err);
              Alert.alert('Error', 'Failed to notify emergency contacts. Please call standard helpline numbers.');
            } finally {
              setActionLoading(false);
            }
          }
        }
      ]
    );
  };

  const handleCallRequest = async () => {
    if (!scannerPhone || !/^[6-9]\d{9}$/.test(scannerPhone)) {
      Alert.alert('Invalid Number', 'Please enter a valid 10-digit Indian mobile number to establish a secure connection.');
      return;
    }

    setActionLoading(true);
    try {
      const res = await api.post(`/public/tag/${tagCode}/call`, { scannerPhone });
      if (res.data.success && res.data.exophone) {
        setExophone(res.data.exophone);
        // Dial the exophone number
        Linking.openURL(`tel:${res.data.exophone}`);
      } else {
        Alert.alert('Call Masking Error', 'Unable to fetch secure bridging number.');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to initiate secure call. Please check your connection.');
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Shield size={32} color={theme.colors.primary} />
          </View>
          <Text style={styles.logoText}>V-KAWACH</Text>
          <Text style={styles.logoSubtext}>SECURE IDENTITY SYSTEM</Text>
          
          <View style={styles.tagBadge}>
            <ShieldCheck size={14} color={theme.colors.primary} />
            <Text style={styles.tagBadgeText}>VERIFIED OWNER IDENTIFIED</Text>
          </View>
        </View>

        {/* Tag Info Card */}
        <View style={styles.tagCard}>
          <View style={styles.tagRow}>
            <View style={styles.iconBackground}>
              <Car size={24} color={theme.colors.primary} />
            </View>
            <View style={styles.tagDetails}>
              <Text style={styles.tagLabel}>PROTECTED VEHICLE / ASSET</Text>
              <Text style={styles.tagValue}>
                {tag.assetModel ? `${tag.assetModel} (${tag.assetColor})` : 'Vehicle Asset'}
              </Text>
              <Text style={styles.tagCode}>ID Code: {tagCode}</Text>
            </View>
          </View>
          
          {tag.customMessage && (
            <View style={styles.messageBox}>
              <Info size={16} color={theme.colors.primary} />
              <Text style={styles.messageText}>"{tag.customMessage}"</Text>
            </View>
          )}
        </View>

        {/* Security Warning Message */}
        <View style={styles.securityBanner}>
          <ShieldCheck size={16} color={theme.colors.success} />
          <Text style={styles.securityText}>100% Privacy Masked. Your call will be anonymous.</Text>
        </View>

        {/* Actions Section */}
        <View style={styles.actionsCard}>
          <Text style={styles.actionsTitle}>Report or Contact Owner</Text>

          {/* Action 1: Wrong Parking */}
          <TouchableOpacity style={styles.wrongParkingBtn} onPress={handleWrongParkingAlert} disabled={actionLoading}>
            <BellRing size={20} color={theme.colors.white} />
            <View style={styles.btnInfo}>
              <Text style={styles.wrongParkingBtnText}>REPORT WRONG PARKING</Text>
              <Text style={styles.btnDesc}>Sends instant siren and location alert to owner</Text>
            </View>
          </TouchableOpacity>

          {/* Action 2: Accident / Emergency Support */}
          <TouchableOpacity style={styles.accidentBtn} onPress={handleAccidentAlert} disabled={actionLoading}>
            <TriangleAlert size={20} color={theme.colors.white} />
            <View style={styles.btnInfo}>
              <Text style={styles.accidentBtnText}>ACCIDENT / EMERGENCY HELP</Text>
              <Text style={styles.btnDesc}>Alert family members & emergency contacts immediately</Text>
            </View>
          </TouchableOpacity>

          {/* Action 3: Secure Masked Call */}
          <View style={styles.callSection}>
            {!showCallInput ? (
              <TouchableOpacity style={styles.callBtn} onPress={() => setShowCallInput(true)} disabled={actionLoading}>
                <Phone size={20} color={theme.colors.primary} />
                <Text style={styles.callBtnText}>SECURE CALL TO OWNER</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.callForm}>
                <Text style={styles.inputLabel}>Enter Your Mobile Number to connect safely</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. 9876543210"
                  keyboardType="phone-pad"
                  value={scannerPhone}
                  onChangeText={(val) => setScannerPhone(val.replace(/\D/g, '').slice(0, 10))}
                />
                
                <View style={styles.callFormActions}>
                  <TouchableOpacity style={styles.callSubmitBtn} onPress={handleCallRequest} disabled={actionLoading}>
                    {actionLoading ? (
                      <ActivityIndicator size="small" color={theme.colors.primary} />
                    ) : (
                      <Text style={styles.callSubmitBtnText}>CONNECT CALL</Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.callCancelBtn} onPress={() => setShowCallInput(false)}>
                    <Text style={styles.callCancelBtnText}>CANCEL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>

        {/* Standard Direct Helplines */}
        <View style={styles.helplineSection}>
          <Text style={styles.helplineTitle}>Direct Emergency Numbers</Text>
          <View style={styles.helplineRow}>
            <TouchableOpacity style={styles.helplineCard} onPress={() => Linking.openURL('tel:112')}>
              <Shield size={18} color="#2563EB" />
              <Text style={styles.helplineLabel}>POLICE (112)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.helplineCard} onPress={() => Linking.openURL('tel:108')}>
              <ActivityIndicator size="small" color="#DC2626" style={{ display: 'none' }} />
              <Text style={[styles.helplineLabel, { color: '#DC2626' }]}>AMBULANCE (108)</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.backBtnText}>RETURN TO DASHBOARD</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
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
    marginTop: 20,
    marginBottom: 24,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '900',
    color: theme.colors.primary,
    marginTop: 12,
    letterSpacing: 2,
  },
  logoSubtext: {
    fontSize: 10,
    fontWeight: '700',
    color: '#888888',
    letterSpacing: 3,
    marginTop: 2,
  },
  tagBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2F6',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 12,
    gap: 6,
  },
  tagBadgeText: {
    fontSize: 9,
    fontWeight: '800',
    color: theme.colors.primary,
  },
  tagCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EEF2F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 16,
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconBackground: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#EEF2F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagDetails: {
    flex: 1,
  },
  tagLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: theme.colors.primary,
    letterSpacing: 1,
  },
  tagValue: {
    fontSize: 18,
    fontWeight: '800',
    color: theme.colors.primary,
    marginTop: 2,
  },
  tagCode: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
    marginTop: 2,
  },
  messageBox: {
    flexDirection: 'row',
    backgroundColor: '#FDFBF7',
    padding: 14,
    borderRadius: 16,
    marginTop: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: '#FEF3C7',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.primary,
    fontStyle: 'italic',
    flex: 1,
  },
  securityBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECFDF5',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: '#A7F3D0',
    marginBottom: 20,
  },
  securityText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#065F46',
  },
  actionsCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EEF2F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 20,
    gap: 16,
  },
  actionsTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: theme.colors.primary,
    marginBottom: 4,
  },
  wrongParkingBtn: {
    backgroundColor: '#EA580C',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    gap: 12,
  },
  wrongParkingBtnText: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  accidentBtn: {
    backgroundColor: '#DC2626',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    gap: 12,
  },
  accidentBtnText: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  btnInfo: {
    flex: 1,
  },
  btnDesc: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
  callSection: {
    marginTop: 4,
  },
  callBtn: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 16,
    gap: 10,
  },
  callBtnText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  callForm: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4B5563',
    marginBottom: 8,
  },
  input: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.primary,
    textAlign: 'center',
  },
  callFormActions: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 10,
  },
  callSubmitBtn: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callSubmitBtnText: {
    color: theme.colors.primary,
    fontWeight: '800',
    fontSize: 13,
  },
  callCancelBtn: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callCancelBtnText: {
    color: '#4B5563',
    fontWeight: '800',
    fontSize: 13,
  },
  helplineSection: {
    marginBottom: 20,
  },
  helplineTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: theme.colors.primary,
    marginBottom: 12,
  },
  helplineRow: {
    flexDirection: 'row',
    gap: 12,
  },
  helplineCard: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEF2F6',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  helplineLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#2563EB',
  },
  backBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: theme.colors.primary,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  backBtnText: {
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
