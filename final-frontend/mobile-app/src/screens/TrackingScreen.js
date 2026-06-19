import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';

let MapView, Marker;
if (Platform.OS !== 'web') {
  const Maps = require('react-native-maps');
  MapView = Maps.default;
  Marker = Maps.Marker;
}
import { theme } from '../utils/theme';
import { ArrowLeft, ShieldCheck } from 'lucide-react-native';
import * as Location from 'expo-location';

export default function TrackingScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <ArrowLeft size={24} color={theme.colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Live Tracking</Text>
      </View>

      <View style={styles.statusBanner}>
        <ShieldCheck size={16} color={theme.colors.success} />
        <Text style={styles.statusText}>Secure Real-time Tracking Active</Text>
      </View>

      <View style={styles.mapContainer}>
        {location ? (
          Platform.OS === 'web' ? (
            <View style={[styles.loadingContainer, { backgroundColor: '#E5E7EB' }]}>
              <Text style={styles.loadingText}>Map view is not supported on the web version.</Text>
              <Text style={{fontSize: 12, marginTop: 4}}>Latitude: {location.coords.latitude.toFixed(4)}</Text>
              <Text style={{fontSize: 12}}>Longitude: {location.coords.longitude.toFixed(4)}</Text>
            </View>
          ) : (
            <MapView 
              style={styles.map}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker 
                coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
                title="Your Device"
                description="Protected by V-KAWACH"
                pinColor={theme.colors.primary}
              />
            </MapView>
          )
        ) : (
          <View style={styles.loadingContainer}>
            {errorMsg ? (
              <Text style={styles.errorText}>{errorMsg}</Text>
            ) : (
              <>
                <ActivityIndicator size="large" color={theme.colors.primary} />
                <Text style={styles.loadingText}>Acquiring GPS Signal...</Text>
              </>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingTop: 54,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: theme.colors.border,
  },
  backBtn: {
    padding: 4,
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: theme.colors.primary,
    letterSpacing: 1,
  },
  statusBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECFDF5',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#A7F3D0',
    gap: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#065F46',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
  },
  errorText: {
    color: '#DC2626',
    fontWeight: '700',
  }
});
