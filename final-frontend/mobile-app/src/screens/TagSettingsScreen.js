import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
  Switch
} from 'react-native';
import { Plus, Trash2, Shield, Phone, User, QrCode } from 'lucide-react-native';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import api from '../utils/api';
import { theme } from '../utils/theme';

export default function TagSettingsScreen({ route, navigation }) {
  const { tag } = route.params;

  const [ownerName, setOwnerName] = useState(tag.ownerName || '');
  const [emergencyContact, setEmergencyContact] = useState(tag.emergencyContact || '');
  const [dynamicFields, setDynamicFields] = useState([]);
  const [newLabel, setNewLabel] = useState('');
  const [newValue, setNewValue] = useState('');
  const [loading, setLoading] = useState(false);

  // Parse existing dynamic data
  useEffect(() => {
    if (tag.dynamicData) {
      try {
        const parsed = JSON.parse(tag.dynamicData);
        if (Array.isArray(parsed)) {
          setDynamicFields(parsed);
        }
      } catch (e) {
        console.error('Error parsing dynamicData', e);
      }
    }
  }, [tag.dynamicData]);

  const handleAddField = () => {
    if (!newLabel.trim() || !newValue.trim()) {
      Alert.alert('Error', 'Please enter both label and value');
      return;
    }

    setDynamicFields([...dynamicFields, { label: newLabel.trim(), value: newValue.trim() }]);
    setNewLabel('');
    setNewValue('');
  };

  const handleRemoveField = (index) => {
    const updated = [...dynamicFields];
    updated.splice(index, 1);
    setDynamicFields(updated);
  };

  const handleSave = async () => {
    if (!ownerName.trim()) {
      Alert.alert('Error', 'Owner name is required');
      return;
    }

    setLoading(true);

    try {
      // Use FormData to match multer expectations in backend
      const formData = new FormData();
      formData.append('ownerName', ownerName.trim());
      formData.append('emergencyContact', emergencyContact.trim());
      formData.append('dynamicData', JSON.stringify(dynamicFields));

      const res = await api.put(`/user/update-tag/${tag.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Alert.alert('Success', 'Tag settings updated successfully!', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Dashboard', { refresh: true });
          },
        },
      ]);
    } catch (err) {
      console.error(err);
      const errMsg = err.response?.data?.error || 'Failed to update tag settings';
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
          
          {/* Header Card */}
          <View style={styles.tagHeaderCard}>
            <QrCode size={40} color={theme.colors.primary} />
            <View style={styles.tagHeaderInfo}>
              <Text style={styles.tagHeaderTitle}>{tag.customAssetType || tag.assetType}</Text>
              <Text style={styles.tagHeaderSub}>Code: {tag.tagCode}</Text>
            </View>
          </View>

          {/* Section: Owner Information */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Owner Details</Text>

            <CustomInput
              label="Owner Name"
              placeholder="e.g. Rahul Sharma"
              value={ownerName}
              onChangeText={setOwnerName}
            />

            <CustomInput
              label="Emergency Phone"
              placeholder="e.g. 9876543210"
              value={emergencyContact}
              onChangeText={setEmergencyContact}
              keyboardType="phone-pad"
            />
          </View>

          {/* Section: Custom Dynamic Attributes */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Custom Attributes</Text>
            <Text style={styles.sectionDesc}>
              Add custom details that will display when someone scans your QR code (e.g., Vehicle Model, Flat No., or Custom Message).
            </Text>

            {/* List of current dynamic fields */}
            {dynamicFields.map((field, index) => (
              <View key={index} style={styles.fieldRow}>
                <View style={styles.fieldInfo}>
                  <Text style={styles.fieldLabel}>{field.label}</Text>
                  <Text style={styles.fieldValue}>{field.value}</Text>
                </View>
                <TouchableOpacity onPress={() => handleRemoveField(index)} style={styles.removeBtn}>
                  <Trash2 size={18} color={theme.colors.danger} />
                </TouchableOpacity>
              </View>
            ))}

            {/* Add new field form */}
            <View style={styles.addFieldForm}>
              <Text style={styles.addFieldTitle}>Add New Field</Text>
              <View style={styles.inputRow}>
                <CustomInput
                  placeholder="Label (e.g. Vehicle Model)"
                  value={newLabel}
                  onChangeText={setNewLabel}
                  style={styles.halfInput}
                />
                <CustomInput
                  placeholder="Value (e.g. Honda City)"
                  value={newValue}
                  onChangeText={setNewValue}
                  style={styles.halfInput}
                />
              </View>
              <TouchableOpacity style={styles.addFieldBtn} onPress={handleAddField}>
                <Plus size={16} color={theme.colors.white} />
                <Text style={styles.addFieldBtnText}>Add Attribute</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Action buttons */}
          <CustomButton
            title="Save Settings"
            onPress={handleSave}
            loading={loading}
            variant="primary"
            style={styles.saveBtn}
          />

          <CustomButton
            title="Cancel"
            onPress={() => navigation.goBack()}
            variant="outline"
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
  tagHeaderCard: {
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 16,
  },
  tagHeaderInfo: {
    flex: 1,
  },
  tagHeaderTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: theme.colors.white,
    textTransform: 'capitalize',
  },
  tagHeaderSub: {
    fontSize: 13,
    color: theme.colors.primary,
    fontWeight: '600',
    marginTop: 2,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EEF2F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 8,
    elevation: 2,
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
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#F3F4F6',
  },
  fieldInfo: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#888888',
    textTransform: 'uppercase',
  },
  fieldValue: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.colors.primary,
    marginTop: 4,
  },
  removeBtn: {
    padding: 8,
  },
  addFieldForm: {
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1.5,
    borderColor: '#F3F4F6',
  },
  addFieldTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.primary,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
  },
  halfInput: {
    flex: 1,
    marginVertical: 4,
  },
  addFieldBtn: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 8,
    gap: 6,
  },
  addFieldBtnText: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: 13,
  },
  saveBtn: {
    marginTop: 10,
  },
});
