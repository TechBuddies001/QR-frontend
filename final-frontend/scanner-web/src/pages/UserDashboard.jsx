import React, { useState, useEffect } from 'react';
import styled, { useTheme, keyframes } from 'styled-components';
import {
    LayoutDashboard,
    QrCode,
    User,
    Settings,
    LogOut,
    Search,
    Shield,
    ShoppingBag,
    Package,
    Download,
    Eye,
    Lock,
    X,
    Menu
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import api from '../lib/api';
import toast from 'react-hot-toast';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  padding: 35px;
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);

  h2 {
    color: #0b1a33;
    margin-bottom: 20px;
    font-weight: 800;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px; right: 20px;
  background: #f5f5f5; border: none;
  width: 35px; height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;
  &:hover { background: #eee; color: #333; }
`;

const OrderDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
  
  .detail-group {
    label {
      font-size: 0.8rem;
      color: #888;
      font-weight: 600;
      display: block;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
    div {
      font-weight: 600;
      color: #333;
    }
  }
`;

const OrderItemsList = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  
  .item {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #eee;
    background: #fafafa;
    &:last-child { border-bottom: none; }
    
    .name { font-weight: 600; color: #0b1a33; }
    .price { font-weight: 700; color: #C9A84C; }
  }
`;

const DashboardWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-top: 85px;
`;

const Sidebar = styled.aside`
  width: 260px;
  background: linear-gradient(180deg, #0b1a33 0%, #081226 100%);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  position: fixed;
  top: 85px;
  height: calc(100vh - 85px);
  z-index: 99;
  border-right: 1px solid rgba(255,255,255,0.05);
`;

const SidebarLogo = styled.div`
  padding: 0 30px 40px;
  display: flex;
  flex-direction: column;
  
  .brand {
    font-size: 1.25rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .tagline {
    font-size: 0.6rem;
    opacity: 0.6;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 4px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  flex: 1;
`;

const NavItem = styled.li`
  margin-bottom: 5px;
`;

const SidebarLink = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 16px 30px;
  color: white;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  opacity: 0.6;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 4px solid transparent;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.02em;

  &:hover, &.active {
    opacity: 1;
    background: linear-gradient(90deg, rgba(201,168,76,0.1) 0%, transparent 100%);
    border-left-color: #C9A84C;
    color: #C9A84C;
    padding-left: 35px;
  }

  svg {
    width: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 260px;
  padding: 40px;
  animation: ${fadeIn} 0.8s ease-out;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  background: white;
  padding: 20px 35px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.02);
`;

const WelcomeCard = styled.div`
  background: linear-gradient(135deg, #0b1a33 0%, #1a3a6d 100%);
  color: white;
  padding: 45px;
  border-radius: 32px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(11, 26, 51, 0.4);

  .text {
    position: relative;
    z-index: 2;
    h1 {
      font-size: 2.2rem;
      font-weight: 900;
      margin-bottom: 12px;
      font-family: ${({ theme }) => theme.fonts.display};
      background: linear-gradient(to right, #fff, #C9A84C);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      font-size: 1.1rem;
      opacity: 0.8;
      font-weight: 500;
    }
  }

  .accent-circle {
    position: absolute;
    right: -50px;
    top: -50px;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`;

const StatItem = styled.div`
  background: white;
  padding: 25px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.02);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  }

  .icon-box {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    color: #C9A84C;
  }

  .details {
    .label { font-size: 0.85rem; color: #888; font-weight: 600; margin-bottom: 2px; }
    .value { font-size: 1.4rem; font-weight: 800; color: #0b1a33; }
  }
`;

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 28px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.02);
  margin-bottom: 35px;
  border: 1px solid rgba(0,0,0,0.03);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 35px;
    color: #0b1a33;
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 900;
    font-family: ${({ theme }) => theme.fonts.display};
    
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, #eee, transparent);
    }
  }
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #555;
  }
  input {
    width: 100%;
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #ddd;
    font-family: inherit;
    font-size: 1rem;
    &:focus {
      border-color: #C9A84C;
      outline: none;
      box-shadow: 0 0 0 3px rgba(201,168,76,0.1);
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  
  th, td {
    padding: 20px;
    text-align: left;
  }
  
  th {
    font-weight: 800;
    color: #999;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    border: none;
  }
  
  tbody tr {
    background: transparent;
    transition: all 0.3s ease;
    border-radius: 16px;
    
    &:hover {
      background: #f8f9fa;
      transform: scale(1.01);
      box-shadow: 0 10px 20px rgba(0,0,0,0.02);
    }
    
    td {
      border-top: 1px solid transparent;
      border-bottom: 1px solid #f0f0f0;
      color: #0b1a33;
      font-weight: 600;
      
      &:first-child { border-radius: 16px 0 0 16px; }
      &:last-child { border-radius: 0 16px 16px 0; }
    }
  }
`;

const Badge = styled.span`
  padding: 6px 14px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${props => props.status === 'PAID' || props.status === 'DELIVERED' ? '#e6f7e6' : '#fff3e0'};
  color: ${props => props.status === 'PAID' || props.status === 'DELIVERED' ? '#2e7d32' : '#ef6c00'};
  
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`;

const QrGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const QrCard = styled.div`
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  background: #fafafa;
  
  .qr-placeholder {
    width: 150px;
    height: 150px;
    background: white;
    margin: 0 auto 20px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }

  h4 {
    margin-bottom: 5px;
    color: #0b1a33;
  }

  p {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 15px;
  }
`;

const UserDashboard = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);
    const [activeTab, setActiveTab] = useState('orders');
    const [selectedOrder, setSelectedOrder] = useState(null);
    
    // Profile Edit State
    const [profileForm, setProfileForm] = useState({
        name: '',
        phone: '',
        currentPassword: '',
        newPassword: ''
    });

    const fetchDashboard = async () => {
        try {
            const res = await api.get('/user/dashboard');
            setDashboardData(res.data);
            setProfileForm(prev => ({
                ...prev,
                name: res.data.user?.name || '',
                phone: res.data.user?.phone || ''
            }));
        } catch (err) {
            console.error(err);
            toast.error('Failed to load dashboard data');
            if (err.response?.status === 401) {
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (!token) {
            navigate('/login');
            return;
        }
        fetchDashboard();
    }, [navigate]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            await api.post('/user/settings', profileForm);
            toast.success('Profile updated successfully!');
            setProfileForm(prev => ({...prev, currentPassword: '', newPassword: ''}));
            fetchDashboard();
        } catch (err) {
            toast.error(err.response?.data?.error || 'Failed to update profile');
        }
    };

    if (loading) return <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: '#0b1a33', color: 'white' }}>SECURE LOADING...</div>;

    const { user, tags, orders } = dashboardData || {};

    return (
        <>
        <Header />
        <DashboardWrapper>
            <Sidebar>
                <NavList>
                    <NavItem>
                        <SidebarLink 
                            className={activeTab === 'orders' ? 'active' : ''} 
                            onClick={() => setActiveTab('orders')}
                        >
                            <ShoppingBag />
                            My Orders
                        </SidebarLink>
                    </NavItem>
                    <NavItem>
                        <SidebarLink 
                            className={activeTab === 'qrcodes' ? 'active' : ''} 
                            onClick={() => setActiveTab('qrcodes')}
                        >
                            <QrCode />
                            My QR Tags
                        </SidebarLink>
                    </NavItem>
                    <NavItem>
                        <SidebarLink 
                            className={activeTab === 'profile' ? 'active' : ''} 
                            onClick={() => setActiveTab('profile')}
                        >
                            <User />
                            Profile Settings
                        </SidebarLink>
                    </NavItem>
                </NavList>
                <div style={{ padding: '0 30px' }}>
                    <button 
                        onClick={() => {
                            localStorage.removeItem('admin_token');
                            localStorage.removeItem('user_role');
                            localStorage.removeItem('user_profile');
                            navigate('/login');
                        }} 
                        style={{ 
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 30px',
                            color: 'white',
                            textDecoration: 'none',
                            opacity: 0.7,
                            transition: 'all 0.3s ease',
                            border: 'none', 
                            background: 'rgba(255,255,255,0.05)', 
                            borderRadius: '8px',
                            cursor: 'pointer',
                            textAlign: 'left',
                            fontSize: '1rem'
                        }}
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </Sidebar>

            <MainContent>
                <TopBar>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '0.75rem', color: '#888', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                            Platform / Customer / {activeTab}
                        </div>
                        <div style={{ fontWeight: 900, color: '#0b1a33', fontSize: '1.4rem', fontFamily: theme?.fonts?.display || 'serif' }}>
                            {activeTab === 'orders' ? 'Orders Ledger' : activeTab === 'qrcodes' ? 'Digital Assets' : 'Account Security'}
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '8px 20px', background: '#f8f9fa', borderRadius: '100px', border: '1px solid #f0f0f0' }}>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#0b1a33' }}>{user?.name}</div>
                                <div style={{ fontSize: '0.7rem', color: '#888', fontWeight: 600 }}>{user?.email}</div>
                            </div>
                            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                                <User size={18} color="#C9A84C" />
                            </div>
                        </div>
                    </div>
                </TopBar>

                {activeTab === 'orders' && (
                    <>
                        <WelcomeCard>
                            <div className="text">
                                <h1>Welcome Back, {user?.name?.split(' ')[0] || 'User'}!</h1>
                                <p>You have {orders?.length || 0} active orders in your secure history.</p>
                            </div>
                            <div className="accent-circle" />
                            <Package size={80} color="#C9A84C" opacity={0.3} />
                        </WelcomeCard>

                        <StatsGrid>
                            <StatItem>
                                <div className="icon-box"><ShoppingBag size={24} /></div>
                                <div className="details">
                                    <div className="label">Total Orders</div>
                                    <div className="value">{orders?.length || 0}</div>
                                </div>
                            </StatItem>
                            <StatItem>
                                <div className="icon-box"><Shield size={24} /></div>
                                <div className="details">
                                    <div className="label">Secure Tags</div>
                                    <div className="value">{tags?.length || 0}</div>
                                </div>
                            </StatItem>
                            <StatItem>
                                <div className="icon-box"><Package size={24} /></div>
                                <div className="details">
                                    <div className="label">Pending Delivery</div>
                                    <div className="value">{orders?.filter(o => o.status === 'PENDING')?.length || 0}</div>
                                </div>
                            </StatItem>
                        </StatsGrid>
                        
                        <Card>
                            <h3><ShoppingBag size={24} color="#C9A84C" /> Manifest History</h3>
                            {(!orders || orders.length === 0) ? (
                                <p style={{ color: '#999', textAlign: 'center', padding: '40px' }}>You haven't placed any orders yet.</p>
                            ) : (
                                <div style={{ overflowX: 'auto' }}>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Date</th>
                                                <th>Items</th>
                                                <th>Total Amount</th>
                                                <th>Payment Status</th>
                                                <th>Order Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(order => (
                                                <tr key={order.id} onClick={() => setSelectedOrder(order)}>
                                                    <td style={{ fontWeight: 900, color: '#0b1a33', fontSize: '0.9rem' }}>{order.orderNumber}</td>
                                                    <td style={{ fontSize: '0.85rem', color: '#666' }}>{new Date(order.createdAt).toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                                                    <td style={{ maxWidth: '250px' }}>
                                                        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.9rem' }}>
                                                            {order.items.map(i => i.productName).join(', ')}
                                                        </div>
                                                    </td>
                                                    <td style={{ fontWeight: 800 }}>₹{order.totalAmount}</td>
                                                    <td><Badge status={order.paymentStatus}>{order.paymentStatus}</Badge></td>
                                                    <td><Badge status={order.status === 'DELIVERED' ? 'PAID' : 'UNPAID'}>{order.status}</Badge></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            )}
                        </Card>
                    </>
                )}

                {activeTab === 'qrcodes' && (
                    <>
                        <WelcomeCard>
                            <div className="text">
                                <h1>Secure QR Ecosystem</h1>
                                <p>Manage and download your digital identity smart tags.</p>
                            </div>
                            <div className="accent-circle" />
                            <QrCode size={80} color="#C9A84C" opacity={0.3} />
                        </WelcomeCard>
                        
                        <Card>
                            <h3><QrCode size={24} color="#C9A84C" /> Digital Inventory</h3>
                            {(!tags || tags.length === 0) ? (
                                <p style={{ color: '#999', textAlign: 'center', padding: '40px' }}>No QR Tags available. Purchase a tag to see it here.</p>
                            ) : (
                                <QrGrid>
                                    {tags.map(tag => (
                                        <QrCard key={tag.id}>
                                            <div className="qr-placeholder">
                                                <QrCode size={80} color="#0b1a33" />
                                            </div>
                                            <h4>{tag.customAssetType || tag.assetType}</h4>
                                            <p>Code: {tag.tagCode}</p>
                                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                                <Button variant="outline" style={{ padding: '8px 15px', fontSize: '0.8rem' }} onClick={() => window.open(`/scan/${tag.id}`, '_blank')}>
                                                    <Eye size={14} /> Preview
                                                </Button>
                                                <Button variant="primary" style={{ padding: '8px 15px', fontSize: '0.8rem', background: '#0b1a33' }}>
                                                    <Download size={14} /> Download
                                                </Button>
                                            </div>
                                        </QrCard>
                                    ))}
                                </QrGrid>
                            )}
                        </Card>
                    </>
                )}

                {activeTab === 'profile' && (
                    <>
                        <WelcomeCard>
                            <div className="text">
                                <h1>Profile Settings</h1>
                                <p>Manage your account details and security.</p>
                            </div>
                            <Settings size={50} opacity={0.2} />
                        </WelcomeCard>
                        
                        <Card style={{ maxWidth: '600px' }}>
                            <h3><User size={20} color="#C9A84C" /> Personal Information</h3>
                            <form onSubmit={handleUpdateProfile}>
                                <InputGroup>
                                    <label>Full Name</label>
                                    <input 
                                        type="text" 
                                        value={profileForm.name} 
                                        onChange={e => setProfileForm({...profileForm, name: e.target.value})} 
                                        required 
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <label>Phone Number</label>
                                    <input 
                                        type="tel" 
                                        value={profileForm.phone} 
                                        onChange={e => setProfileForm({...profileForm, phone: e.target.value})} 
                                        required 
                                    />
                                </InputGroup>

                                <h3 style={{ marginTop: '40px' }}><Lock size={20} color="#C9A84C" /> Update Password</h3>
                                <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '20px' }}>Leave blank if you don't want to change your password.</p>
                                
                                <InputGroup>
                                    <label>Current Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="Enter current password"
                                        value={profileForm.currentPassword} 
                                        onChange={e => setProfileForm({...profileForm, currentPassword: e.target.value})} 
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <label>New Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="Enter new password"
                                        value={profileForm.newPassword} 
                                        onChange={e => setProfileForm({...profileForm, newPassword: e.target.value})} 
                                    />
                                </InputGroup>

                                <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '20px', padding: '15px' }}>
                                    Save Changes
                                </Button>
                            </form>
                        </Card>
                    </>
                )}

            </MainContent>

            {selectedOrder && (
                <ModalOverlay onClick={() => setSelectedOrder(null)}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <CloseButton onClick={() => setSelectedOrder(null)}><X size={20} /></CloseButton>
                        <h2>Order Details</h2>
                        
                        <OrderDetailGrid>
                            <div className="detail-group">
                                <label>Order Number</label>
                                <div>{selectedOrder.orderNumber}</div>
                            </div>
                            <div className="detail-group">
                                <label>Order Date</label>
                                <div>{new Date(selectedOrder.createdAt).toLocaleDateString()} at {new Date(selectedOrder.createdAt).toLocaleTimeString()}</div>
                            </div>
                            <div className="detail-group">
                                <label>Payment Status</label>
                                <div><Badge status={selectedOrder.paymentStatus}>{selectedOrder.paymentStatus}</Badge></div>
                            </div>
                            <div className="detail-group">
                                <label>Order Status</label>
                                <div><Badge status={selectedOrder.status === 'DELIVERED' ? 'PAID' : 'UNPAID'}>{selectedOrder.status}</Badge></div>
                            </div>
                        </OrderDetailGrid>

                        <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#0b1a33' }}>Shipping Information</h3>
                        <OrderDetailGrid>
                            <div className="detail-group">
                                <label>Customer Name</label>
                                <div>{selectedOrder.customerName}</div>
                            </div>
                            <div className="detail-group">
                                <label>Phone</label>
                                <div>{selectedOrder.customerPhone}</div>
                            </div>
                            <div className="detail-group" style={{ gridColumn: '1 / -1' }}>
                                <label>Address</label>
                                <div>{selectedOrder.shippingAddress}</div>
                            </div>
                        </OrderDetailGrid>

                        <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#0b1a33' }}>Order Items</h3>
                        <OrderItemsList>
                            {selectedOrder.items.map((item, idx) => (
                                <div className="item" key={idx}>
                                    <div className="name">{item.quantity}x {item.productName}</div>
                                    <div className="price">₹{item.totalPrice}</div>
                                </div>
                            ))}
                            <div className="item" style={{ background: '#0b1a33', color: 'white' }}>
                                <div className="name" style={{ color: 'white' }}>Total Amount</div>
                                <div className="price" style={{ color: '#C9A84C' }}>₹{selectedOrder.totalAmount}</div>
                            </div>
                        </OrderItemsList>
                    </ModalContent>
                </ModalOverlay>
            )}
        </DashboardWrapper>
        </>
    );
};

export default UserDashboard;
