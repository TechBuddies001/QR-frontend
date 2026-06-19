import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Menu, X, ShoppingCart, Globe, Mail, Phone, 
  MapPin, Download, ChevronDown, Image as ImageIcon, User 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/new_logo.png';
import { translations } from '../utils/translations';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const TopBar = styled.div`
  border-bottom: 1px solid #eeeeee;
  background: #fdfdfd;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const TopBarContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const TopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 0.85rem;
  color: #555;
  font-weight: 600;

  .item {
    display: flex;
    align-items: center;
    gap: 8px;
    
    svg {
      color: ${({ theme }) => theme.colors.gold};
      width: 14px;
      height: 14px;
    }
  }
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const TopButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  padding: 4px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: all 0.2s;

  svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.gold};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    background: #fafafa;
  }
`;

const MainHeaderContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  img {
    height: 45px;
    object-fit: contain;
  }
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

const NavLink = styled(Link)`
  color: #333333;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.gold};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gold};
    transition: width 0.3s ease;
  }

  &:hover::after, &.active::after {
    width: 100%;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  padding: 10px 0;
  margin: -10px 0;
  
  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 220px;
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 100;
  padding: 10px 0;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 12px 20px;
  color: #555;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: #f9f9f9;
    color: ${({ theme }) => theme.colors.gold};
    padding-left: 25px;
  }
`;

const RightActions = styled.div`
  display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 25px;
  }
`;

const ActionIcon = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.colors.gold};
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }

  svg {
    width: 24px;
    height: 24px;
  }
  
  .badge {
    position: absolute;
    top: -8px;
    left: 12px;
    background: ${({ theme }) => theme.colors.gold};
    color: white;
    font-size: 10px;
    font-weight: 900;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
  }
`;

// Mobile
const MenuToggle = styled.button`
  background: none;
  border: none;
  color: #0b1a33;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 85vw;
  max-width: 350px;
  background-color: #0b1a33;
  box-shadow: -10px 0 30px rgba(0,0,0,0.3);
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  z-index: 1001;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 10px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileCloseButton = styled.button`
  align-self: flex-end;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  cursor: pointer;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background: rgba(255,255,255,0.1);
    transform: rotate(90deg);
  }
`;

const MobileNavLink = styled(Link)`
  color: rgba(255,255,255,0.8);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: all 0.3s ease;
  
  &:hover, &.active {
    color: ${({ theme }) => theme.colors.gold};
    padding-left: 10px;
    background: rgba(255,255,255,0.02);
  }
`;

const LangButton = styled.button`
  background: #f8f9fa;
  border: 1px solid #eee;
  color: #333;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #eee;
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();
  const { language, setLanguage } = useLanguage();

  return (
    <HeaderWrapper>
      {/* Top Bar matching screenshot */}
      <TopBar>
        <TopBarContainer>
          <TopLeft>
            <div className="item">
              <Mail />
              Info@tarkshyasolution.in
            </div>
            <div className="item">
              <Phone />
              +91 94123 00716
            </div>
          </TopLeft>
          <TopRight>
            <TopButton to="/">
              <MapPin /> Find Phone
            </TopButton>
            <TopButton to="/">
              <Download /> Get the App
            </TopButton>
          </TopRight>
        </TopBarContainer>
      </TopBar>

      <MainHeaderContainer>
        <Logo to="/">
          <img 
            src={logoImg} 
            alt="V-KAWACH Logo" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
        </Logo>

        {/* Main Navigation matching screenshot */}
        <Nav>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink 
            to="/#products" 
            className={location.hash === '#products' ? 'active' : ''}
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Products
          </NavLink>
          
          {/* Services Dropdown */}
          <DropdownContainer>
            <NavLink to="/" className={['/services', '/cloud-monitoring'].includes(location.pathname) ? 'active' : ''}>
              Services <ChevronDown size={16} />
            </NavLink>
            <DropdownMenu className="dropdown-menu">
              <DropdownItem to="/">Find Location</DropdownItem>
              <DropdownItem to="/">Route Tracking</DropdownItem>
              <DropdownItem to="/">Phone Theft</DropdownItem>
              <DropdownItem to="/">Set Flash</DropdownItem>
              <DropdownItem to="/">SOS</DropdownItem>
            </DropdownMenu>
          </DropdownContainer>

          <NavLink to="/" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </NavLink>
          <NavLink to="/case-studies" className={location.pathname === '/case-studies' ? 'active' : ''}>
            Case Studies
          </NavLink>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </NavLink>
          <NavLink to="/social-initiative" className={location.pathname === '/social-initiative' ? 'active' : ''}>
            Partner
          </NavLink>
          <NavLink to="/emergency" className={location.pathname === '/emergency' ? 'active' : ''}>
            Emergency
          </NavLink>
        </Nav>

        {/* Right Actions matching screenshot */}
        <RightActions>
          <ActionIcon to="/cart">
            <ShoppingCart />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </ActionIcon>
          <ActionIcon to="/">
            <ImageIcon />
          </ActionIcon>
          <ActionIcon to="/dashboard" style={{ color: '#c9a84c' }}>
            <User /> Login
          </ActionIcon>
        </RightActions>

        {/* Mobile View Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="mobile-only">
          <MenuToggle onClick={() => setIsMobileOpen(true)}>
            <Menu size={28} />
          </MenuToggle>
        </div>

        {/* Mobile Menu */}
        <Overlay $isOpen={isMobileOpen} onClick={() => setIsMobileOpen(false)} />
        <MobileMenu $isOpen={isMobileOpen}>
          <MobileCloseButton onClick={() => setIsMobileOpen(false)}>
            <X size={20} />
          </MobileCloseButton>
          
          <MobileNavLink to="/" onClick={() => setIsMobileOpen(false)}>Home</MobileNavLink>
          <MobileNavLink 
            to="/#products" 
            onClick={(e) => {
              setIsMobileOpen(false);
              if (location.pathname === '/') {
                e.preventDefault();
                setTimeout(() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }
            }}
          >
            Products
          </MobileNavLink>
          <MobileNavLink to="/" onClick={() => setIsMobileOpen(false)}>Services</MobileNavLink>
          <MobileNavLink to="/" onClick={() => setIsMobileOpen(false)}>About</MobileNavLink>
          <MobileNavLink to="/case-studies" onClick={() => setIsMobileOpen(false)}>Case Studies</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsMobileOpen(false)}>Contact</MobileNavLink>
          <MobileNavLink to="/social-initiative" onClick={() => setIsMobileOpen(false)}>Partner</MobileNavLink>
          <MobileNavLink to="/emergency" onClick={() => setIsMobileOpen(false)}>Emergency</MobileNavLink>
          
          <LangButton onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')} style={{ width: 'fit-content', marginTop: '15px' }}>
            <Globe size={18} />
            {language === 'en' ? 'Hindi (हिन्दी)' : 'English'}
          </LangButton>
        </MobileMenu>
      </MainHeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
