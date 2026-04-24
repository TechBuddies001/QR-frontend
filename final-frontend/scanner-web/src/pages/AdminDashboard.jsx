
import React from 'react';
import styled from 'styled-components';
import {
    LayoutDashboard,
    QrCode,
    User,
    Settings,
    LogOut,
    Bell,
    Search,
    PlusCircle,
    Eye,
    PhoneCall
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const DashboardWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-top: 85px;
`;

const Sidebar = styled.aside`
  width: 260px;
  background-color: ${({ theme }) => theme.colors.navy};
  color: white;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  position: fixed;
  top: 85px;
  height: calc(100vh - 85px);
  z-index: 99;
`;

const SidebarLogo = styled.div`
  padding: 0 30px 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  
  img {
    height: 32px;
    border-radius: 4px;
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

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 30px;
  color: white;
  text-decoration: none;
  opacity: 0.7;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;

  &:hover, &.active {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
    border-left-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.gold};
  }

  svg {
    width: 20px;
  }
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 260px;
  padding: 30px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  background: white;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
`;

const SearchBar = styled.div`
  position: relative;
  width: 300px;

  input {
    width: 100%;
    padding: 10px 15px 10px 40px;
    border-radius: 8px;
    border: 1px solid #eee;
    background: #fdfdfd;
    outline: none;
    
    &:focus {
      border-color: ${({ theme }) => theme.colors.gold};
    }
  }

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  position: relative;

  .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: red;
    color: white;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
  }
`;

const WelcomeCard = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.navy} 0%, #1a3a6d 100%);
  color: white;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;

  h1 {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  p {
    opacity: 0.8;
    max-width: 500px;
  }

  &::after {
    content: '';
    position: absolute;
    right: -50px;
    top: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255,255,255,0.05);
    border-radius: 50%;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`;

const StatCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  gap: 20px;

  .icon-box {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff4e5;
    color: ${({ theme }) => theme.colors.gold};
  }

  .info {
    h4 {
      color: #777;
      font-size: 0.9rem;
      margin-bottom: 5px;
    }
    span {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.navy};
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`;

const Card = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    
    h3 {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.navy};
    }
    
    button {
      color: ${({ theme }) => theme.colors.gold};
      background: none;
      border: none;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    padding: 15px;
    color: #999;
    font-size: 0.85rem;
    font-weight: 600;
    border-bottom: 1px solid #f0f0f0;
  }

  td {
    padding: 15px;
    border-bottom: 1px solid #f8f8f8;
    color: #444;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const Status = styled.span`
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => props.type === 'active' ? '#e6f7e6' : '#fff0f0'};
  color: ${props => props.type === 'active' ? '#2e7d32' : '#d32f2f'};
`;

const AdminDashboard = () => {
    const navigate = useNavigate();

    const stats = [
        { label: 'Active QRs', value: '12', icon: <QrCode /> },
        { label: 'Total Scans', value: '1,284', icon: <Eye /> },
        { label: 'Call Alerts', value: '45', icon: <PhoneCall /> },
        { label: 'Profile Views', value: '3,456', icon: <User /> },
    ];

    const recentQRs = [
        { id: 'QR-8291', name: 'Car Sticker - Swift', status: 'active', date: 'Feb 20, 2024' },
        { id: 'QR-8292', name: 'Pet Tag - Bruno', status: 'active', date: 'Feb 18, 2024' },
        { id: 'QR-8293', name: 'Keyring - Office', status: 'inactive', date: 'Feb 15, 2024' },
    ];

    const handleLogout = () => {
        // Clear auth data
        navigate('/login');
    };

    return (
        <>
        <Header />
        <DashboardWrapper>
            <Sidebar>
                <NavList>
                    <NavItem>
                        <NavLink to="/admin/dashboard" className="active">
                            <LayoutDashboard />
                            Master Panel
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">
                            <QrCode />
                            Bulk Manage
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">
                            <History />
                            System Health
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">
                            <User />
                            User Database
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">
                            <Settings />
                            System Settings
                        </NavLink>
                    </NavItem>
                </NavList>
                <div style={{ padding: '0 30px' }}>
                    <NavLink to="/login" onClick={handleLogout} style={{ border: 'none', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                        <LogOut />
                        Logout
                    </NavLink>
                </div>
            </Sidebar>

            <MainContent>
                <TopBar>
                    <SearchBar>
                        <Search size={18} />
                        <input type="text" placeholder="Search Master Database..." />
                    </SearchBar>
                    <UserMenu>
                        <IconBtn>
                            <Bell size={20} />
                            <div className="badge">3</div>
                        </IconBtn>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Akash Yadav</div>
                                <div style={{ fontSize: '0.75rem', color: '#888' }}>Super Admin</div>
                            </div>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <User size={20} color="#666" />
                            </div>
                        </div>
                    </UserMenu>
                </TopBar>

                <WelcomeCard>
                    <h1>Super Admin Control</h1>
                    <p>Managing 1,284 scan events across the Tarkshya ecosystem. 3 new critical alerts pending review.</p>
                </WelcomeCard>
                
                <StatsGrid>
                    {stats.map((stat, i) => (
                        <StatCard key={i}>
                            <div className="icon-box">{stat.icon}</div>
                            <div className="info">
                                <h4>{stat.label}</h4>
                                <span>{stat.value}</span>
                            </div>
                        </StatCard>
                    ))}
                </StatsGrid>

                <ContentGrid>
                    <Card>
                        <div className="header">
                            <h3>Master QR Inventory</h3>
                            <button><PlusCircle size={18} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Bulk Generate</button>
                        </div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Asset Name</th>
                                    <th>Status</th>
                                    <th>Created Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentQRs.map((qr) => (
                                    <tr key={qr.id}>
                                        <td>{qr.id}</td>
                                        <td style={{ fontWeight: 600 }}>{qr.name}</td>
                                        <td><Status type={qr.status}>{qr.status}</Status></td>
                                        <td>{qr.date}</td>
                                        <td><button style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>Edit/Revoke</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card>

                    <Card>
                        <div className="header">
                            <h3>Live System Feed</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {[1, 2, 3, 4].map(idx => (
                                <div key={idx} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '35px', height: '35px', borderRadius: '8px', background: '#f0f4f8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0b1a33' }}>
                                        <Eye size={16} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Celerio Car QR Scanned</div>
                                        <div style={{ fontSize: '0.75rem', color: '#999' }}>Chandausi, UP • 2 mins ago</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </ContentGrid>
            </MainContent>
        </DashboardWrapper>
        </>
    );
};

export default AdminDashboard;
