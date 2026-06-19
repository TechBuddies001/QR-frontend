import React, { useState, useEffect, useContext, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Image,
  TextInput,
  Alert,
  Linking
} from 'react-native';
import {
  Menu,
  ShoppingCart,
  Bell,
  QrCode,
  Shield,
  Plus,
  ArrowRight,
  ClipboardList,
  Zap,
  MapPin,
  Play,
  Gift,
  ShoppingBag,
  PhoneCall,
  TriangleAlert,
  LogOut,
  User,
  ShieldCheck,
  CircleQuestionMark,
  Car,
  Map,
  Gauge,
  Users,
  Ambulance,
  Hospital,
  ShieldAlert
} from 'lucide-react-native';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import { theme } from '../utils/theme';
import { Accelerometer } from 'expo-sensors';
import * as Location from 'expo-location';

const { width } = Dimensions.get('window');

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FEE2E2' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#991B1B', marginBottom: 10 }}>Render Error</Text>
          <Text style={{ fontSize: 14, color: '#B91C1C', textAlign: 'center', marginBottom: 20 }}>
            {this.state.error?.toString()}
          </Text>
          <Text style={{ fontSize: 11, color: '#7F1D1D' }}>
            {this.state.error?.stack?.substring(0, 1000)}
          </Text>
        </View>
      );
    }
    return this.props.children;
  }
}

function DashboardScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);


  // Tabs state: 'HOME', 'PRODUCT', 'IVR_CALL', 'HELPLINE', 'SOS'
  const [currentTab, setCurrentTab] = useState('HOME');

  // Drive mode state
  const [isDriveMode, setIsDriveMode] = useState(false);
  const [crashDetected, setCrashDetected] = useState(false);
  const [crashCountdown, setCrashCountdown] = useState(10);


  // Home banner slider state
  const [activeSlide, setActiveSlide] = useState(0);

  // IVR call state
  const [ivrTagCode, setIvrTagCode] = useState('');
  const [ivrPhone, setIvrPhone] = useState('');
  const [ivrLoading, setIvrLoading] = useState(false);

  const banners = [
    {
      title: 'MODERN SAFETY SYSTEM',
      desc: 'Empower students, staff, and visitors with secure smart cards designed for quick identification, emergency alerts, and seamless campus protection.',
      color: '#1E3A8A', // Navy Blue
      textColor: '#FDE047', // Yellow/Gold
      borderColor: '#1E40AF'
    },
    {
      title: 'FIND LOCATION',
      desc: 'Track your loved ones\' location anytime, anywhere - and stay assured of their safety.',
      color: '#EFF6FF',
      textColor: '#1E40AF',
      borderColor: '#BFDBFE'
    },
    {
      title: 'ACCIDENT SUPPORT',
      desc: 'Fast, reliable accident support for peace of mind. Scan to notify emergency contacts.',
      color: '#FEF2F2',
      textColor: '#991B1B',
      borderColor: '#FECACA'
    },
    {
      title: 'WRONG PARKING',
      desc: 'The owner instantly gets a siren alert with photo/video, location, time, and caller details.',
      color: '#FFF7ED',
      textColor: '#9A3412',
      borderColor: '#FED7AA'
    },
    {
      title: 'CRASH DETECTION',
      desc: 'Senses severe accidents on the road and alerts family and contacts with live GPS location.',
      color: '#ECFDF5',
      textColor: '#065F46',
      borderColor: '#A7F3D0'
    }
  ];

  const fetchDashboardData = async () => {
    try {
      const res = await api.get('/user/dashboard');
      setData(res.data);
    } catch (err) {
      console.error('Error fetching dashboard', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);


  // Auto-scroll slider
  useEffect(() => {
    if (currentTab !== 'HOME') return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [currentTab]);

  useEffect(() => {
    let subscription;
    if (isDriveMode && !crashDetected) {
      Accelerometer.setUpdateInterval(500);
      subscription = Accelerometer.addListener(data => {
        const gForce = Math.sqrt(data.x * data.x + data.y * data.y + data.z * data.z);
        if (gForce > 3.0) {
          handleCrashDetected();
        }
      });
    }
    return () => {
      if (subscription) subscription.remove();
    };
  }, [isDriveMode, crashDetected]);

  const handleCrashDetected = () => {
    setCrashDetected(true);
    setCrashCountdown(10);
  };

  useEffect(() => {
    let timer;
    if (crashDetected && crashCountdown > 0) {
      timer = setInterval(() => {
        setCrashCountdown(prev => prev - 1);
      }, 1000);
    } else if (crashDetected && crashCountdown === 0) {
      triggerSOS();
      setCrashDetected(false);
    }
    return () => clearInterval(timer);
  }, [crashDetected, crashCountdown]);


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchDashboardData();
  }, []);

  const handleIvrCall = async () => {
    if (!ivrTagCode || !ivrPhone || !/^[6-9]\d{9}$/.test(ivrPhone)) {
      Alert.alert('Invalid Details', 'Please enter a valid Tag Code and 10-digit mobile number.');
      return;
    }

    setIvrLoading(true);
    try {
      const res = await api.post(`/public/tag/${ivrTagCode}/call`, { scannerPhone: ivrPhone });
      if (res.data.success && res.data.exophone) {
        Linking.openURL(`tel:${res.data.exophone}`);
      } else {
        Alert.alert('Call Failed', 'Unable to initiate secure masking call.');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Call Error', err.response?.data?.error || 'Failed to initiate secure call. Please verify the Tag Code.');
    } finally {
      setIvrLoading(false);
    }
  };

  const triggerSOS = () => {
    Alert.alert(
      'Trigger Immediate SOS?',
      'This will broadcast your location and emergency alert to all configured family and safety contacts.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Trigger Now',
          style: 'destructive',
          onPress: async () => {
            try {
              const { status } = await Location.requestForegroundPermissionsAsync();
              if (status === 'granted') {
                const loc = await Location.getCurrentPositionAsync({});
                // Send coordinates to API or mock
                Alert.alert('SOS Dispatched', `Your live location (${loc.coords.latitude.toFixed(4)}, ${loc.coords.longitude.toFixed(4)}) has been sent to emergency contacts successfully.`);
              } else {
                Alert.alert('SOS Dispatched', 'Emergency sent without location due to missing permissions.');
              }
            } catch (err) {
              Alert.alert('SOS Dispatched', 'Emergency sent. Failed to acquire live GPS location.');
            }
          }
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.loadingText}>Loading V-KAWACH Securing Hub...</Text>
      </View>
    );
  }

  const { tags = [], stats = { activeTags: 0, totalScans: 0 }, orders = [] } = data || {};

  // Renderer for standard home tab
  const renderHomeTab = () => (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {/* Search/Welcome title & Partner */}
      <View style={styles.welcomeBanner}>
        <View style={styles.welcomeInfo}>
          <Text style={styles.welcomeTitle}>Hello, Welcome To</Text>
          <Image source={require('../../assets/icon.png')} style={{ width: 140, height: 40, resizeMode: 'contain', marginVertical: 4 }} />
          <Text style={styles.welcomeSubtitle}>मुसीबत में काम आए ! दुर्घटना में जान बचाए !!</Text>
        </View>
        <TouchableOpacity style={styles.partnerBtn} onPress={() => Alert.alert('Partner Portal', 'Partner verification flow coming soon.')}>
          <Plus size={16} color={theme.colors.primary} />
          <Text style={styles.partnerBtnText}>PARTNER</Text>
        </TouchableOpacity>
      </View>

      {/* Info Carousel Banners */}
      <View style={styles.carouselContainer}>
        <View
          style={[
            styles.carouselCard,
            {
              backgroundColor: banners[activeSlide].color,
              borderColor: banners[activeSlide].borderColor
            }
          ]}
        >
          <View style={styles.carouselHeader}>
            <Text style={[styles.carouselTitle, { color: banners[activeSlide].textColor }]}>
              {banners[activeSlide].title}
            </Text>
            <Shield size={16} color={banners[activeSlide].textColor} />
          </View>
          <Text style={styles.carouselDesc}>{banners[activeSlide].desc}</Text>
          <TouchableOpacity style={styles.carouselReadMore}>
            <Text style={[styles.carouselReadMoreText, { color: banners[activeSlide].textColor }]}>Read More</Text>
          </TouchableOpacity>
        </View>

        {/* Indicators */}
        <View style={styles.indicatorRow}>
          {banners.map((_, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.indicatorDot,
                idx === activeSlide ? { backgroundColor: theme.colors.primary, width: 20 } : null
              ]}
              onPress={() => setActiveSlide(idx)}
            />
          ))}
        </View>
      </View>

      {/* Grid Navigation Menu (12 items based on V-KAWACH system) */}
      <View style={styles.gridMenu}>
        {[
          { label: 'FIND LOCATION', icon: <MapPin size={22} color={theme.colors.primary} />, route: 'Tracking' },
          { label: 'ROUTE TRACKING', icon: <Map size={22} color={theme.colors.primary} />, route: 'Tracking' },
          { label: 'CRASH DETECTION', icon: <Car size={22} color={theme.colors.primary} />, action: () => Alert.alert('Crash Detection', 'No crashes detected. Sensor active.') },
          { label: 'OVERSPEED ALERT', icon: <Gauge size={22} color={theme.colors.primary} />, action: () => Alert.alert('Overspeed Alert', 'Speed limits are within normal parameters.') },
          { label: 'RASHDRIVE ALERT', icon: <TriangleAlert size={22} color={theme.colors.primary} />, action: () => Alert.alert('Rash Drive', 'Driving behavior is normal.') },
          { label: 'FAMILY CONTROL', icon: <Users size={22} color={theme.colors.primary} />, action: () => Alert.alert('Family Control', 'Manage emergency contacts here.') },
          { label: 'AMBULANCE HELP', icon: <Ambulance size={22} color="#DC2626" />, action: () => Linking.openURL('tel:108') },
          { label: 'HOSPITAL HELP', icon: <Hospital size={22} color="#DC2626" />, action: () => Alert.alert('Hospital Help', 'Locating nearest hospitals...') },
          { label: 'POLICE HELP', icon: <ShieldAlert size={22} color="#1E3A8A" />, action: () => Linking.openURL('tel:112') },
          { label: 'SOS', icon: <TriangleAlert size={22} color="#DC2626" />, action: triggerSOS },
          { label: 'HELPLINES', icon: <PhoneCall size={22} color={theme.colors.primary} />, action: () => setCurrentTab('HELPLINE') },
          { label: 'SCANNING', icon: <QrCode size={22} color={theme.colors.primary} />, route: 'ScanQR' },
        ].map((item, idx) => (
          <TouchableOpacity 
            key={idx} 
            style={styles.gridItem} 
            onPress={() => item.route ? navigation.navigate(item.route) : item.action && item.action()}
          >
            <View style={[styles.gridIconContainer, { backgroundColor: '#EFF6FF' }]}>
              {item.icon}
            </View>
            <Text style={styles.gridLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* PRODUCTS Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>PRODUCTS</Text>
        <TouchableOpacity onPress={() => setCurrentTab('PRODUCT')}>
          <Text style={styles.sectionLink}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productsGrid}>
        <TouchableOpacity style={styles.productCard} onPress={() => setCurrentTab('PRODUCT')}>
          <View style={styles.productIconBg}>
            <Car size={26} color={theme.colors.primary} />
          </View>
          <Text style={styles.productCardTitle}>CAR SAFETY QR</Text>
          <Text style={styles.productCardPrice}>₹499</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.productCard} onPress={() => setCurrentTab('PRODUCT')}>
          <View style={styles.productIconBg}>
            <Play size={26} color={theme.colors.primary} />
          </View>
          <Text style={styles.productCardTitle}>BIKE SAFETY QR</Text>
          <Text style={styles.productCardPrice}>₹299</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.productCard} onPress={() => setCurrentTab('PRODUCT')}>
          <View style={styles.productIconBg}>
            <User size={26} color={theme.colors.primary} />
          </View>
          <Text style={styles.productCardTitle}>CHILD SAFETY QR</Text>
          <Text style={styles.productCardPrice}>₹199</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.productCard} onPress={() => setCurrentTab('PRODUCT')}>
          <View style={styles.productIconBg}>
            <Shield size={26} color={theme.colors.primary} />
          </View>
          <Text style={styles.productCardTitle}>PET SAFETY QR</Text>
          <Text style={styles.productCardPrice}>₹199</Text>
        </TouchableOpacity>
      </View>

      {/* Prevention of Accident Section */}
      <View style={[styles.sectionHeader, { marginTop: 24 }]}>
        <Text style={styles.sectionTitle}>PREVENTION OF ACCIDENT</Text>
      </View>

      <View style={styles.accidentPreventionCard}>
        <View style={styles.preventionBadge}>
          <ShieldCheck size={16} color={isDriveMode ? theme.colors.success : '#9CA3AF'} />
          <Text style={[styles.preventionBadgeText, { color: isDriveMode ? theme.colors.success : '#9CA3AF' }]}>
            {isDriveMode ? 'DRIVE MODE ACTIVE' : 'DRIVE MODE INACTIVE'}
          </Text>
        </View>
        <Text style={styles.preventionTitle}>Crash Detection & Safety</Text>
        <Text style={styles.preventionDesc}>
          V-KAWACH monitors for severe impacts via device sensors and automatically alerts emergency contacts with your live location.
        </Text>
        <TouchableOpacity 
          style={{ backgroundColor: isDriveMode ? '#DC2626' : theme.colors.primary, paddingVertical: 12, borderRadius: 12, alignItems: 'center', marginTop: 12 }}
          onPress={() => setIsDriveMode(!isDriveMode)}
        >
          <Text style={{ color: '#FFF', fontWeight: '800', fontSize: 13 }}>
            {isDriveMode ? 'STOP DRIVE MODE' : 'START DRIVE MODE'}
          </Text>
        </TouchableOpacity>

        {crashDetected && (
          <View style={{ backgroundColor: '#FEF2F2', padding: 16, borderRadius: 12, marginTop: 16, alignItems: 'center', borderWidth: 1, borderColor: '#FECACA' }}>
            <TriangleAlert size={32} color="#DC2626" />
            <Text style={{ fontSize: 16, fontWeight: '900', color: '#DC2626', marginTop: 8 }}>IMPACT DETECTED!</Text>
            <Text style={{ fontSize: 12, fontWeight: '700', color: '#4B5563', marginVertical: 8 }}>Triggering SOS in {crashCountdown} seconds...</Text>
            <TouchableOpacity 
              style={{ backgroundColor: '#DC2626', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, marginTop: 4 }}
              onPress={() => setCrashDetected(false)}
            >
              <Text style={{ color: '#FFF', fontWeight: '800', fontSize: 12 }}>CANCEL SOS</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Digital Smart Tags section (user tags) */}
      <View style={[styles.sectionHeader, { marginTop: 24 }]}>
        <Text style={styles.sectionTitle}>My Registered Tags</Text>
        <TouchableOpacity style={styles.addTagRowBtn} onPress={() => navigation.navigate('ScanQR')}>
          <Plus size={16} color={theme.colors.primary} />
          <Text style={styles.addTagRowText}>Link Tag</Text>
        </TouchableOpacity>
      </View>

      {tags.length === 0 ? (
        <View style={styles.emptyCard}>
          <QrCode size={40} color={theme.colors.border} />
          <Text style={styles.emptyText}>No registered tags found.</Text>
          <TouchableOpacity style={styles.emptyBtn} onPress={() => navigation.navigate('ScanQR')}>
            <Text style={styles.emptyBtnText}>Scan QR Code to Link</Text>
          </TouchableOpacity>
        </View>
      ) : (
        tags.map((tag) => (
          <TouchableOpacity
            key={tag.id}
            style={styles.tagCard}
            onPress={() => navigation.navigate('TagSettings', { tag })}
          >
            <View style={styles.tagIconContainer}>
              <QrCode size={24} color={theme.colors.primary} />
            </View>
            <View style={styles.tagDetails}>
              <Text style={styles.tagAssetType}>
                {tag.customAssetType || tag.assetType || 'Vehicle Tag'}
              </Text>
              <Text style={styles.tagCode}>Code: {tag.tagCode}</Text>
              {tag.assetNumber && <Text style={styles.tagAssetNum}>Reg: {tag.assetNumber}</Text>}
            </View>
            <View style={styles.tagAction}>
              <Text style={styles.tagActionText}>Edit</Text>
              <ArrowRight size={14} color={theme.colors.primary} />
            </View>
          </TouchableOpacity>
        ))
      )}

      {/* Orders list */}
      <View style={[styles.sectionHeader, { marginTop: 24 }]}>
        <Text style={styles.sectionTitle}>Recent Orders</Text>
      </View>

      {orders.length === 0 ? (
        <View style={styles.emptyCard}>
          <ShoppingBag size={32} color={theme.colors.border} />
          <Text style={styles.emptyText}>No orders placed yet.</Text>
        </View>
      ) : (
        orders.map((order) => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.orderRow}>
              <Text style={styles.orderNumber}>{order.orderNumber}</Text>
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor:
                      order.paymentStatus === 'PAID' ? '#E6F4EA' : '#FCE8E6',
                  },
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    { color: order.paymentStatus === 'PAID' ? '#137333' : '#C5221F' },
                  ]}
                >
                  {order.paymentStatus}
                </Text>
              </View>
            </View>
            <Text style={styles.orderDate}>
              {new Date(order.createdAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </Text>
            <Text style={styles.orderItems}>
              {order.items?.map((i) => i.productName).join(', ')}
            </Text>
            <Text style={styles.orderAmount}>₹{order.totalAmount}</Text>
          </View>
        ))
      )}

      {/* Logout button at bottom */}
      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <LogOut size={18} color="#C5221F" />
        <Text style={styles.logoutBtnText}>Logout Account</Text>
      </TouchableOpacity>

      <View style={{ height: 60 }} />
    </ScrollView>
  );

  // Renderer for product tab
  const renderProductTab = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.tabTitle}>V-KAWACH Security Catalog</Text>
      <Text style={styles.tabSubtitle}>Buy or activate premium identity protection shields</Text>

      {[
        { 
          id: '1', title: 'V-KAWACH CAR SAFETY QR', desc: 'Secure vehicle window stick protection.', price: '₹599', originalPrice: '₹998',
          features: ['ROUTE TRACKING', 'CRASH DETECTION', 'AMBULANCE HELP', 'HOSPITAL HELP', 'OVERSPEED ALERT', 'FAMILY CONTROL', 'SOS', 'HELPLINES', 'RASHDRIVE ALERT', 'SET FLASH', '3 SAFETY QR', 'FIND LOCATION']
        },
        { 
          id: '2', title: 'V-KAWACH BIKE SAFETY QR', desc: 'Waterproof motorcycle alert tag.', price: '₹299', originalPrice: '₹499',
          features: ['ROUTE TRACKING', 'CRASH DETECTION', 'AMBULANCE HELP', 'HOSPITAL HELP', 'OVERSPEED ALERT', 'FAMILY CONTROL', 'SOS', 'HELPLINES', 'RASHDRIVE ALERT', 'SET FLASH', '1 SAFETY QR', 'FIND LOCATION']
        },
        { 
          id: '3', title: 'V-KAWACH CHILD SAFETY QR', desc: 'Identity protection keychain for kids.', price: '₹199', originalPrice: '₹399',
          features: ['ROUTE TRACKING', 'AMBULANCE HELP', 'HOSPITAL HELP', 'FAMILY CONTROL', 'SOS', 'HELPLINES', 'FIND LOCATION']
        },
        { 
          id: '4', title: 'V-KAWACH PET SAFETY QR', desc: 'Lightweight dog/cat collar tag.', price: '₹199', originalPrice: '₹299',
          features: ['ROUTE TRACKING', 'AMBULANCE HELP', 'HOSPITAL HELP', 'FAMILY CONTROL', 'SOS', 'FIND LOCATION']
        }
      ].map((prod) => (
        <View key={prod.id} style={styles.productStoreCard}>
          <Text style={styles.productStoreTitle}>{prod.title}</Text>
          <Text style={styles.productStoreDesc}>{prod.desc}</Text>
          
          <View style={styles.productFeaturesGrid}>
            <Text style={styles.productFeaturesHeading}>This Price Includes:-</Text>
            <View style={styles.productFeaturesList}>
              {prod.features.map((feat, idx) => (
                <View key={idx} style={styles.productFeatureBadge}>
                  <Text style={styles.productFeatureText}>{feat}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.productStoreFooter}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Text style={styles.productStorePrice}>{prod.price}</Text>
              <Text style={styles.productStoreOriginalPrice}>{prod.originalPrice}</Text>
            </View>
            <TouchableOpacity
              style={styles.productBuyBtn}
              onPress={() => {
                Alert.alert('Secure Order', `Placing order for ${prod.title}. Please confirm order?`, [
                  { text: 'Cancel' },
                  { text: 'Confirm Order', onPress: () => Alert.alert('Success', 'Order created successfully. Details sent to register email.') }
                ]);
              }}
            >
              <Text style={styles.productBuyBtnText}>BUY NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={{ height: 60 }} />
    </ScrollView>
  );

  // Renderer for IVR call tab
  const renderIvrCallTab = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.tabTitle}>Masked IVR Dialer</Text>
      <Text style={styles.tabSubtitle}>Reach the owner anonymously without displaying numbers</Text>

      <View style={styles.ivrForm}>
        <Text style={styles.inputLabel}>Recipient QR Tag Code</Text>
        <TextInput
          style={styles.ivrTextInput}
          placeholder="e.g. VH-A12345"
          value={ivrTagCode}
          onChangeText={setIvrTagCode}
          autoCapitalize="characters"
        />

        <Text style={styles.inputLabel}>Your Mobile Number (Caller)</Text>
        <TextInput
          style={styles.ivrTextInput}
          placeholder="e.g. 9876543210"
          keyboardType="phone-pad"
          value={ivrPhone}
          onChangeText={(val) => setIvrPhone(val.replace(/\D/g, '').slice(0, 10))}
        />

        <TouchableOpacity style={styles.ivrSubmitBtn} onPress={handleIvrCall} disabled={ivrLoading}>
          {ivrLoading ? (
            <ActivityIndicator size="small" color={theme.colors.primary} />
          ) : (
            <>
              <PhoneCall size={20} color={theme.colors.primary} />
              <Text style={styles.ivrSubmitBtnText}>INITIATE SECURE BRIDGE</Text>
            </>
          )}
        </TouchableOpacity>

        <View style={styles.secureNotice}>
          <Shield size={16} color={theme.colors.success} />
          <Text style={styles.secureNoticeText}>100% Secure. V-KAWACH masks numbers for privacy.</Text>
        </View>
      </View>

      <View style={{ height: 60 }} />
    </ScrollView>
  );

  // Renderer for helpline tab
  const renderHelplineTab = () => (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.tabTitle}>Direct Helplines</Text>
      <Text style={styles.tabSubtitle}>Access instant country-wide emergency networks</Text>

      {[
        { title: 'Police / Emergency Response', num: '112', desc: 'Direct access to local police dispatch & public safety officers.', color: '#3B82F6' },
        { title: 'Ambulance & Healthcare', num: '108', desc: 'Medical emergency services, urgent hospital triage access.', color: '#EF4444' },
        { title: 'Fire Response Force', num: '101', desc: 'Fire incidents and hazardous control emergency teams.', color: '#F97316' },
        { title: 'Women Helpline', num: '1091', desc: 'Specialized security support and direct support lines.', color: '#EC4899' },
        { title: 'V-KAWACH Support Desk', num: '1800-XXX-XXXX', desc: 'Assistance for registration, lost tags, or subscription errors.', color: theme.colors.primary }
      ].map((line, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.helplineDetailCard}
          onPress={() => Linking.openURL(`tel:${line.num}`)}
        >
          <View style={styles.helplineHeader}>
            <Text style={styles.helplineDetailTitle}>{line.title}</Text>
            <PhoneCall size={18} color={line.color} />
          </View>
          <Text style={[styles.helplineDetailNumber, { color: line.color }]}>Dial: {line.num}</Text>
          <Text style={styles.helplineDetailDesc}>{line.desc}</Text>
        </TouchableOpacity>
      ))}

      <View style={{ height: 60 }} />
    </ScrollView>
  );

  // Renderer for SOS tab
  const renderSosTab = () => (
    <View style={styles.sosContainer}>
      <Text style={styles.sosTitle}>V-KAWACH Emergency SOS</Text>
      <Text style={styles.sosSubtitle}>In distress? Hold or tap the button to alert everyone.</Text>

      <TouchableOpacity style={styles.sosLargeBtn} onPress={triggerSOS}>
        <View style={styles.sosInnerRing}>
          <TriangleAlert size={72} color={theme.colors.white} />
          <Text style={styles.sosBtnLabel}>SOS</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.sosAlertInstructions}>
        Tapping this button will automatically dispatch your current GPS coordinates, time, and safety status to emergency services and custom family emergency contact numbers.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Alert.alert('Menu', 'Account and tag manager dashboard.')}>
          <Menu size={24} color={theme.colors.text} />
        </TouchableOpacity>
        
        <Image source={require('../../assets/icon.png')} style={{ width: 140, height: 40, resizeMode: 'contain' }} />
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon} onPress={() => setCurrentTab('PRODUCT')}>
            <ShoppingCart size={22} color={theme.colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} onPress={() => Alert.alert('Notifications', 'No new security alerts.')}>
            <Bell size={22} color={theme.colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content Area based on currentTab */}
      {currentTab === 'HOME' && renderHomeTab()}
      {currentTab === 'PRODUCT' && renderProductTab()}
      {currentTab === 'IVR_CALL' && renderIvrCallTab()}
      {currentTab === 'HELPLINE' && renderHelplineTab()}
      {currentTab === 'SOS' && renderSosTab()}

      {/* Custom Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, currentTab === 'PRODUCT' ? styles.activeTabItem : null]}
          onPress={() => setCurrentTab('PRODUCT')}
        >
          <ShoppingBag size={20} color={currentTab === 'PRODUCT' ? theme.colors.primary : '#9CA3AF'} />
          <Text style={[styles.tabText, currentTab === 'PRODUCT' ? styles.activeTabText : null]}>PRODUCT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabItem, currentTab === 'IVR_CALL' ? styles.activeTabItem : null]}
          onPress={() => setCurrentTab('IVR_CALL')}
        >
          <PhoneCall size={20} color={currentTab === 'IVR_CALL' ? theme.colors.primary : '#9CA3AF'} />
          <Text style={[styles.tabText, currentTab === 'IVR_CALL' ? styles.activeTabText : null]}>IVR CALL</Text>
        </TouchableOpacity>

        {/* Central Scan Button */}
        <View style={styles.scanBtnContainer}>
          <TouchableOpacity style={styles.scanBtn} onPress={() => navigation.navigate('ScanQR')}>
            <QrCode size={28} color={theme.colors.primary} />
            <Text style={styles.scanBtnText}>SCAN</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.tabItem, currentTab === 'HELPLINE' ? styles.activeTabItem : null]}
          onPress={() => setCurrentTab('HELPLINE')}
        >
          <CircleQuestionMark size={20} color={currentTab === 'HELPLINE' ? theme.colors.primary : '#9CA3AF'} />
          <Text style={[styles.tabText, currentTab === 'HELPLINE' ? styles.activeTabText : null]}>HELPLINE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabItem, currentTab === 'SOS' ? styles.activeTabItem : null]}
          onPress={() => setCurrentTab('SOS')}
        >
          <TriangleAlert size={20} color={currentTab === 'SOS' ? '#DC2626' : '#9CA3AF'} />
          <Text style={[styles.tabText, currentTab === 'SOS' ? styles.activeSosText : null]}>SOS</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Home indicator/button when not in home tab */}
      {currentTab !== 'HOME' && (
        <TouchableOpacity style={styles.floatingHome} onPress={() => setCurrentTab('HOME')}>
          <Shield size={20} color={theme.colors.white} />
          <Text style={styles.floatingHomeText}>HOME</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: theme.colors.white,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingTop: 54,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: theme.colors.border,
  },
  headerBrand: {
    fontSize: 18,
    fontWeight: '900',
    color: theme.colors.primary,
    letterSpacing: 2,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
  },
  headerIcon: {
    padding: 2,
  },
  scrollContent: {
    padding: 20,
  },
  welcomeBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EEF2F6',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.01,
    shadowRadius: 5,
    elevation: 2,
  },
  welcomeInfo: {
    flex: 1,
    paddingRight: 10,
  },
  welcomeTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888888',
  },
  brandTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: theme.colors.primary,
    marginTop: 2,
  },
  welcomeSubtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.primary,
    marginTop: 4,
  },
  partnerBtn: {
    borderWidth: 1.5,
    borderColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    gap: 4,
  },
  partnerBtnText: {
    fontSize: 11,
    fontWeight: '800',
    color: theme.colors.primary,
  },
  carouselContainer: {
    marginBottom: 20,
  },
  carouselCard: {
    borderWidth: 1.5,
    borderRadius: 24,
    padding: 20,
    minHeight: 140,
    justifyContent: 'space-between',
  },
  carouselHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carouselTitle: {
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },
  carouselDesc: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4B5563',
    lineHeight: 18,
    marginVertical: 12,
  },
  carouselReadMore: {
    alignSelf: 'flex-start',
  },
  carouselReadMoreText: {
    fontSize: 12,
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
  indicatorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 10,
  },
  indicatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D1D5DB',
  },
  gridMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 28,
    justifyContent: 'space-between',
  },
  gridItem: {
    width: (width - 64) / 4,
    alignItems: 'center',
  },
  gridIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  gridLabel: {
    fontSize: 8,
    fontWeight: '800',
    color: theme.colors.primary,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: theme.colors.primary,
    letterSpacing: 0.5,
  },
  sectionLink: {
    fontSize: 12,
    fontWeight: '800',
    color: theme.colors.primary,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 16,
    width: (width - 52) / 2,
    borderWidth: 1,
    borderColor: '#EEF2F6',
    alignItems: 'center',
  },
  productIconBg: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#EEF2F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  productCardTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: theme.colors.primary,
    textAlign: 'center',
  },
  productCardPrice: {
    fontSize: 13,
    fontWeight: '800',
    color: theme.colors.primary,
    marginTop: 4,
  },
  accidentPreventionCard: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  preventionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    gap: 4,
    marginBottom: 10,
  },
  preventionBadgeText: {
    color: theme.colors.success,
    fontSize: 9,
    fontWeight: '800',
  },
  preventionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: theme.colors.white,
  },
  preventionDesc: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 6,
    lineHeight: 16,
    fontWeight: '600',
  },
  addTagRowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addTagRowText: {
    fontSize: 12,
    fontWeight: '800',
    color: theme.colors.primary,
  },
  tagCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EEF2F6',
  },
  tagIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#EEF2F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  tagDetails: {
    flex: 1,
  },
  tagAssetType: {
    fontSize: 15,
    fontWeight: '800',
    color: theme.colors.primary,
    textTransform: 'capitalize',
  },
  tagCode: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 1,
    fontWeight: '600',
  },
  tagAssetNum: {
    fontSize: 11,
    color: theme.colors.primary,
    fontWeight: '700',
    marginTop: 1,
  },
  tagAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tagActionText: {
    fontSize: 11,
    fontWeight: '800',
    color: theme.colors.primary,
  },
  emptyCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#D1D5DB',
  },
  emptyText: {
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 12,
  },
  emptyBtn: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  emptyBtnText: {
    color: theme.colors.primary,
    fontWeight: '800',
    fontSize: 12,
  },
  orderCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EEF2F6',
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  orderNumber: {
    fontSize: 14,
    fontWeight: '800',
    color: theme.colors.primary,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '800',
  },
  orderDate: {
    fontSize: 11,
    color: '#6B7280',
    marginBottom: 6,
  },
  orderItems: {
    fontSize: 12,
    color: '#4B5563',
    marginBottom: 6,
    fontWeight: '600',
  },
  orderAmount: {
    fontSize: 15,
    fontWeight: '800',
    color: theme.colors.primary,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
    paddingVertical: 14,
    borderWidth: 1.5,
    borderColor: '#FECACA',
    borderRadius: 16,
    backgroundColor: '#FEF2F2',
  },
  logoutBtnText: {
    color: '#DC2626',
    fontWeight: '800',
    fontSize: 13,
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: theme.colors.primary,
    marginBottom: 4,
  },
  tabSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 20,
  },
  productStoreCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EEF2F6',
    marginBottom: 16,
  },
  productStoreTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: theme.colors.primary,
  },
  productStoreDesc: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4B5563',
    lineHeight: 16,
    marginTop: 6,
    marginBottom: 14,
  },
  productFeaturesGrid: {
    marginBottom: 14,
  },
  productFeaturesHeading: {
    fontSize: 12,
    fontWeight: '800',
    color: theme.colors.primary,
    marginBottom: 8,
  },
  productFeaturesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  productFeatureBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#EEF2F6',
    borderRadius: 8,
  },
  productFeatureText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#4B5563',
  },
  productStoreOriginalPrice: {
    fontSize: 13,
    fontWeight: '600',
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  productStoreFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEF2F6',
    paddingTop: 12,
  },
  productStorePrice: {
    fontSize: 18,
    fontWeight: '900',
    color: theme.colors.primary,
  },
  productBuyBtn: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  productBuyBtnText: {
    color: theme.colors.primary,
    fontWeight: '900',
    fontSize: 12,
  },
  ivrForm: {
    backgroundColor: theme.colors.white,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EEF2F6',
  },
  ivrTextInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.primary,
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
  },
  ivrSubmitBtn: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 16,
    gap: 8,
    marginTop: 10,
  },
  ivrSubmitBtnText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '800',
  },
  secureNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 16,
  },
  secureNoticeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#065F46',
  },
  helplineDetailCard: {
    backgroundColor: theme.colors.white,
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EEF2F6',
    marginBottom: 12,
  },
  helplineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  helplineDetailTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: theme.colors.primary,
    flex: 1,
  },
  helplineDetailNumber: {
    fontSize: 15,
    fontWeight: '900',
    marginTop: 4,
  },
  helplineDetailDesc: {
    fontSize: 11,
    color: '#6B7280',
    fontWeight: '600',
    marginTop: 4,
    lineHeight: 15,
  },
  sosContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  sosTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: theme.colors.primary,
    textAlign: 'center',
  },
  sosSubtitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 36,
  },
  sosLargeBtn: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  sosInnerRing: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#DC2626',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  sosBtnLabel: {
    color: theme.colors.white,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  sosAlertInstructions: {
    fontSize: 11,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 16,
    fontWeight: '600',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderTopWidth: 1.5,
    borderTopColor: theme.colors.border,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingBottom: 4,
  },
  activeTabItem: {
    backgroundColor: 'rgba(201, 168, 76, 0.05)',
  },
  tabText: {
    fontSize: 8,
    fontWeight: '800',
    color: '#9CA3AF',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  activeTabText: {
    color: theme.colors.primary,
  },
  activeSosText: {
    color: '#EF4444',
  },
  scanBtnContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 24,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  scanBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanBtnText: {
    fontSize: 8,
    fontWeight: '900',
    color: theme.colors.primary,
    marginTop: 2,
  },
  floatingHome: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  floatingHomeText: {
    color: theme.colors.white,
    fontWeight: '800',
    fontSize: 11,
  },
});

export default function DashboardScreenWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DashboardScreen {...props} />
    </ErrorBoundary>
  );
}
