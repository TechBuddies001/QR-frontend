import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Camera, CameraView } from 'expo-camera';
import { ShieldCheck, X } from 'lucide-react-native';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import { theme } from '../utils/theme';


export default function ScanQRScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = async ({ type, data }) => {
    if (scanned || loading) return;
    setScanned(true);
    setLoading(true);

    try {
      // Scanned data might be a full URL, e.g. https://tarkshyasolution.in/scan/KA01AB1234
      // or https://tarkshyasolution.in/tag/KA01AB1234
      // Let's extract the code from the URL, or use the raw string if it's just the code itself.
      let tagCode = data;
      if (data.includes('/scan/')) {
        tagCode = data.split('/scan/').pop();
      } else if (data.includes('/tag/')) {
        tagCode = data.split('/tag/').pop();
      }

      // Clean query parameters if any
      if (tagCode.includes('?')) {
        tagCode = tagCode.split('?')[0];
      }

      tagCode = tagCode.trim();

      // Fetch tag information to check ownership/status
      try {
        const response = await api.get(`/public/tag/${tagCode}`);
        const tagData = response.data.tag;

        if (tagData) {
          // Check if tag is owned by another user or is unregistered
          // Note: response.data.tag may not show userId in public payload,
          // but we can check if it requires a registration prompt or direct settings
          // If the tag belongs to the user, let's try to edit it. We can verify if we can edit
          // it by checking if it matches any tag in the user's dashboard, or just check the ownerName/phone.
          // Let's check: if tagData exists and belongs to someone else, we show VisitorTagScreen.
          // If it matches user's phone, we can edit it.
          const userPhone = user?.phone;
          const isOwnTag = tagData.ownerPhone === userPhone || (user?.tags && user.tags.some(t => t.tagCode === tagCode));

          if (isOwnTag) {
            Alert.alert(
              'Your Tag Scanned',
              'This tag is already registered to your account. Open settings to edit?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    setScanned(false);
                    setLoading(false);
                  },
                  style: 'cancel',
                },
                {
                  text: 'Edit Settings',
                  onPress: () => {
                    navigation.navigate('TagSettings', { tag: tagData });
                    setScanned(false);
                    setLoading(false);
                  },
                },
              ]
            );
          } else {
            // Not user's tag, navigate to visitor screen
            navigation.navigate('VisitorTag', { tagCode, tag: tagData });
            setScanned(false);
            setLoading(false);
          }
        }
      } catch (err) {
        // Tag doesn't exist or is not registered, proceed to registration check
        Alert.alert(
          'Unregistered Tag',
          `Would you like to register tag code: "${tagCode}" to your profile?`,
          [
            {
              text: 'Cancel',
              onPress: () => {
                setScanned(false);
                setLoading(false);
              },
              style: 'cancel',
            },
            {
              text: 'Register',
              onPress: () => registerTag(tagCode),
            },
          ]
        );
      }
    } catch (err) {
      console.error(err);
      setScanned(false);
      setLoading(false);
    }
  };

  const registerTag = async (tagCode) => {
    try {
      const res = await api.post('/user/register-tag', { tagCode });
      Alert.alert('Success', 'Tag linked successfully to your profile!', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Dashboard', { refresh: true });
            setScanned(false);
          },
        },
      ]);
    } catch (err) {
      console.error(err);
      const errMsg = err.response?.data?.error || 'Failed to link tag';
      Alert.alert('Registration Error', errMsg);
      setScanned(false);
    } finally {
      setLoading(false);
    }
  };


  if (hasPermission === null) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.infoText}>Requesting camera permission...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>No access to camera. Enable camera permissions in settings to scan QR Codes.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        facing="back"
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      
      {/* Overlay controls */}
      <View style={styles.overlay}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
            <X size={24} color={theme.colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Scan V-KAWACH Tag</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Scan Frame */}
        <View style={styles.scanContainer}>
          <View style={styles.scanFrame} />
          <Text style={styles.scanInstructions}>
            Align the QR code inside the frame to scan and register
          </Text>
        </View>

        {/* Bottom Banner */}
        <View style={styles.bottomBanner}>
          <ShieldCheck size={18} color={theme.colors.primary} />
          <Text style={styles.bottomText}>Privacy Shield Activated</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: theme.colors.background,
  },
  infoText: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 16,
    color: theme.colors.danger,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 22,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  closeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: theme.colors.white,
  },
  scanContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanFrame: {
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    borderRadius: 24,
    backgroundColor: 'transparent',
  },
  scanInstructions: {
    color: theme.colors.white,
    marginTop: 24,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 20,
  },
  bottomBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 16,
    gap: 8,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  bottomText: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
});
