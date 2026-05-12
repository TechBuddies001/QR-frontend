
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ShieldCheck, Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import Button from './Button';
import logoImg from '../assets/new_logo.png';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #ffffff;
  transition: all 0.3s ease;
  padding: 12px 0;
  border-bottom: 1px solid #eeeeee;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0b1a33;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;

  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

const NavLink = styled(Link)`
  color: #333333;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.gold};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
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

// Fix for styled components function call inside render
const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.navy};
  box-shadow: -5px 0 15px rgba(0,0,0,0.5);
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s ease;
  z-index: 1001;
  padding: 80px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  color: #0b1a33;
  cursor: pointer;
  z-index: 1002;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
const CartIcon = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.colors.navy};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover { 
    transform: scale(1.15);
  }
  
  span {
    position: absolute;
    top: -8px;
    right: -8px;
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
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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

import { translations } from '../utils/translations';

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();
  const { language, setLanguage } = useLanguage();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language].nav;

  const links = [
    { name: t.home, path: '/' },
    { name: t.qrSafety, path: '/smart-qr' },
    { name: t.b2b, path: '/b2b-solutions' },
    { name: t.cloudMonitoring, path: '/cloud-monitoring' },
    { name: t.initiative, path: '/social-initiative' },
  ];

  return (
    <HeaderWrapper>
      <Container>
        <Logo to="/">
          <img 
            src={logoImg} 
            alt="V-KAWACH Logo" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
            style={{ height: '55px', objectFit: 'contain', borderRadius: '4px' }} 
          />
          <ShieldCheck size={32} style={{ display: 'none' }} />
          <div>
            <div style={{ lineHeight: '1', letterSpacing: '0.04em', fontSize: '1.8rem', fontWeight: 800, whiteSpace: 'nowrap' }}>V-KAWACH</div>
          </div>
        </Logo>

        <Nav>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.name}
            </NavLink>
          ))}
          <CartIcon to="/cart">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span>{cartCount}</span>}
          </CartIcon>
          <LangButton onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}>
            <Globe size={16} />
            {language === 'en' ? 'HI' : 'EN'}
          </LangButton>
          <Button as={Link} to="/dashboard" variant="primary">{t.login}</Button>
        </Nav>

        <MenuToggle onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </MenuToggle>

        <MobileMenu $isOpen={isMobileOpen}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <LangButton onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')} style={{ width: 'fit-content' }}>
            <Globe size={16} />
            {language === 'en' ? 'Hindi (हिन्दी)' : 'English'}
          </LangButton>
          <Button as={Link} to="/dashboard" onClick={() => setIsMobileOpen(false)} variant="primary" style={{ width: '100%' }}>{t.login}</Button>
        </MobileMenu>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
