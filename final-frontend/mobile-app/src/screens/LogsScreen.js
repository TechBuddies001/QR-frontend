import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { theme } from '../utils/theme';
import { ArrowLeft, ClipboardList, MapPin } from 'lucide-react-native';

const dummyLogs = [
  { id: '1', tagCode: 'PRO-CAR-01', action: 'Scan Alert', location: 'Delhi, India', date: 'Oct 24, 10:30 AM', type: 'warning' },
  { id: '2', tagCode: 'PRO-BIKE-01', action: 'Wrong Parking Reported', location: 'Noida Sector 62', date: 'Oct 23, 08:15 PM', type: 'error' },
  { id: '3', tagCode: 'PRO-CAR-01', action: 'Location Tracked', location: 'Gurugram', date: 'Oct 22, 11:45 AM', type: 'info' },
];

export default function LogsScreen({ navigation }) {
  const renderLog = ({ item }) => (
    <View style={styles.logCard}>
      <View style={styles.logHeader}>
        <Text style={styles.logAction}>{item.action}</Text>
        <Text style={styles.logDate}>{item.date}</Text>
      </View>
      <Text style={styles.logCode}>Tag: {item.tagCode}</Text>
      <View style={styles.logLocationRow}>
        <MapPin size={12} color="#6B7280" />
        <Text style={styles.logLocation}>{item.location}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <ArrowLeft size={24} color={theme.colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>System Logs</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <ClipboardList size={20} color={theme.colors.primary} />
          <Text style={styles.pageTitle}>Recent Activity</Text>
        </View>

        <FlatList
          data={dummyLogs}
          keyExtractor={(item) => item.id}
          renderItem={renderLog}
          contentContainerStyle={styles.listContent}
        />
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
  content: {
    flex: 1,
    padding: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: theme.colors.primary,
  },
  listContent: {
    paddingBottom: 40,
  },
  logCard: {
    backgroundColor: theme.colors.white,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEF2F6',
    marginBottom: 12,
  },
  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logAction: {
    fontSize: 14,
    fontWeight: '800',
    color: theme.colors.primary,
  },
  logDate: {
    fontSize: 11,
    color: '#6B7280',
    fontWeight: '600',
  },
  logCode: {
    fontSize: 12,
    fontWeight: '700',
    color: '#374151',
    marginTop: 4,
  },
  logLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  logLocation: {
    fontSize: 11,
    color: '#6B7280',
    fontWeight: '600',
  }
});
