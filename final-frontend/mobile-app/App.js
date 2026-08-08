import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthProvider, AuthContext } from './src/context/AuthContext';
import { theme } from './src/utils/theme';
import CustomDrawerContent from './src/components/CustomDrawerContent';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ScanQRScreen from './src/screens/ScanQRScreen';
import TagSettingsScreen from './src/screens/TagSettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import VisitorTagScreen from './src/screens/VisitorTagScreen';
import TrackingScreen from './src/screens/TrackingScreen';
import LogsScreen from './src/screens/LogsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 300,
        },
      }}
    >
      <Drawer.Screen name="DashboardMain" component={DashboardScreen} />
    </Drawer.Navigator>
  );
}

function AppNavigation() {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.primary }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontWeight: '800',
        },
        cardStyle: { backgroundColor: theme.colors.background },
      }}
    >
      {user === null ? (
        // Auth Stack
        <>
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Signup" 
            component={SignupScreen} 
            options={{ headerShown: false }} 
          />
        </>
      ) : (
        // App Stack
        <>
          <Stack.Screen 
            name="Dashboard" 
            component={DrawerNavigator} 
            options={{ 
              headerShown: false, 
            }} 
          />
          <Stack.Screen 
            name="ScanQR" 
            component={ScanQRScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="TagSettings" 
            component={TagSettingsScreen} 
            options={{ 
              title: 'Tag Configuration',
              headerBackTitleVisible: false,
            }} 
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ 
              title: 'My Profile',
              headerBackTitleVisible: false,
            }} 
          />
          <Stack.Screen 
            name="VisitorTag" 
            component={VisitorTagScreen} 
            options={{ 
              title: 'Visitor Pass',
              headerBackTitleVisible: false,
            }} 
          />
          <Stack.Screen 
            name="Tracking" 
            component={TrackingScreen} 
            options={{ 
              title: 'Live Tracking',
              headerBackTitleVisible: false,
            }} 
          />
          <Stack.Screen 
            name="Logs" 
            component={LogsScreen} 
            options={{ 
              title: 'Activity Logs',
              headerBackTitleVisible: false,
            }} 
          />
          <Stack.Screen 
            name="ProductDetails" 
            component={ProductDetailsScreen} 
            options={{ 
              title: 'Product Details',
              headerShown: false,
            }} 
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <AppNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
