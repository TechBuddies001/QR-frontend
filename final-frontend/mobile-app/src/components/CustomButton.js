import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { theme } from '../utils/theme';

export const CustomButton = ({ title, onPress, variant = 'primary', loading = false, disabled = false, style }) => {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isOutline = variant === 'outline';
  const isDanger = variant === 'danger';

  const buttonStyle = [
    styles.btn,
    isPrimary && styles.primaryBtn,
    isSecondary && styles.secondaryBtn,
    isOutline && styles.outlineBtn,
    isDanger && styles.dangerBtn,
    (disabled || loading) && styles.disabledBtn,
    style,
  ];

  const textStyle = [
    styles.text,
    isPrimary && styles.primaryText,
    isSecondary && styles.secondaryText,
    isOutline && styles.outlineText,
    isDanger && styles.dangerText,
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled || loading}
      style={buttonStyle}
    >
      {loading ? (
        <ActivityIndicator size="small" color={isOutline ? theme.colors.primary : theme.colors.white} />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryBtn: {
    backgroundColor: theme.colors.primary,
  },
  secondaryBtn: {
    backgroundColor: theme.colors.primary,
  },
  outlineBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: theme.colors.border,
    elevation: 0,
    shadowOpacity: 0,
  },
  dangerBtn: {
    backgroundColor: theme.colors.danger,
  },
  disabledBtn: {
    backgroundColor: '#E5E7EB',
    borderColor: '#E5E7EB',
    elevation: 0,
    shadowOpacity: 0,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  primaryText: {
    color: theme.colors.primary,
  },
  secondaryText: {
    color: theme.colors.primary,
  },
  outlineText: {
    color: theme.colors.primary,
  },
  dangerText: {
    color: theme.colors.white,
  },
  disabledText: {
    color: '#9CA3AF',
  },
});
