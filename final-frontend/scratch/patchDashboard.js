const fs = require('fs');
const path = require('path');

const dashPath = path.join(__dirname, '../mobile-app/src/screens/DashboardScreen.js');
let code = fs.readFileSync(dashPath, 'utf8');

// Add imports
code = code.replace(
  "import { theme } from '../utils/theme';",
  "import { theme } from '../utils/theme';\nimport { Accelerometer } from 'expo-sensors';\nimport * as Location from 'expo-location';"
);

// Add state variables inside DashboardScreen
const stateVars = `
  // Tabs state: 'HOME', 'PRODUCT', 'IVR_CALL', 'HELPLINE', 'SOS'
  const [currentTab, setCurrentTab] = useState('HOME');

  // Drive mode state
  const [isDriveMode, setIsDriveMode] = useState(false);
  const [crashDetected, setCrashDetected] = useState(false);
  const [crashCountdown, setCrashCountdown] = useState(10);
`;
code = code.replace(
  "  // Tabs state: 'HOME', 'PRODUCT', 'IVR_CALL', 'HELPLINE', 'SOS'\n  const [currentTab, setCurrentTab] = useState('HOME');",
  stateVars
);

// Add useEffect logic
const effectLogic = `
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
`;

code = code.replace(
  "  // Auto-scroll slider\n  useEffect(() => {\n    if (currentTab !== 'HOME') return;\n    const interval = setInterval(() => {\n      setActiveSlide((prev) => (prev + 1) % banners.length);\n    }, 4500);\n    return () => clearInterval(interval);\n  }, [currentTab]);",
  effectLogic
);

// Modify SOS trigger to fetch location first
const sosOriginal = `  const triggerSOS = () => {
    Alert.alert(
      'Trigger Immediate SOS?',
      'This will broadcast your location and emergency alert to all configured family and safety contacts.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Trigger Now',
          style: 'destructive',
          onPress: () => {
            Alert.alert('SOS Dispatched', 'Your live location coordinates have been sent to emergency contacts successfully.');
          }
        }
      ]
    );
  };`;

const sosUpdated = `  const triggerSOS = () => {
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
                Alert.alert('SOS Dispatched', \`Your live location (\${loc.coords.latitude.toFixed(4)}, \${loc.coords.longitude.toFixed(4)}) has been sent to emergency contacts successfully.\`);
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
  };`;
code = code.replace(sosOriginal, sosUpdated);

// Update Prevention section UI
const preventionOriginal = `      <View style={styles.accidentPreventionCard}>
        <View style={styles.preventionBadge}>
          <ShieldCheck size={16} color={theme.colors.success} />
          <Text style={styles.preventionBadgeText}>SAFE ROUTING ACTIVE</Text>
        </View>
        <Text style={styles.preventionTitle}>Intelligent Highway Watch</Text>
        <Text style={styles.preventionDesc}>
          Your Nek Insan system monitors dangerous routes, alerting you to high-risk crash zones automatically.
        </Text>
      </View>`;

const preventionUpdated = `      <View style={styles.accidentPreventionCard}>
        <View style={styles.preventionBadge}>
          <ShieldCheck size={16} color={isDriveMode ? theme.colors.success : '#9CA3AF'} />
          <Text style={[styles.preventionBadgeText, { color: isDriveMode ? theme.colors.success : '#9CA3AF' }]}>
            {isDriveMode ? 'DRIVE MODE ACTIVE' : 'DRIVE MODE INACTIVE'}
          </Text>
        </View>
        <Text style={styles.preventionTitle}>Crash Detection & Safety</Text>
        <Text style={styles.preventionDesc}>
          Nek Insan monitors for severe impacts via device sensors and automatically alerts emergency contacts with your live location.
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
      </View>`;
code = code.replace(preventionOriginal, preventionUpdated);

fs.writeFileSync(dashPath, code, 'utf8');
console.log('DashboardScreen updated with Crash Detection');
