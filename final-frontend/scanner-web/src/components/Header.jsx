
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ShieldCheck, Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from './Button';
import logoImg from '../assets/new_logo.png';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ $isScrolled, theme }) => ($isScrolled ? 'rgba(11, 26, 51, 0.95)' : 'transparent')};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(10px)' : 'none')};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${({ $isScrolled }) => ($isScrolled ? '12px 0' : '22px 0')};
  border-bottom: 1px solid ${({ $isScrolled }) => ($isScrolled ? 'rgba(255,255,255,0.08)' : 'transparent')};
  box-shadow: ${({ $isScrolled }) => ($isScrolled ? '0 10px 30px rgba(0,0,0,0.2)' : 'none')};
`;

const Container = styled.div`
  max-width: 1200px;
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
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;

  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  opacity: 0.8;
  position: relative;

  &:hover, &.active {
    opacity: 1;
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
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  z-index: 1002;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
const CartIcon = styled(Link)`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover { 
    color: ${({ theme }) => theme.colors.gold}; 
    transform: scale(1.15) rotate(-5deg);
  }
  
  span {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #e74c3c;
    color: white;
    font-size: 10px;
    font-weight: 900;
    min-width: 20px;
    height: 20px;
    padding: 0 4px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({ theme }) => theme.colors.navy};
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'QR Safety', path: '/smart-qr' },
    { name: 'Cloud Monitoring', path: '/cloud-monitoring' },
    { name: 'GPS Tracking', path: '/gps-tracking' },
    { name: 'Initiative', path: '/social-initiative' },
  ];

  return (
    <HeaderWrapper $isScrolled={isScrolled || !isHomePage}>
      <Container>
        <Logo to="/">
          <img 
            src={logoImg} 
            alt="Tarkshya Solution Logo" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
            style={{ height: '45px', objectFit: 'contain', borderRadius: '4px' }} 
          />
          <ShieldCheck size={32} style={{ display: 'none' }} />
          <div>
            <div style={{ lineHeight: '1' }}>Tarkshya Solution</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 400, opacity: 0.8, marginTop: '2px', letterSpacing: '0.05em', fontFamily: 'sans-serif', textTransform: 'uppercase' }}>Securing your World</div>
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
          <Button as={Link} to="/dashboard" variant="primary">LOGIN/DASHBOARD</Button>
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
          <Button as={Link} to="/dashboard" onClick={() => setIsMobileOpen(false)} variant="primary" style={{ width: '100%' }}>LOGIN / DASHBOARD</Button>
        </MobileMenu>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
