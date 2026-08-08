import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';
import { X, Gift } from 'lucide-react-native';
import { theme } from '../utils/theme';

export const FindLocationModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerTitle}>find location</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X color={theme.colors.white} size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.langText}>हिन्दी</Text>
            <Text style={styles.mainText}>Please purchase a sticker to unlock this feature.</Text>
            <Text style={styles.noteText}>Note : Free trial has been expired.</Text>
            <TouchableOpacity style={styles.actionButton} onPress={onClose}>
              <Text style={styles.actionButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const OfferModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Gift color={theme.colors.white} size={20} style={{ marginRight: 8 }} />
              <Text style={styles.headerTitle}>OFFER</Text>
              <Gift color={theme.colors.white} size={20} style={{ marginLeft: 8 }} />
            </View>
            <TouchableOpacity onPress={onClose} style={[styles.closeButton, { position: 'absolute', right: 10 }]}>
              <X color={theme.colors.white} size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.offerSubtitle}>Please Enter your Details</Text>
            
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Rahul" placeholderTextColor="#aaa" />
            
            <Text style={styles.label}>Your Registered Number</Text>
            <TextInput style={styles.input} placeholder="9760377133" keyboardType="phone-pad" placeholderTextColor="#aaa" />
            
            <Text style={styles.label}>City</Text>
            <TextInput style={styles.input} placeholder="Dehradun" placeholderTextColor="#aaa" />
            
            <TouchableOpacity style={styles.availButton} onPress={onClose}>
              <Text style={styles.availButtonText}>AVAIL OFFER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const IvrCallModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.ivrHeader}>
            <Text style={styles.ivrTitle}>IVR CALL</Text>
          </View>
          <View style={[styles.modalBody, { paddingTop: 40 }]}>
            <Text style={styles.ivrText}>Do you really want to call the owner of the Safety QR ?</Text>
            <View style={styles.ivrButtons}>
              <TouchableOpacity style={styles.btnNo} onPress={onClose}>
                <Text style={styles.btnTextNo}>NO</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnYes} onPress={onConfirm}>
                <Text style={styles.btnTextYes}>YES</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const PermissionModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerTitle}>PERMISSION</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X color={theme.colors.white} size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.permText}>
              To receive emergency notification immediately, even when the app is in the background, please enable 'Display pop-ups while in background' permission.
            </Text>
            <Text style={styles.permStepsTitle}>Steps:</Text>
            <Text style={styles.permSteps}>
              1. Open Settings{'\n'}
              2. Go to 'Apps'{'\n'}
              3. Tap on 'Special app access'{'\n'}
              4. Look for 'Display pop-ups while in background' and enable it
            </Text>
            <View style={styles.permButtons}>
              <TouchableOpacity style={styles.permBtn} onPress={onClose}>
                <Text style={styles.permBtnText}>Video guide</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.permBtn} onPress={onClose}>
                <Text style={styles.permBtnText}>Open Settings</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    backgroundColor: theme.colors.white,
    borderRadius: 15,
    overflow: 'hidden',
  },
  modalHeader: {
    backgroundColor: '#0B1A33', // VKawach Dark Blue
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#C9A84C', // VKawach Gold
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  closeButton: {
    position: 'absolute',
    right: 15,
  },
  modalBody: {
    padding: 20,
    alignItems: 'center',
  },
  langText: {
    color: '#0B1A33',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  mainText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  noteText: {
    fontSize: 16,
    color: '#0B1A33',
    marginBottom: 30,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: '#0B1A33',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionButtonText: {
    color: '#0B1A33',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  offerSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#0B1A33',
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    color: '#333',
  },
  availButton: {
    backgroundColor: '#0B1A33',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  availButtonText: {
    color: '#C9A84C',
    fontSize: 16,
    fontWeight: 'bold',
  },

  ivrHeader: {
    backgroundColor: '#0B1A33',
    padding: 15,
    borderBottomRightRadius: 20,
    alignSelf: 'flex-start',
    width: '40%',
  },
  ivrTitle: {
    color: '#C9A84C',
    fontWeight: 'bold',
    fontSize: 16,
  },
  ivrText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 30,
  },
  ivrButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  btnNo: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ff4444',
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: '#fff0f0',
  },
  btnYes: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#00C851',
    padding: 12,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
    backgroundColor: '#f0fff0',
  },
  btnTextNo: {
    color: '#ff4444',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnTextYes: {
    color: '#00C851',
    fontWeight: 'bold',
    fontSize: 16,
  },

  permText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 22,
  },
  permStepsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  permSteps: {
    fontSize: 16,
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 30,
    lineHeight: 24,
  },
  permButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  permBtn: {
    flex: 1,
    backgroundColor: '#0B1A33',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  permBtnText: {
    color: '#C9A84C',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
