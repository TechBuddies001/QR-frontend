import re
import sys

def modify_dashboard():
    with open('src/screens/DashboardScreen.js', 'r') as f:
        content = f.read()

    # 1. Add popup imports
    content = content.replace(
        "import * as Location from 'expo-location';",
        "import * as Location from 'expo-location';\nimport { FindLocationModal, OfferModal, IvrCallModal, PermissionModal } from '../components/Popups';"
    )

    # 2. Add state variables
    content = content.replace(
        "const [ivrLoading, setIvrLoading] = useState(false);",
        "const [ivrLoading, setIvrLoading] = useState(false);\n  const [showFindLocation, setShowFindLocation] = useState(false);\n  const [showOffer, setShowOffer] = useState(false);\n  const [showIvrModal, setShowIvrModal] = useState(false);\n  const [showPermission, setShowPermission] = useState(false);"
    )

    # 3. Replace renderHomeTab
    new_render_home = """  const renderHomeTab = () => (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {/* Top Actions Row */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
        <TouchableOpacity style={{ alignItems: 'center', width: '30%' }} onPress={() => setShowOffer(true)}>
          <View style={{ backgroundColor: '#fff', padding: 15, borderRadius: 10, shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.2, shadowRadius: 2, elevation: 3, marginBottom: 5 }}>
            <PhoneCall size={24} color="#C9A84C" />
          </View>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0B1A33', textAlign: 'center' }}>Phone Theft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', width: '30%' }} onPress={() => setShowFindLocation(true)}>
          <View style={{ backgroundColor: '#fff', padding: 15, borderRadius: 10, shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.2, shadowRadius: 2, elevation: 3, marginBottom: 5 }}>
            <MapPin size={24} color="#C9A84C" />
          </View>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0B1A33', textAlign: 'center' }}>Find Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', width: '30%' }} onPress={() => navigation.navigate('Tracking')}>
          <View style={{ backgroundColor: '#fff', padding: 15, borderRadius: 10, shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.2, shadowRadius: 2, elevation: 3, marginBottom: 5 }}>
            <Map size={24} color="#C9A84C" />
          </View>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0B1A33', textAlign: 'center' }}>Route Tracking</Text>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={{ backgroundColor: '#0B1A33', borderRadius: 15, padding: 15, marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#C9A84C', fontSize: 16, fontWeight: 'bold' }}>FIND LOCATION</Text>
          <MapPin size={20} color="#C9A84C" />
        </View>
        <Text style={{ color: '#fff', fontSize: 14, marginTop: 5 }}>Track your family member's location anytime, anywhere - and stay assured of their safety.</Text>
      </View>

      {/* Grid Menu */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {[
          { label: 'Accident Safety', icon: <Car size={26} color="#0B1A33" />, action: () => alert('Accident Safety') },
          { label: 'Wrong Parking', icon: <TriangleAlert size={26} color="#0B1A33" />, action: () => alert('Wrong Parking') },
          { label: 'QR Security', icon: <QrCode size={26} color="#0B1A33" />, action: () => alert('QR Security') },
          { label: 'Logs', icon: <ClipboardList size={26} color="#0B1A33" />, route: 'Logs' },
          { label: 'Set Flash', icon: <Zap size={26} color="#0B1A33" />, action: () => setShowPermission(true) },
          { label: 'Refer & Earn', icon: <Gift size={26} color="#0B1A33" />, action: () => alert('Refer & Earn') },
          { label: 'Support(Whatsapp)', icon: <PhoneCall size={26} color="#0B1A33" />, action: () => Linking.openURL('whatsapp://send?phone=+910000000000') },
        ].map((item, idx) => (
          <TouchableOpacity 
            key={idx} 
            style={{ width: '30%', alignItems: 'center', marginBottom: 20 }} 
            onPress={() => item.route ? navigation.navigate(item.route) : item.action && item.action()}
          >
            <View style={{ backgroundColor: '#fff', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.2, shadowRadius: 2, elevation: 3, marginBottom: 8, borderWidth: 1, borderColor: '#C9A84C' }}>
              {item.icon}
            </View>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0B1A33', textAlign: 'center' }}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );"""

    # We need to find `const renderHomeTab = () => (` and the `);` that ends it.
    # We will use regex to find the block
    pattern = r"const renderHomeTab = \(\) => \([\s\S]*?^  \);$"
    content = re.sub(pattern, new_render_home, content, flags=re.MULTILINE)

    # 4. Replace main return
    new_return = """  return (
    <View style={styles.container}>
      {/* Modals */}
      <FindLocationModal visible={showFindLocation} onClose={() => setShowFindLocation(false)} />
      <OfferModal visible={showOffer} onClose={() => setShowOffer(false)} />
      <IvrCallModal visible={showIvrModal} onClose={() => setShowIvrModal(false)} onConfirm={() => { setShowIvrModal(false); alert('Calling owner...'); }} />
      <PermissionModal visible={showPermission} onClose={() => setShowPermission(false)} />

      {/* Header */}
      <View style={[styles.header, { paddingHorizontal: 15, paddingBottom: 10 }]}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Menu size={28} color="#0B1A33" />
        </TouchableOpacity>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#C9A84C', fontSize: 22, fontWeight: 'bold' }}>V-</Text>
          <Text style={{ color: '#0B1A33', fontSize: 22, fontWeight: 'bold' }}>KAWACH</Text>
        </View>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ marginRight: 10 }} onPress={() => alert('Refer & Earn')}>
            <Gift size={24} color="#0B1A33" />
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#DC2626', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }} onPress={triggerSOS}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>EMERGENCY</Text>
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
          <TriangleAlert size={24} color="#DC2626" />
          <Text style={{ fontSize: 10, color: '#DC2626', marginTop: 4 }}>SOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );"""

    return_pattern = r"  return \(\n    <View style=\{styles\.container\}>[\s\S]*?^  \);$"
    content = re.sub(return_pattern, new_return, content, flags=re.MULTILINE)

    with open('src/screens/DashboardScreen.js', 'w') as f:
        f.write(content)

if __name__ == '__main__':
    modify_dashboard()
