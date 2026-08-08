import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { User, QrCode, ShoppingBag, Image as ImageIcon, Share2, Wallet, ToggleLeft, PhoneOff, BookOpen, PhoneCall, Bell, FileText, AlertCircle, LogOut } from 'lucide-react-native';
import { theme } from '../utils/theme';
import { AuthContext } from '../context/AuthContext';

export default function CustomDrawerContent(props) {
  const { logout } = React.useContext(AuthContext);

  const menuItems = [
    { label: 'Profile', icon: <User size={22} color={theme.colors.textDark} />, route: 'Profile' },
    { label: 'Activate New QR Sticker', icon: <QrCode size={22} color={theme.colors.textDark} /> },
    { label: 'My Order/Product', icon: <ShoppingBag size={22} color={theme.colors.textDark} /> },
    { label: 'Media', icon: <ImageIcon size={22} color={theme.colors.textDark} /> },
    { label: 'Share Tap', icon: <Share2 size={22} color={theme.colors.textDark} /> },
    { label: 'Wallet', icon: <Wallet size={22} color={theme.colors.textDark} /> },
    { label: 'Active/Deactive QR', icon: <ToggleLeft size={22} color={theme.colors.textDark} /> },
    { label: 'Block A Number', icon: <PhoneOff size={22} color={theme.colors.textDark} /> },
    { label: 'My Story', icon: <BookOpen size={22} color={theme.colors.textDark} /> },
    { label: 'Call log', icon: <PhoneCall size={22} color={theme.colors.textDark} /> },
    { label: 'Notification', icon: <Bell size={22} color={theme.colors.textDark} /> },
    { label: 'Terms & Policy', icon: <FileText size={22} color={theme.colors.textDark} /> },
    { label: 'Grievances', icon: <AlertCircle size={22} color={theme.colors.textDark} /> },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        {/* Header section matching screenshot */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>VK</Text>
          </View>
          <Text style={styles.userName}>Rahul</Text>
          <Text style={styles.subText}>Total Referral Download :0</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={() => item.route ? props.navigation.navigate(item.route) : null}
            >
              <View style={styles.iconContainer}>{item.icon}</View>
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          
          {/* Logout separate */}
          <TouchableOpacity style={styles.menuItem} onPress={logout}>
            <View style={styles.iconContainer}>
              <LogOut size={22} color={theme.colors.textDark} />
            </View>
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: theme.colors.white,
  },
  logoContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#0B1A33', // VKawach dark blue
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#C9A84C', // VKawach gold
  },
  logoText: {
    color: '#C9A84C',
    fontSize: 28,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0B1A33',
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
  menuContainer: {
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 30,
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: theme.colors.textDark,
  },
});
