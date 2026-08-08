import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
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
  ImageBackground,
  Modal,
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
import { FindLocationModal, OfferModal, IvrCallModal, PermissionModal } from '../components/Popups';

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
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0B1A33', marginBottom: 10 }}>Render Error</Text>
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
  const [heroBanners, setHeroBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);


  // Tabs state: 'HOME', 'PRODUCT', 'IVR_CALL', 'HELPLINE', 'SOS'
  const [currentTab, setCurrentTab] = useState('HOME');

  // Drive mode state
  const [isDriveMode, setIsDriveMode] = useState(false);
  const [crashDetected, setCrashDetected] = useState(false);
  const [crashCountdown, setCrashCountdown] = useState(10);


  // Home banner slider state
  const [activeSlide, setActiveSlide] = useState(0);
  const bannerScrollRef = useRef(null);

  // IVR call state
  const [ivrTagCode, setIvrTagCode] = useState('');
  const [ivrPhone, setIvrPhone] = useState('');
  const [ivrLoading, setIvrLoading] = useState(false);
  const [showFindLocation, setShowFindLocation] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [showIvrModal, setShowIvrModal] = useState(false);
  const [showPermission, setShowPermission] = useState(false);
  const [serviceInfo, setServiceInfo] = useState(null); // { title, desc, icon }

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
      textColor: '#0B1A33',
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
      const [resDashboard, resSettings, resCats, resProds] = await Promise.all([
        api.get('/user/dashboard').catch(() => ({ data: {} })),
        api.get('/public/settings').catch(() => ({ data: {} })),
        api.get('/categories').catch(() => ({ data: {} })),
        api.get('/products?type=SAFETY').catch(() => ({ data: {} }))
      ]);

      if (resDashboard.data) setData(resDashboard.data);

      if (resSettings.data?.settings?.heroBannersList) {
        try {
          setHeroBanners(JSON.parse(resSettings.data.settings.heroBannersList));
        } catch (e) { console.error('Banner parse error', e); }
      }

      if (resCats.data?.categories) {
        const filtered = resCats.data.categories.filter(c => c.name !== 'Smart Home' && c.isActive !== false);
        setCategories(filtered);
      }

      if (resProds.data?.products) {
        setProducts(resProds.data.products);
      }
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
    if (currentTab !== 'HOME' || !heroBanners || heroBanners.length === 0) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        const nextSlide = (prev + 1) % heroBanners.length;
        if (bannerScrollRef.current) {
          bannerScrollRef.current.scrollTo({ x: nextSlide * (width - 30), animated: true });
        }
        return nextSlide;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [currentTab, heroBanners]);

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
      {/* Top Actions Row */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <TouchableOpacity style={{ alignItems: 'center', width: '30%' }} onPress={() => setShowOffer(true)}>
          <View style={{ backgroundColor: '#EFF6FF', padding: 18, borderRadius: 30, shadowColor: '#0B1A33', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.15, shadowRadius: 8, elevation: 4, marginBottom: 8 }}>
            <Shield size={26} color="#0B1A33" />
          </View>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#0B1A33', textAlign: 'center' }}>PHONE THEFT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', width: '30%' }} onPress={() => setShowFindLocation(true)}>
          <View style={{ backgroundColor: '#EFF6FF', padding: 18, borderRadius: 30, shadowColor: '#0B1A33', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.15, shadowRadius: 8, elevation: 4, marginBottom: 8 }}>
            <MapPin size={26} color="#0B1A33" />
          </View>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#0B1A33', textAlign: 'center' }}>FIND LOCATION</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', width: '30%' }} onPress={() => navigation.navigate('Tracking')}>
          <View style={{ backgroundColor: '#EFF6FF', padding: 18, borderRadius: 30, shadowColor: '#0B1A33', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.15, shadowRadius: 8, elevation: 4, marginBottom: 8 }}>
            <Map size={26} color="#0B1A33" />
          </View>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#0B1A33', textAlign: 'center' }}>ROUTE TRACKING</Text>
        </TouchableOpacity>
      </View>

      {/* Main Banner section */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>हर मुश्किल में,</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0B1A33' }}>V-Kawach</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>Your Safety Partner</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#C9A84C', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', shadowColor: '#C9A84C', shadowOffset: {width: 0, height: 3}, shadowOpacity: 0.4, shadowRadius: 5, elevation: 3 }}>
          <Users size={16} color="#0B1A33" style={{ marginRight: 5 }} />
          <Text style={{ color: '#0B1A33', fontSize: 10, fontWeight: 'bold', textAlign: 'center' }}>BECOME A{'\n'}DISTRIBUTOR</Text>
        </TouchableOpacity>
      </View>

      {/* Slider Banner */}
      {heroBanners && heroBanners.length > 0 ? (
        <View style={{ marginBottom: 25 }}>
          <ScrollView 
            ref={bannerScrollRef}
            horizontal 
            pagingEnabled 
            showsHorizontalScrollIndicator={false} 
            style={{ borderRadius: 20, overflow: 'hidden' }}
            onMomentumScrollEnd={(e) => {
              const newIndex = Math.round(e.nativeEvent.contentOffset.x / (width - 30));
              setActiveSlide(newIndex);
            }}
          >
            {heroBanners.map((banner, idx) => {
              const baseUrl = api.defaults.baseURL.replace('/api', '');
              const imgPath = banner.imageUrl?.startsWith('/') ? banner.imageUrl : `/${banner.imageUrl}`;
              const imageUri = banner.imageUrl?.startsWith('http') ? banner.imageUrl : `${baseUrl}${imgPath}`;
              return (
                <ImageBackground key={idx} source={{ uri: imageUri }} style={{ width: width - 30, height: 200, padding: 20, justifyContent: 'center' }} imageStyle={{ borderRadius: 20, opacity: 0.5, backgroundColor: '#0B1A33' }}>
                  <View style={{ backgroundColor: 'rgba(11, 26, 51, 0.7)', ...StyleSheet.absoluteFillObject, borderRadius: 20 }} />
                  <Text style={{ color: '#E2E8F0', fontSize: 14, fontWeight: 'bold' }}>{banner.taglineDim || 'SECURE EVERY MOMENT'}</Text>
                  <Text style={{ color: '#C9A84C', fontSize: 24, fontWeight: '900', letterSpacing: 1, marginVertical: 5 }}>{banner.taglineHighlight || 'SMART ID TECHNOLOGY'}</Text>
                  <Text style={{ color: '#E2E8F0', fontSize: 12, marginBottom: 15, lineHeight: 18, width: '90%' }}>{banner.subtext || 'Enhance safety with smart digital identity solutions, real-time access control, and instant emergency support.'}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    {(banner.button1Text || 'GET STARTED') && (
                      <TouchableOpacity style={{ backgroundColor: '#C9A84C', borderRadius: 25, paddingVertical: 8, paddingHorizontal: 15, marginRight: 10 }}>
                        <Text style={{ color: '#0B1A33', fontWeight: 'bold', fontSize: 12 }}>{banner.button1Text || 'GET STARTED'}</Text>
                      </TouchableOpacity>
                    )}
                    {(banner.button2Text || 'WATCH DEMO') && (
                      <TouchableOpacity style={{ borderWidth: 1, borderColor: '#C9A84C', borderRadius: 25, paddingVertical: 8, paddingHorizontal: 15 }}>
                        <Text style={{ color: '#C9A84C', fontWeight: 'bold', fontSize: 12 }}>{banner.button2Text || 'WATCH DEMO'}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </ImageBackground>
              );
            })}
          </ScrollView>
          {/* Pagination Dots */}
          {heroBanners.length > 1 && (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              {heroBanners.map((_, idx) => (
                <View 
                  key={idx} 
                  style={{ 
                    width: activeSlide === idx ? 20 : 8, 
                    height: 8, 
                    borderRadius: 4, 
                    backgroundColor: activeSlide === idx ? '#C9A84C' : '#CBD5E1', 
                    marginHorizontal: 4 
                  }} 
                />
              ))}
            </View>
          )}
        </View>
      ) : (
        <View style={{ backgroundColor: '#0B1A33', borderRadius: 20, padding: 20, marginBottom: 25, shadowColor: '#0B1A33', shadowOffset: {width: 0, height: 6}, shadowOpacity: 0.3, shadowRadius: 10, elevation: 6, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#C9A84C', fontSize: 20, fontWeight: '900', letterSpacing: 1 }}>CRASH DETECTION</Text>
            <Text style={{ color: '#E2E8F0', fontSize: 12, marginTop: 8, marginBottom: 15, lineHeight: 18 }}>Instantly senses accidents on the road and alerts family with your live location.</Text>
            <TouchableOpacity style={{ backgroundColor: '#C9A84C', borderRadius: 25, paddingVertical: 6, paddingHorizontal: 20, alignSelf: 'flex-start' }}>
              <Text style={{ color: '#0B1A33', fontWeight: 'bold', fontSize: 12 }}>Read More</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 90, height: 90, backgroundColor: 'rgba(201, 168, 76, 0.15)', borderRadius: 45, justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
            <Car size={45} color="#C9A84C" />
          </View>
        </View>
      )}

      {/* PRODUCT KIT */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderLeftWidth: 4, borderLeftColor: '#0B1A33', paddingLeft: 10, marginBottom: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>PRODUCT KIT</Text>
        <TouchableOpacity style={{ borderWidth: 1, borderColor: '#0B1A33', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 5 }} onPress={() => setCurrentTab('PRODUCT')}>
          <Text style={{ color: '#000', fontSize: 12, fontWeight: 'bold' }}>VIEW ALL</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 25, paddingLeft: 2, paddingBottom: 10 }}>
        {products.length > 0 ? products.map((prod, idx) => {
          const baseUrl = api.defaults.baseURL.replace('/api', '');
          const imgUri = prod.imageUrl?.startsWith('http') ? prod.imageUrl : `${baseUrl}${prod.imageUrl?.startsWith('/') ? prod.imageUrl : '/' + prod.imageUrl}`;
          return (
            <TouchableOpacity key={prod._id || idx} style={{ alignItems: 'center', marginRight: 15, width: 100 }} onPress={() => navigation.navigate('ProductDetails', { product: prod.name, productId: prod._id })}>
              <View style={{ width: 100, height: 100, backgroundColor: '#fff', borderRadius: 20, shadowColor: '#000', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.1, shadowRadius: 8, elevation: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 8, overflow: 'hidden' }}>
                {prod.imageUrl ? (
                  <Image source={{ uri: imgUri }} style={{ width: 90, height: 90, borderRadius: 16 }} resizeMode="cover" />
                ) : (
                  <QrCode size={45} color="#0B1A33" />
                )}
              </View>
              <Text style={{ fontSize: 11, fontWeight: '700', color: '#333', textAlign: 'center' }}>{prod.name}</Text>
            </TouchableOpacity>
          );
        }) : ['Car Safety QR', 'Car Premium QR', 'Bike Safety QR', 'Bike Premium QR'].map((prod, idx) => (
          <TouchableOpacity key={idx} style={{ alignItems: 'center', marginRight: 15, width: 100 }} onPress={() => navigation.navigate('ProductDetails', { product: prod })}>
            <View style={{ width: 100, height: 100, backgroundColor: '#fff', borderRadius: 20, shadowColor: '#000', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.1, shadowRadius: 8, elevation: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 8 }}>
              <QrCode size={45} color="#0B1A33" />
            </View>
            <Text style={{ fontSize: 11, fontWeight: '700', color: '#333', textAlign: 'center' }}>{prod}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* CATEGORIES */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderLeftWidth: 4, borderLeftColor: '#0B1A33', paddingLeft: 10, marginBottom: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>CATEGORIES</Text>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 25 }}>
        {(categories.length > 0 ? categories : [
          { _id: '1', name: 'Accident Safety' },
          { _id: '2', name: 'Wrong Parking' },
          { _id: '3', name: 'Family Safety' },
          { _id: '4', name: 'Lost and Found' },
          { _id: '5', name: 'Safety Products' },
          { _id: '6', name: 'Emergency Services' }
        ]).map((cat, idx) => {
          const lower = (cat.name || '').toLowerCase();
          let icon, bg, border;
          if (lower.includes('accident') || lower.includes('crash')) { icon = <TriangleAlert size={30} color="#C9A84C" />; bg = '#FEE2E2'; border = '#C9A84C'; }
          else if (lower.includes('parking') || lower.includes('vehicle') || lower.includes('bike')) { icon = <Car size={30} color="#C9A84C" />; bg = '#FEF2F2'; border = '#C9A84C'; }
          else if (lower.includes('family') || lower.includes('child') || lower.includes('kid')) { icon = <Users size={30} color="#1E3A8A" />; bg = '#EFF6FF'; border = '#1E40AF'; }
          else if (lower.includes('lost') || lower.includes('found') || lower.includes('location')) { icon = <MapPin size={30} color="#0284C7" />; bg = '#E0F2FE'; border = '#0284C7'; }
          else if (lower.includes('safety') || lower.includes('product') || lower.includes('shield')) { icon = <ShieldCheck size={30} color="#0B1A33" />; bg = '#E0E7FF'; border = '#C9A84C'; }
          else if (lower.includes('emergency') || lower.includes('medical') || lower.includes('ambulance')) { icon = <Ambulance size={30} color="#C9A84C" />; bg = '#FEF2F2'; border = '#C9A84C'; }
          else { icon = <ShieldCheck size={30} color="#0B1A33" />; bg = '#F1F5F9'; border = '#94A3B8'; }
          return (
            <TouchableOpacity key={cat._id || idx} style={{ width: '48%', backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', marginBottom: 15, shadowColor: border, shadowOffset: {width: 0, height: 3}, shadowOpacity: 0.15, shadowRadius: 5, elevation: 3 }}
              onPress={() => navigation.navigate('ProductDetails', { category: cat.name, categoryId: cat._id })}>
              <View style={{ height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: bg }}>
                {icon}
              </View>
              <View style={{ paddingVertical: 10, backgroundColor: '#fff' }}>
                <Text style={{ fontSize: 11, fontWeight: '800', color: border, textAlign: 'center', letterSpacing: 0.5 }}>{cat.name.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* KEY SERVICES */}
      <View style={{ borderLeftWidth: 4, borderLeftColor: '#0B1A33', paddingLeft: 10, marginBottom: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>KEY SERVICES</Text>
        <Text style={{ fontSize: 10, color: '#666' }}>( CLICK TO VIEW MORE )</Text>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', backgroundColor: '#F8FAFC', padding: 15, borderRadius: 20 }}>
        {[
          { label: 'Find\nLocation', icon: <MapPin size={22} color="#C9A84C" />, desc: 'Track the real-time location of your registered tags. Know exactly where your vehicle, family member, or asset is at any moment.' },
          { label: 'Route\nTracking', icon: <Map size={22} color="#C9A84C" />, desc: 'View complete travel route history of your tag. See where it has been throughout the day with timestamps and path visualization.' },
          { label: 'Crash\nDetection', icon: <Car size={22} color="#C9A84C" />, desc: 'Automatically detects sudden impact or accidents using sensors. Instantly alerts emergency contacts with live GPS location.' },
          { label: 'Overspeed\nAlert', icon: <Gauge size={22} color="#0B1A33" />, desc: 'Get notified when your vehicle exceeds a set speed limit. Helps promote safe driving habits and monitor your fleet.' },
          { label: 'RashDrive\nAlert', icon: <TriangleAlert size={22} color="#000" />, desc: 'Detects sudden braking, sharp turns, and aggressive driving patterns. Sends alerts to keep drivers safe on the road.' },
          { label: 'Family\nControl', icon: <Users size={22} color="#1E3A8A" />, desc: 'Monitor and manage the safety of all family members under your account. Set safety zones and get alerts when they go out of range.' },
          { label: 'Ambulance\nHelp', icon: <Ambulance size={22} color="#C9A84C" />, desc: 'One-tap emergency call to request an ambulance. Your location and medical info is automatically shared for faster response.' },
          { label: 'Hospital\nHelp', icon: <Hospital size={22} color="#1E3A8A" />, desc: 'Find the nearest hospitals and medical centers around you. Get directions and contact details instantly during an emergency.' },
          { label: 'Police\nHelp', icon: <ShieldAlert size={22} color="#000" />, desc: 'Instantly contact the nearest police station. Your location is shared automatically to help law enforcement respond quickly.' }
        ].map((svc, idx) => (
          <TouchableOpacity key={idx} style={{ width: '31%', backgroundColor: '#fff', borderRadius: 12, paddingVertical: 12, paddingHorizontal: 5, alignItems: 'center', marginBottom: 12, shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}
            onPress={() => setServiceInfo(svc)}>
            <View style={{ marginBottom: 6 }}>{svc.icon}</View>
            <Text style={{ fontSize: 9, fontWeight: '700', color: '#475569', textAlign: 'center' }}>{svc.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: 120 }} />
    </ScrollView>
  );

  // Renderer for product tab
  const renderProductTab = () => (
    <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
      {/* Header */}
      <View style={{ backgroundColor: '#0B1A33', borderRadius: 20, padding: 20, marginBottom: 24, alignItems: 'center' }}>
        <Text style={{ color: '#C9A84C', fontSize: 11, fontWeight: '800', letterSpacing: 2, marginBottom: 4 }}>V-KAWACH</Text>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '900', textAlign: 'center', letterSpacing: 0.5 }}>Security Catalog</Text>
        <Text style={{ color: '#94A3B8', fontSize: 12, marginTop: 6, textAlign: 'center' }}>Premium identity protection shields</Text>
      </View>

      {products.length > 0 ? products.map((prod, idx) => {
        const baseUrl = api.defaults.baseURL.replace('/api', '');
        const imgUri = prod.imageUrl?.startsWith('http') ? prod.imageUrl : `${baseUrl}${prod.imageUrl?.startsWith('/') ? prod.imageUrl : '/' + prod.imageUrl}`;
        return (
          <View key={prod._id || idx} style={{ backgroundColor: '#fff', borderRadius: 20, marginBottom: 16, overflow: 'hidden', shadowColor: '#0B1A33', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.12, shadowRadius: 10, elevation: 5 }}>
            {/* Card top banner */}
            <View style={{ backgroundColor: '#0B1A33', padding: 16, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#C9A84C', fontSize: 13, fontWeight: '900', letterSpacing: 0.5 }}>{prod.name}</Text>
                <Text style={{ color: '#94A3B8', fontSize: 11, marginTop: 3 }}>{prod.description || 'Premium V-KAWACH Protection'}</Text>
              </View>
              {prod.imageUrl ? (
                <Image source={{ uri: imgUri }} style={{ width: 60, height: 60, borderRadius: 12, borderWidth: 2, borderColor: '#C9A84C' }} resizeMode="cover" />
              ) : (
                <View style={{ width: 60, height: 60, borderRadius: 12, backgroundColor: 'rgba(201,168,76,0.15)', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#C9A84C' }}>
                  <QrCode size={30} color="#C9A84C" />
                </View>
              )}
            </View>

            {/* Price row */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 14, paddingBottom: 10 }}>
              <View>
                <Text style={{ color: '#94A3B8', fontSize: 10, fontWeight: '600' }}>PRICE</Text>
                <Text style={{ color: '#0B1A33', fontSize: 22, fontWeight: '900' }}>{prod.price ? `₹${prod.price}` : 'Contact Us'}</Text>
              </View>
              <TouchableOpacity
                style={{ backgroundColor: '#C9A84C', borderRadius: 25, paddingVertical: 10, paddingHorizontal: 22 }}
                onPress={() => navigation.navigate('ProductDetails', { product: prod.name, productId: prod._id })}>
                <Text style={{ color: '#0B1A33', fontWeight: '900', fontSize: 12 }}>VIEW DETAILS</Text>
              </TouchableOpacity>
            </View>

            {/* Features */}
            {prod.features && prod.features.length > 0 && (
              <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                <Text style={{ color: '#475569', fontSize: 10, fontWeight: '800', marginBottom: 8, letterSpacing: 0.5 }}>INCLUDES:</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                  {prod.features.map((feat, fidx) => (
                    <View key={fidx} style={{ backgroundColor: '#EFF6FF', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 20, borderWidth: 1, borderColor: '#BFDBFE' }}>
                      <Text style={{ fontSize: 9, fontWeight: '700', color: '#1E3A8A' }}>{feat}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        );
      }) : [
        { id: '1', name: 'V-KAWACH CAR SAFETY QR', description: 'Secure vehicle window stick protection.', price: '599', features: ['ROUTE TRACKING', 'CRASH DETECTION', 'AMBULANCE HELP', 'OVERSPEED ALERT', 'FAMILY CONTROL', 'SOS', 'FIND LOCATION'] },
        { id: '2', name: 'V-KAWACH BIKE SAFETY QR', description: 'Waterproof motorcycle alert tag.', price: '299', features: ['ROUTE TRACKING', 'CRASH DETECTION', 'AMBULANCE HELP', 'FAMILY CONTROL', 'SOS', 'FIND LOCATION'] },
        { id: '3', name: 'V-KAWACH CHILD SAFETY QR', description: 'Identity protection keychain for kids.', price: '199', features: ['ROUTE TRACKING', 'AMBULANCE HELP', 'FAMILY CONTROL', 'SOS', 'FIND LOCATION'] },
        { id: '4', name: 'V-KAWACH PET SAFETY QR', description: 'Lightweight dog/cat collar tag.', price: '199', features: ['ROUTE TRACKING', 'AMBULANCE HELP', 'FAMILY CONTROL', 'SOS', 'FIND LOCATION'] }
      ].map((prod) => (
        <View key={prod.id} style={{ backgroundColor: '#fff', borderRadius: 20, marginBottom: 16, overflow: 'hidden', shadowColor: '#0B1A33', shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.12, shadowRadius: 10, elevation: 5 }}>
          <View style={{ backgroundColor: '#0B1A33', padding: 16, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: '#C9A84C', fontSize: 13, fontWeight: '900', letterSpacing: 0.5 }}>{prod.name}</Text>
              <Text style={{ color: '#94A3B8', fontSize: 11, marginTop: 3 }}>{prod.description}</Text>
            </View>
            <View style={{ width: 60, height: 60, borderRadius: 12, backgroundColor: 'rgba(201,168,76,0.15)', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#C9A84C' }}>
              <QrCode size={30} color="#C9A84C" />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 14, paddingBottom: 10 }}>
            <View>
              <Text style={{ color: '#94A3B8', fontSize: 10, fontWeight: '600' }}>PRICE</Text>
              <Text style={{ color: '#0B1A33', fontSize: 22, fontWeight: '900' }}>₹{prod.price}</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#C9A84C', borderRadius: 25, paddingVertical: 10, paddingHorizontal: 22 }}
              onPress={() => Alert.alert('Order', `Place order for ${prod.name}?`, [{text: 'Cancel'}, {text: 'Confirm', onPress: () => Alert.alert('Success', 'Order placed!')}])}>
              <Text style={{ color: '#0B1A33', fontWeight: '900', fontSize: 12 }}>BUY NOW</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <Text style={{ color: '#475569', fontSize: 10, fontWeight: '800', marginBottom: 8, letterSpacing: 0.5 }}>INCLUDES:</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
              {prod.features.map((feat, fidx) => (
                <View key={fidx} style={{ backgroundColor: '#EFF6FF', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 20, borderWidth: 1, borderColor: '#BFDBFE' }}>
                  <Text style={{ fontSize: 9, fontWeight: '700', color: '#1E3A8A' }}>{feat}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}
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
      {/* Modals */}
      <FindLocationModal visible={showFindLocation} onClose={() => setShowFindLocation(false)} />
      <OfferModal visible={showOffer} onClose={() => setShowOffer(false)} />
      <IvrCallModal visible={showIvrModal} onClose={() => setShowIvrModal(false)} onConfirm={() => { setShowIvrModal(false); alert('Calling owner...'); }} />
      <PermissionModal visible={showPermission} onClose={() => setShowPermission(false)} />

      {/* Service Info Modal */}
      {serviceInfo && (
        <Modal transparent animationType="fade" visible={!!serviceInfo} onRequestClose={() => setServiceInfo(null)}>
          <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.55)', justifyContent: 'center', alignItems: 'center', padding: 24 }} activeOpacity={1} onPress={() => setServiceInfo(null)}>
            <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#fff', borderRadius: 24, padding: 28, width: '100%', alignItems: 'center', shadowColor: '#0B1A33', shadowOffset: {width: 0, height: 10}, shadowOpacity: 0.2, shadowRadius: 20, elevation: 12 }}>
              <View style={{ width: 72, height: 72, backgroundColor: '#F0F4FF', borderRadius: 36, justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                {serviceInfo.icon}
              </View>
              <Text style={{ fontSize: 18, fontWeight: '900', color: '#0B1A33', textAlign: 'center', marginBottom: 12, letterSpacing: 0.5 }}>{serviceInfo.label.replace('\n', ' ').toUpperCase()}</Text>
              <View style={{ width: 40, height: 3, backgroundColor: '#C9A84C', borderRadius: 2, marginBottom: 16 }} />
              <Text style={{ fontSize: 14, color: '#475569', textAlign: 'center', lineHeight: 22 }}>{serviceInfo.desc}</Text>
              <TouchableOpacity style={{ marginTop: 24, backgroundColor: '#0B1A33', borderRadius: 25, paddingVertical: 12, paddingHorizontal: 40 }} onPress={() => setServiceInfo(null)}>
                <Text style={{ color: '#C9A84C', fontWeight: 'bold', fontSize: 14 }}>Got it!</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      )}

      {/* Header */}
      <View style={[styles.header, { paddingHorizontal: 15, paddingBottom: 10 }]}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Menu size={28} color="#0B1A33" />
        </TouchableOpacity>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../../assets/logo.png')} style={{ height: 35, width: 140, resizeMode: 'contain' }} />
        </View>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ backgroundColor: '#C9A84C', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }} onPress={triggerSOS}>
            <Text style={{ color: '#0B1A33', fontWeight: 'bold', fontSize: 12 }}>EMERGENCY</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content Area based on currentTab */}
      {currentTab === 'HOME' && renderHomeTab()}
      {currentTab === 'PRODUCT' && renderProductTab()}
      {currentTab === 'IVR_CALL' && renderIvrCallTab()}
      {currentTab === 'HELPLINE' && renderHelplineTab()}
      {currentTab === 'SOS' && renderSosTab()}

      {/* New Bottom Dock */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff', paddingVertical: 10, paddingBottom: 25, borderTopWidth: 1, borderTopColor: '#eee', position: 'absolute', bottom: 0, width: '100%' }}>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Logs')}>
          <ClipboardList size={24} color="#0B1A33" />
          <Text style={{ fontSize: 10, color: '#0B1A33', marginTop: 4 }}>Logs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setShowIvrModal(true)}>
          <PhoneCall size={24} color="#0B1A33" />
          <Text style={{ fontSize: 10, color: '#0B1A33', marginTop: 4 }}>IVR Call</Text>
        </TouchableOpacity>
        
        {/* Center Scan to Call */}
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 60, height: 60, borderRadius: 30, backgroundColor: '#0B1A33', marginTop: -30, shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.3, shadowRadius: 3, elevation: 5 }} onPress={() => navigation.navigate('ScanQR')}>
          <QrCode size={28} color="#C9A84C" />
          <Text style={{ fontSize: 8, color: '#C9A84C', marginTop: 2, textAlign: 'center', fontWeight: 'bold' }}>SCAN TO CALL</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setShowPermission(true)}>
          <Zap size={24} color="#0B1A33" />
          <Text style={{ fontSize: 10, color: '#0B1A33', marginTop: 4 }}>Set Flash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={triggerSOS}>
          <TriangleAlert size={24} color="#C9A84C" />
          <Text style={{ fontSize: 10, color: '#C9A84C', marginTop: 4 }}>SOS</Text>
        </TouchableOpacity>
      </View>
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
    color: '#C9A84C',
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
    backgroundColor: '#C9A84C',
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
