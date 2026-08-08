import React, { useState, useEffect, useContext } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Image, Alert, ActivityIndicator, Dimensions
} from 'react-native';
import { ArrowLeft, ShieldCheck, ShoppingCart, Star, QrCode } from 'lucide-react-native';
import RazorpayCheckout from 'react-native-razorpay';
import api from '../utils/api';
import { AuthContext } from '../context/AuthContext';

const { width } = Dimensions.get('window');

export default function ProductDetailsScreen({ route, navigation }) {
  const { product, productId, category } = route.params || {};
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState(null);
  const [fetchingProduct, setFetchingProduct] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    fetchProduct();
  }, [productId, product]);

  const fetchProduct = async () => {
    setFetchingProduct(true);
    try {
      let found = null;
      if (productId) {
        const res = await api.get(`/products/${productId}`);
        found = res.data?.product;
      }
      
      if (!found && product) {
        const res = await api.get(`/products?type=SAFETY`);
        const all = res.data?.products || [];
        found = all.find(p => p.name === product || p._id === productId);
      }

      if (found) {
        const safeParse = (str, fallback) => {
          if (!str) return fallback;
          let res = str;
          try {
            while (typeof res === 'string') {
              res = JSON.parse(res);
            }
            return Array.isArray(res) ? res : fallback;
          } catch(e) {
            return fallback;
          }
        };
        found.photos = safeParse(found.photos, []);
        found.dynamicData = safeParse(found.dynamicData, []);
        setProductData(found);
      }
    } catch (e) {
      console.error('Product fetch error', e);
    }
    setFetchingProduct(false);
  };

  const handleAddToCart = async () => {
    if (!user) { Alert.alert('Login Required', 'Please login to add to ecosystem.'); return; }
    Alert.alert(
      'Purchase Security Hardware',
      `Confirm order for ${productData?.name || product}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: async () => {
            setLoading(true);
            try {
              // 1. Create Order on Backend DB
              const createDbOrderRes = await api.post('/orders', {
                customerName: user.name || 'Test User',
                customerEmail: user.email || 'test@example.com',
                customerPhone: user.phone || '9999999999',
                shippingAddress: 'To be collected / Digital',
                totalAmount: productData?.mrp || productData?.price || 299,
                items: [{ productId: productData?._id || productId || 'PROD_1', name: productData?.name || product, price: productData?.mrp || productData?.price || 299, quantity: 1 }]
              });

              if (!createDbOrderRes.data.success && !createDbOrderRes.data.order) {
                 throw new Error('Failed to create DB order');
              }

              const dbOrderId = createDbOrderRes.data.order.id || createDbOrderRes.data.order._id;

              // 2. Create Razorpay Order
              const createOrderRes = await api.post('/payments/create-order', {
                amount: productData?.mrp || productData?.price || 299,
                receipt: `receipt_${dbOrderId}`
              });

              if (!createOrderRes.data.success) {
                throw new Error(createOrderRes.data.error || 'Failed to create razorpay order');
              }

              const { id: razorpayOrderId } = createOrderRes.data.order;

              // 3. Open Razorpay Checkout
              const options = {
                description: `Payment for ${productData?.name || product}`,
                image: 'https://tarkshyasolution.in/assets/images/logo.png',
                currency: 'INR',
                key: 'rzp_test_YourKeyIdHere', // Configure Razorpay Key
                amount: (productData?.mrp || productData?.price || 299) * 100,
                name: 'V-Kawach',
                order_id: razorpayOrderId,
                prefill: { email: user.email || '', contact: user.phone || '', name: user.name || '' },
                theme: { color: '#0B1A33' }
              };

              RazorpayCheckout.open(options).then(async (data) => {
                // 4. Verify Payment on Backend
                try {
                  const verifyRes = await api.post('/payments/verify', {
                    razorpay_order_id: data.razorpay_order_id,
                    razorpay_payment_id: data.razorpay_payment_id,
                    razorpay_signature: data.razorpay_signature,
                    dbOrderId: dbOrderId
                  });

                  if (verifyRes.data.success) {
                    Alert.alert('Payment Successful', `Order placed successfully!`, [{ text: 'OK', onPress: () => navigation.navigate('DashboardMain') }]);
                  } else {
                    Alert.alert('Payment Verification Failed', verifyRes.data.error);
                  }
                } catch (verifyErr) {
                  Alert.alert('Error', 'Payment verification failed. Please contact support.');
                }
              }).catch((error) => {
                Alert.alert('Payment Cancelled', `Error: ${error.code} | ${error.description}`);
              });
            } catch (err) {
              Alert.alert('Error', err.message || 'Failed to initiate payment.');
            } finally { setLoading(false); }
          }
        }
      ]
    );
  };

  const getImageUrl = (imgStr) => {
    if (!imgStr) return null;
    const baseUrl = api.defaults.baseURL.replace('/api', '');
    let src = imgStr.startsWith('http') ? imgStr : `${baseUrl}${imgStr.startsWith('/') ? imgStr : '/' + imgStr}`;
    if (src.includes('images.icons8.com')) src = src.replace('images.icons8.com', 'img.icons8.com').replace('/bubbles/', '/fluency/');
    return src;
  };

  if (fetchingProduct) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B1A33' }}>
        <ActivityIndicator size="large" color="#C9A84C" />
        <Text style={{ marginTop: 25, color: '#fff', fontWeight: '800', letterSpacing: 3, fontSize: 16 }}>INITIALIZING</Text>
      </View>
    );
  }

  if (!productData) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8FAFC' }}>
        <Text style={{ fontSize: 18, fontWeight: '800', color: '#0B1A33' }}>Product Not Found</Text>
      </View>
    );
  }

  const title = productData.name || product || 'Product';
  const price = productData.mrp || productData.price || 0;
  const oldPrice = Math.round(price * 1.5);
  const photos = productData.photos?.length > 0 ? productData.photos : [productData.imageUrl];
  const specs = productData.dynamicData || [];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <ArrowLeft size={20} color="#C9A84C" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <ShieldCheck size={20} color="#C9A84C" />
          <Text style={styles.headerTitle}>V-KAWACH</Text>
        </View>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Breadcrumb */}
        <View style={styles.breadcrumb}>
          <Text style={styles.breadcrumbText}>ECOSYSTEM / HARDWARE / </Text>
          <Text style={[styles.breadcrumbText, { color: '#C9A84C' }]}>{title.toUpperCase()}</Text>
        </View>

        {/* Image Gallery */}
        <View style={styles.galleryContainer}>
          <View style={styles.mainImageWrapper}>
            {getImageUrl(photos[activeImageIndex]) ? (
              <Image source={{ uri: getImageUrl(photos[activeImageIndex]) }} style={styles.mainImage} resizeMode="cover" />
            ) : (
              <View style={styles.placeholderImage}>
                <QrCode size={60} color="#C9A84C" />
                <Text style={{ color: '#94A3B8', marginTop: 10 }}>Product Image</Text>
              </View>
            )}
          </View>
          
          {photos.length > 1 && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.thumbsContainer}>
              {photos.map((img, i) => (
                <TouchableOpacity key={i} onPress={() => setActiveImageIndex(i)} style={[styles.thumbWrapper, activeImageIndex === i && styles.thumbActive]}>
                  {getImageUrl(img) ? (
                    <Image source={{ uri: getImageUrl(img) }} style={styles.thumbImage} resizeMode="cover" />
                  ) : (
                    <View style={styles.thumbImage} />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>

        {/* Product Info Section (Dark Theme) */}
        <View style={styles.productInfoWrapper}>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>SECURITY HARDWARE</Text>
          </View>
          
          <Text style={styles.titleText}>{title}</Text>
          
          <View style={styles.ratingRow}>
            <View style={{ flexDirection: 'row', gap: 2 }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={14} color="#C9A84C" fill="#C9A84C" />)}
            </View>
            <Text style={styles.ratingText}>4.9/5 (128+ Verifications)</Text>
          </View>

          {/* Pricing Card */}
          <View style={styles.pricingCard}>
            <View style={styles.priceRow}>
              <Text style={styles.currentPrice}>₹{price}</Text>
              <Text style={styles.oldPrice}>₹{oldPrice}</Text>
              <View style={styles.specialOfferBadge}>
                <Text style={styles.specialOfferText}>SPECIAL OFFER</Text>
              </View>
            </View>

            {/* Specs Grid */}
            <View style={styles.specsGrid}>
              {specs.length > 0 ? specs.map((spec, i) => (
                <View key={i} style={styles.specItem}>
                  <ShieldCheck size={20} color="#C9A84C" style={{ marginTop: 2 }} />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.specLabel}>{spec.label.toUpperCase()}</Text>
                    <Text style={styles.specValue}>{spec.value}</Text>
                  </View>
                </View>
              )) : (
                <View style={styles.specItem}>
                  <ShieldCheck size={20} color="#C9A84C" style={{ marginTop: 2 }} />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.specLabel}>ENCRYPTION</Text>
                    <Text style={styles.specValue}>AES-256</Text>
                  </View>
                </View>
              )}
            </View>

            {/* Add to Ecosystem Button */}
            <TouchableOpacity style={styles.addToEcosystemBtn} onPress={handleAddToCart} disabled={loading}>
              {loading ? (
                <ActivityIndicator size="small" color="#0B1A33" />
              ) : (
                <>
                  <Text style={styles.addToEcosystemText}>ADD TO ECOSYSTEM</Text>
                  <ShoppingCart size={18} color="#0B1A33" style={{ marginLeft: 8 }} />
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1A33' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, paddingTop: 52, paddingBottom: 14,
    backgroundColor: '#0B1A33', borderBottomWidth: 1, borderBottomColor: '#1E3A8A'
  },
  backBtn: {
    width: 36, height: 36, borderRadius: 18,
    borderWidth: 1.5, borderColor: '#C9A84C',
    justifyContent: 'center', alignItems: 'center',
  },
  headerTitle: { fontSize: 16, fontWeight: '900', color: '#C9A84C', letterSpacing: 2 },

  scrollContent: { paddingBottom: 100 },

  breadcrumb: { paddingHorizontal: 16, paddingVertical: 20, flexDirection: 'row', flexWrap: 'wrap' },
  breadcrumbText: { fontSize: 10, fontWeight: '800', color: '#94A3B8', letterSpacing: 1 },

  galleryContainer: { paddingHorizontal: 16, marginBottom: 20 },
  mainImageWrapper: { 
    backgroundColor: '#fff', borderRadius: 24, padding: 20, 
    alignItems: 'center', justifyContent: 'center',
    height: width * 0.75, width: '100%', marginBottom: 12 
  },
  mainImage: { width: '100%', height: '100%', borderRadius: 12 },
  placeholderImage: { justifyContent: 'center', alignItems: 'center' },
  thumbsContainer: { flexDirection: 'row', gap: 10 },
  thumbWrapper: { 
    width: 60, height: 60, backgroundColor: '#fff', borderRadius: 12, padding: 5,
    borderWidth: 2, borderColor: 'transparent'
  },
  thumbActive: { borderColor: '#C9A84C' },
  thumbImage: { width: '100%', height: '100%', borderRadius: 8 },

  productInfoWrapper: { paddingHorizontal: 16 },
  badgeContainer: { 
    alignSelf: 'flex-start', backgroundColor: '#3D382B', 
    paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginBottom: 16 
  },
  badgeText: { color: '#C9A84C', fontSize: 10, fontWeight: '800', letterSpacing: 0.5 },
  
  titleText: { fontSize: 28, fontWeight: '900', color: '#fff', lineHeight: 34, marginBottom: 16 },
  
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24, gap: 10 },
  ratingText: { color: '#94A3B8', fontSize: 12, fontWeight: '500' },

  pricingCard: { 
    backgroundColor: '#16233B', borderRadius: 24, padding: 24,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)'
  },
  priceRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  currentPrice: { fontSize: 32, fontWeight: '900', color: '#fff' },
  oldPrice: { fontSize: 16, color: '#64748B', textDecorationLine: 'line-through', fontWeight: '500' },
  specialOfferBadge: { backgroundColor: '#10B981', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 },
  specialOfferText: { color: '#fff', fontSize: 10, fontWeight: '800', letterSpacing: 0.5 },

  specsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 24 },
  specItem: { width: '48%', flexDirection: 'row', alignItems: 'flex-start', marginBottom: 20 },
  specLabel: { fontSize: 9, color: '#94A3B8', fontWeight: '800', letterSpacing: 0.5, marginBottom: 4 },
  specValue: { fontSize: 13, color: '#fff', fontWeight: '700' },

  addToEcosystemBtn: {
    backgroundColor: '#C9A84C', borderRadius: 16, flexDirection: 'row',
    alignItems: 'center', justifyContent: 'center', paddingVertical: 18,
    shadowColor: '#C9A84C', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 20, elevation: 8
  },
  addToEcosystemText: { color: '#0B1A33', fontSize: 14, fontWeight: '900', letterSpacing: 0.5 }
});
