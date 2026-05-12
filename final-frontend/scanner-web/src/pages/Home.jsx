
import React, { useState, useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import {
  Shield,
  Smartphone,
  Bell,
  Lock,
  Activity,
  Users,
  Zap,
  Scan,
  ShieldAlert,
  ArrowRight,
  MapPin,
  Eye,
  CheckCircle2,
  Car,
  Bike,
  Baby,
  Dog,
  DoorOpen,
  CreditCard,
  Briefcase,
  AlertTriangle,
  Navigation,
  PhoneCall,
  Volume2,
  History,
  ShoppingCart,
  ShieldCheck,
  Star,
  Quote,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import api from '../lib/api';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = styled.section`
  min-height: 65vh;
  background-color: #0b1a33;
  background-image: ${props => props.bgImage ? `linear-gradient(to right, rgba(11, 26, 51, 0.95) 0%, rgba(11, 26, 51, 0.6) 100%), url(${props.bgImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 60px;
  z-index: 1;
  transition: background-image 0.8s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
`;

const Tagline = styled.h1`
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: 25px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  
  .dim {
    display: block;
    color: white;
    font-size: 2.4rem;
  }

  .highlight {
    color: #C9A84C;
    display: block;
    font-size: 4rem;
    margin-top: 5px;
    line-height: 1.1;
  }

  @media (min-width: 1024px) {
    font-size: 3.2rem;
    .dim {
      font-size: 3.2rem;
    }
    .highlight {
      font-size: 5.2rem;
    }
  }
`;

const Subtext = styled.p`
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 30px;
  max-width: 650px;
  line-height: 1.6;
`;

const HeroImage = styled.div`
  position: relative;
  max-width: 70%;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
  @media (min-width: 1024px) { margin: 0 0 0 auto; }
  img {
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 50px 100px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.1);
  }
`;

const BannerDots = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 30px;
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    cursor: pointer;
    transition: all 0.3s ease;
    &.active {
      background: #C9A84C;
      width: 30px;
      border-radius: 5px;
    }
  }
`;

const ActionButton = styled(Link)`
  background-color: ${props => props.variant === 'outline' ? 'transparent' : '#C9A84C'};
  color: ${props => props.variant === 'outline' ? 'white' : '#0b1a33'};
  border: 2px solid ${props => props.variant === 'outline' ? 'white' : '#C9A84C'};
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    background-color: ${props => props.variant === 'outline' ? 'white' : '#B08D35'};
    color: #0b1a33;
  }
`;

// --- New Sections ---

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  h2 {
    font-size: 2.5rem;
    color: #0b1a33;
    font-weight: 800;
    text-transform: uppercase;
    span { color: #C9A84C; }
  }
  p { color: #666; margin-top: 10px; font-size: 1.1rem; }
  .line {
    width: 80px;
    height: 4px;
    background: #C9A84C;
    margin: 20px auto;
  }
  }
`;

const StrategyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto 50px;
  padding: 0 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const StrategyCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 30px;
  border: 1px solid #eee;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 5px;
    background: #C9A84C;
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: #C9A84C;
    box-shadow: 0 20px 40px rgba(11, 26, 51, 0.1);
    &::before { transform: scaleX(1); }
    .icon-box { background: #0b1a33; color: #C9A84C; }
  }
  
  .icon-box {
    width: 80px;
    height: 80px;
    background: #f8f9fa;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px;
    color: #0b1a33;
    transition: all 0.4s ease;
  }
  
  h3 { font-size: 1.2rem; color: #0b1a33; margin-bottom: 10px; font-weight: 800; }
  p { color: #666; font-size: 0.9rem; margin-bottom: 0; }
`;

const ScrollWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 50px;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: #0b1a33;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: #0b1a33;
    color: white;
    box-shadow: 0 6px 166px rgba(0,0,0,0.2);
  }
  
  &.left { left: 0; }
  &.right { right: 0; }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CategoryGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 10px 0 30px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  
  & > * {
    flex: 0 0 200px;
  }

  @media (max-width: 768px) {
    & > * {
      flex: 0 0 160px;
    }
  }
`;

const CategoryCard = styled(Link)`
  background: white;
  border: 1px solid rgba(0,0,0,0.06);
  padding: 35px 20px;
  border-radius: 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.04);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(11, 26, 51, 0.12);
    border-color: #C9A84C;
    
    .icon-box {
      background: #0b1a33;
      color: #C9A84C;
      transform: scale(1.08);
    }
    h3 { color: #C9A84C; }
  }

  .icon-box {
    width: 72px;
    height: 72px;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f4f8;
    border-radius: 18px;
    color: #0b1a33;
    transition: all 0.4s ease;

    svg {
      width: 34px;
      height: 34px;
      stroke-width: 1.5px;
    }
  }

  h3 {
    font-size: 0.9rem;
    font-weight: 800;
    text-transform: uppercase;
    color: #0b1a33;
    letter-spacing: 1px;
    margin: 0;
    transition: color 0.3s;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

const ModernProductCard = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: all 0.4s ease;
  position: relative;
  &:hover {
    transform: translateY(-12px);
    border-color: #C9A84C;
    box-shadow: 0 30px 60px rgba(11, 26, 51, 0.1);
  }
  .badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #0b1a33;
    color: #C9A84C;
    padding: 6px 12px;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 700;
    z-index: 2;
  }
  .img-box {
    height: 250px;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    img { max-width: 80%; max-height: 80%; object-fit: contain; transition: opacity 0.5s ease; position: absolute; }
  }
  
  .carousel-dots {
    position: absolute;
    bottom: 15px;
    display: flex;
    gap: 6px;
    justify-content: center;
    width: 100%;
    z-index: 5;
    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(0,0,0,0.2);
      cursor: pointer;
      &.active { background: #C9A84C; }
    }
  }
  .content {
    padding: 25px;
    h3 { font-size: 1.25rem; font-weight: 800; color: #0b1a33; margin-bottom: 8px; }
    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-bottom: 20px;
      span {
        font-size: 0.7rem;
        background: #f0f2f5;
        color: #0b1a33;
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: 600;
        text-align: center;
      }
    }
    .price-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        font-size: 1.4rem;
        font-weight: 900;
        color: #0b1a33;
        span { font-size: 0.9rem; color: #999; text-decoration: line-through; margin-left: 5px; }
      }
      .discount { color: #2ecc71; font-weight: 700; font-size: 0.85rem; }
    }
  }
  .footer {
    padding: 0 25px 25px;
    display: flex;
    gap: 10px;
    button { flex: 1; }
  }
`;

const CircularServiceGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 10px 0 30px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  
  & > * {
    flex: 0 0 240px;
  }

  @media (max-width: 768px) {
    & > * {
      flex: 0 0 200px;
    }
  }
`;

const ServiceCard = styled(Link)`
  background: #ffffff;
  border-radius: 24px;
  padding: 35px 20px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(11, 26, 51, 0.1);
    border-color: #C9A84C;

    .icon-wrapper {
      background: #0b1a33;
      color: #C9A84C;
      transform: scale(1.1);
    }
  }

  .icon-wrapper {
    width: 70px;
    height: 70px;
    background: #f8fafc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: #0b1a33;
    transition: all 0.3s ease;
    
    svg {
      width: 32px;
      height: 32px;
      stroke-width: 1.5px;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 800;
    color: #0b1a33;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;
const ThinAlertBar = styled.div`
  background: #0b1a33;
  color: #C9A84C;
  text-align: center;
  padding: 14px 20px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg { width: 18px; height: 18px; flex-shrink: 0; }
`;

/* ── Testimonials ── */
const TestimonialsSection = styled.div`
  background: #f8fafc;
  padding: 80px 20px;

  .section-header {
    max-width: 1400px;
    margin: 0 auto 60px;

    .quote-icon { color: #C9A84C; margin-bottom: 15px; }

    h2 {
      font-size: 2.8rem;
      font-weight: 900;
      color: #0b1a33;
      line-height: 1.2;
      margin: 0;
      span { display: block; }
    }
  }

  .carousel-wrapper {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 40px 1fr 40px;
      gap: 10px;
    }
  }

  .nav-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #C9A84C;
    background: white;
    color: #0b1a33;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;
    &:hover { background: #0b1a33; color: #C9A84C; border-color: #0b1a33; }
  }

  .carousel-viewport {
    overflow: hidden;
    width: 100%;
  }

  .cards {
    display: flex;
    gap: 24px;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    & > * {
      flex: 0 0 calc(33.333% - 16px);
      min-width: 0;
    }

    @media (max-width: 1024px) {
      & > * {
        flex: 0 0 calc(50% - 12px);
      }
    }

    @media (max-width: 768px) {
      & > * {
        flex: 0 0 100%;
      }
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #e2e8f0;
      cursor: pointer;
      transition: all 0.3s ease;
      &.active { background: #C9A84C; transform: scale(1.2); }
    }
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 35px 30px;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  transition: all 0.4s ease;
  position: relative;

  &.featured {
    border: 2px solid #C9A84C;
    transform: scale(1.02);
    box-shadow: 0 20px 50px rgba(11,26,51,0.1);
  }

  .quote { color: #C9A84C; margin-bottom: 20px; }

  p {
    font-size: 0.98rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 30px;
    font-style: italic;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 14px;

    .avatar {
      width: 48px; height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #0b1a33, #C9A84C);
      display: flex; align-items: center; justify-content: center;
      color: white; font-weight: 900; font-size: 1.2rem;
      flex-shrink: 0;
    }

    .info {
      .name { font-weight: 800; color: #0b1a33; font-size: 1rem; }
      .loc { font-size: 0.82rem; color: #C9A84C; font-weight: 700; }
    }
  }
`;

/* ── FAQ ── */
const FAQSection = styled.div`
  background: white;
  padding: 80px 20px;

  .faq-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .faq-header {
    text-align: center;
    margin-bottom: 60px;

    h2 {
      font-size: 2.8rem;
      font-weight: 900;
      color: #0b1a33;
      margin-bottom: 10px;
      span {
        display: block;
        width: 60px;
        height: 4px;
        background: #C9A84C;
        margin: 12px auto 0;
        border-radius: 2px;
      }
    }
    p { color: #888; font-size: 1rem; }
  }
`;

const FAQItem = styled.div`
  border: 1px solid #e8ecf0;
  border-radius: 16px;
  margin-bottom: 14px;
  overflow: hidden;
  transition: all 0.3s ease;

  &.open { border-color: #C9A84C; box-shadow: 0 8px 24px rgba(201,168,76,0.1); }

  .faq-q {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 28px;
    cursor: pointer;
    background: white;
    transition: background 0.3s;

    &:hover { background: #fffdf5; }

    .q-left {
      display: flex;
      align-items: center;
      gap: 14px;

      .bar {
        width: 4px;
        height: 36px;
        border-radius: 2px;
        background: ${props => props.open ? '#C9A84C' : '#e8ecf0'};
        transition: background 0.3s;
        flex-shrink: 0;
      }

      span {
        font-size: 1rem;
        font-weight: 700;
        color: #0b1a33;
      }
    }

    svg {
      color: #C9A84C;
      transition: transform 0.3s;
      transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};
      flex-shrink: 0;
    }
  }

  .faq-a {
    padding: ${props => props.open ? '0 28px 24px 46px' : '0 28px 0 46px'};
    max-height: ${props => props.open ? '300px' : '0'};
    overflow: hidden;
    transition: all 0.35s ease;
    font-size: 0.97rem;
    line-height: 1.75;
    color: #555;
  }
`;

const CertificationSection = styled.div`
  padding: 80px 20px;
  text-align: center;
  background: white;
  
  h2 {
    font-size: 2rem;
    color: #0b1a33;
    font-weight: 800;
    margin-bottom: 10px;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    
    &::after {
      display: none;
    }
  }
  
  .subtitle {
    color: #666;
    margin-bottom: 50px;
    font-size: 1.1rem;
  }
  
  .badges {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: 0 auto;
    
    .badge-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      transition: transform 0.3s ease;
      &:hover { transform: scale(1.1); }
      
      img {
        height: 80px;
        width: auto;
        filter: grayscale(0.2);
        &:hover { filter: grayscale(0); }
      }
      
      .circle-r {
        width: 60px;
        height: 60px;
        border: 2px solid #333;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 800;
        color: #333;
      }
    }
  }
`;

const ComparisonContainer = styled.div`
  background: #0b1a33;
  border-radius: 40px;
  padding: 60px 40px;
  max-width: 1400px;
  margin: 0 auto 80px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0,0,0,0.3);

  @media (max-width: 1024px) {
    padding: 40px 20px;
    border-radius: 20px;
    margin: 0 20px 60px;
  }
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 1fr 1fr;
  gap: 0;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 180px 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

const ComparisonColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  position: relative;
  
  &.feature-labels {
    text-align: left;
    padding-right: 40px;
    h3 { font-size: 1.8rem; color: #C9A84C; margin-bottom: 30px; font-weight: 800; }
    
    @media (max-width: 768px) {
      padding-right: 0;
      h3 { text-align: center; }
    }
  }

  &.featured {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 30px;
    border: 1px solid rgba(201, 168, 76, 0.2);
    
    .popular-badge {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: #C9A84C;
      color: #0b1a33;
      padding: 5px 20px;
      border-radius: 100px;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
    }
  }

  .plan-header {
    margin-bottom: 40px;
    .tier { font-size: 0.8rem; font-weight: 800; color: #999; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 2px; }
    .price { 
      font-size: 2.8rem; font-weight: 900; color: white; 
      span { font-size: 0.9rem; color: #666; font-weight: 600; }
    }
  }

  .feature-cell {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 0.95rem;
    color: #999;
    
    &.label {
      justify-content: flex-start;
      color: #ccc;
      font-weight: 600;
    }
    
    svg.check { color: #C9A84C; }
    span.dash { color: #333; font-weight: 900; }
  }

  .cta-box {
    margin-top: 40px;
    button { width: 100%; border-radius: 12px; font-weight: 800; padding: 15px; }
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const TabButton = styled.button`
  padding: 12px 30px;
  border-radius: 50px;
  border: 2px solid ${props => props.active ? '#C9A84C' : '#eee'};
  background: ${props => props.active ? 'white' : '#f8f9fa'};
  color: ${props => props.active ? '#C9A84C' : '#666'};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
  
  &:hover {
    border-color: #C9A84C;
    color: #C9A84C;
    background: white;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

const FeatureBox = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 20px;
  border: 1px solid #eee;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    border-color: #C9A84C;
    background: #0b1a33;
    h4 { color: #C9A84C; }
    .icon { color: white; transform: rotateY(360deg); }
  }
  .icon { font-size: 2.0rem; color: #C9A84C; margin-bottom: 15px; transition: all 0.6s ease; stroke-width: 1.5; }
  h4 { font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: #0b1a33; }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  h2 { font-size: 2.5rem; color: #0b1a33; font-weight: 900; margin-bottom: 30px; text-align: left; }
  p { font-size: 1.1rem; line-height: 1.8; color: #555; margin-bottom: 40px; }
  .stats {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 50px;
    padding-top: 40px;
    border-top: 1px solid #eee;
    .stat-item {
      h3 { font-size: 2.5rem; color: #C9A84C; font-weight: 900; }
      span { font-size: 0.9rem; text-transform: uppercase; font-weight: 700; color: #0b1a33; }
    }
  }
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 0;
  text-align: left;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  border-left: 4px solid #C9A84C;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  h4 {
    color: #C9A84C;
    font-size: 1.1rem;
    font-weight: 800;
    margin-bottom: 5px;
  }
  p {
    font-size: 0.9rem !important;
    line-height: 1.4 !important;
    margin-bottom: 0 !important;
    color: #666 !important;
  }
`;

const getIcon = (name) => {
  const icons = {
    'ShieldAlert': <ShieldAlert size={32} />,
    'AlertTriangle': <AlertTriangle size={32} />,
    'Users': <Users size={32} />,
    'Scan': <Scan size={32} />,
    'Zap': <Zap size={32} />,
    'Bell': <Bell size={32} />,
    'ShieldCheck': <ShieldCheck size={32} />,
    'Activity': <Activity size={32} />,
    'Smartphone': <Smartphone size={32} />,
    'Lock': <Lock size={32} />
  };
  return icons[name] || <Shield size={32} />;
};

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const getCategoryIcon = (name) => {
    const lower = (name || '').toLowerCase();
    // Minimalist Navy/Gold Lucide line icons — no colorful clipart
    if (lower.includes('child') || lower.includes('kid')) return <Baby size={34} strokeWidth={1.5} />;
    if (lower.includes('pet') || lower.includes('dog')) return <Dog size={34} strokeWidth={1.5} />;
    if (lower.includes('travel') || lower.includes('luggage')) return <Briefcase size={34} strokeWidth={1.5} />;
    if (lower.includes('gadget') || lower.includes('phone') || lower.includes('laptop')) return <Smartphone size={34} strokeWidth={1.5} />;
    if (lower.includes('corporate') || lower.includes('office')) return <Briefcase size={34} strokeWidth={1.5} />;
    if (lower.includes('medical') || lower.includes('emergency')) return <Activity size={34} strokeWidth={1.5} />;
    if (lower.includes('vehicle') || lower.includes('parking') || lower.includes('bike')) return <Car size={34} strokeWidth={1.5} />;
    if (lower.includes('home') || lower.includes('door')) return <DoorOpen size={34} strokeWidth={1.5} />;
    if (lower.includes('qr')) return <Scan size={34} strokeWidth={1.5} />;
    if (lower.includes('family')) return <Users size={34} strokeWidth={1.5} />;
    return <Shield size={34} strokeWidth={1.5} />;
  };

  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [plans, setPlans] = useState([]);
  const [securityFeatures, setSecurityFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePlanTab, setActivePlanTab] = useState('LITE');
  const [activeProductTab, setActiveProductTab] = useState('VEHICLE');
  const [heroBanners, setHeroBanners] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePlanCheckout = async (plan) => {
    try {
      const isLoaded = await loadRazorpay();
      if (!isLoaded) {
        toast.error('Razorpay SDK failed to load. Are you online?');
        return;
      }

      // 1. Create Razorpay Order in Backend
      const orderRes = await api.post('/payments/create-order', {
        amount: plan.price,
        receipt: `plan_${plan.tier}_${Date.now()}`
      });

      if (!orderRes.data.success) {
        throw new Error(orderRes.data.error || 'Order creation failed');
      }

      const { order } = orderRes.data;

      // 2. Open Razorpay Checkout Modal
      const options = {
        key: 'rzp_test_Sld6vwxfI5Afv3', // Test Key ID
        amount: order.amount,
        currency: order.currency,
        name: 'V-KAWACH Safety Plans',
        description: `Activation for ${plan.tier} Tier`,
        image: '/assets/new_logo.png',
        order_id: order.id,
        handler: async (response) => {
          // 3. Verify Payment
          try {
            const verifyRes = await api.post('/payments/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              customerData: {
                name: 'Plan Customer',
                email: 'customer@v-kawach.in',
                phone: '0000000000',
                shippingAddress: 'Digital Activation'
              },
              cart: [{
                productId: plan.id,
                name: `${plan.tier} Subscription Plan`,
                quantity: 1,
                price: plan.price
              }],
              totalAmount: plan.price
            });

            if (verifyRes.data.success) {
              toast.success(`${plan.tier} Plan Activated Successfully!`);
              navigate('/dashboard');
            } else {
              toast.error('Payment verification failed.');
            }
          } catch (vErr) {
            console.error('Verification Error:', vErr);
            toast.error('Payment verification error.');
          }
        },
        theme: {
          color: '#0b1a33'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Failed to initiate payment');
    }
  };
  const [apiUrl, setApiUrl] = useState('');

  const categoriesRef = useRef(null);
  const featuresRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    const token = localStorage.getItem('admin_token');
    if (!token) {
      toast.error('Please login to add items to your cart.', {
        icon: '🔒',
        style: {
          borderRadius: '100px',
          background: '#0b1a33',
          color: '#fff',
        },
      });
      navigate(`/login?returnUrl=${encodeURIComponent(window.location.pathname)}`);
      return;
    }

    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      icon: '🛒',
      style: {
        borderRadius: '100px',
        background: '#0b1a33',
        color: '#fff',
      },
    });
  };

  useEffect(() => {
    if (heroBanners.length > 1) {
      const interval = setInterval(() => {
        setCurrentBannerIndex(prev => (prev + 1) % heroBanners.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [heroBanners]);

  const ProductImageSlider = ({ photos, productName, apiUrl }) => {
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    useEffect(() => {
      if (!photos || photos.length <= 1) return;
      const interval = setInterval(() => {
        setCurrentImageIdx((prev) => (prev + 1) % photos.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [photos]);

    if (!photos || photos.length === 0) {
      return <img src="https://img.icons8.com/fluency/400/security-checked.png" alt={productName} style={{opacity: 1}}/>;
    }

    return (
      <>
        {photos.map((photo, idx) => {
          let imgSrc = photo.startsWith('http') ? photo : `${apiUrl}${photo}`;
          if (imgSrc.includes('images.icons8.com')) imgSrc = imgSrc.replace('images.icons8.com', 'img.icons8.com').replace('/bubbles/', '/fluency/');
          return (
            <img 
              key={idx} 
              src={imgSrc} 
              alt={`${productName} - ${idx}`} 
              style={{ opacity: idx === currentImageIdx ? 1 : 0, zIndex: idx === currentImageIdx ? 2 : 1 }} 
            />
          );
        })}
        {photos.length > 1 && (
          <div className="carousel-dots" onClick={(e) => e.preventDefault()}>
            {photos.map((_, idx) => (
              <span 
                key={idx} 
                className={idx === currentImageIdx ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); setCurrentImageIdx(idx); }}
              />
            ))}
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    setApiUrl(window.location.hostname === 'localhost' ? 'http://localhost:5001' : '');
    const fetchData = async () => {
      try {
        const results = await Promise.allSettled([
          api.get('/categories'),
          api.get('/products?type=SAFETY'),
          api.get('/public/settings'),
          api.get('/plans')
        ]);

        if (results[0].status === 'fulfilled') {
          const allCats = results[0].value.data?.categories || [];
          const filteredCats = allCats.filter(cat => cat.name !== 'Smart Home');
          setCategories(filteredCats);
        }
        if (results[1].status === 'fulfilled') {
          setProducts(results[1].value.data?.products || []);
        }
        if (results[2].status === 'fulfilled') {
          try {
            const settingsData = results[2].value.data?.settings;
            console.log('Public settings fetched:', settingsData);
            
            if (settingsData?.homeSecurityFeatures) {
              const parsedFeatures = JSON.parse(settingsData.homeSecurityFeatures);
              setSecurityFeatures(parsedFeatures);
            }
            
            if (settingsData?.heroBannersList) {
              const parsedBanners = JSON.parse(settingsData.heroBannersList);
              console.log('Parsed banners:', parsedBanners);
              setHeroBanners(parsedBanners);
            }
          } catch (e) {
            console.error('Failed to parse settings:', e);
          }
        }
        if (results[3].status === 'fulfilled') {
          setPlans(results[3].value.data?.plans || []);
        }
      } catch (err) {
        console.error('Failed to fetch home data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const currentBgImage = heroBanners[currentBannerIndex]?.imageUrl ? 
    (heroBanners[currentBannerIndex].imageUrl.startsWith('http') ? heroBanners[currentBannerIndex].imageUrl : `${apiUrl}${heroBanners[currentBannerIndex].imageUrl}`) 
    : null;

  return (
    <>
      <HeroSection key={currentBannerIndex} bgImage={currentBgImage}>
        <HeroContainer>
          <div style={{ animation: 'fadeIn 0.8s ease-out', maxWidth: '800px' }}>
            <Tagline>
              <span className="dim">{heroBanners[currentBannerIndex]?.taglineDim || t.hero.taglineDim}</span>
              <span className="highlight">{heroBanners[currentBannerIndex]?.taglineHighlight || t.hero.taglineHighlight}</span>
            </Tagline>
            <Subtext style={{ fontSize: '1.2rem', opacity: '0.9', marginBottom: '40px' }}>
              {heroBanners[currentBannerIndex]?.subtext || t.hero.subtext}
            </Subtext>
            <div style={{ display: 'flex', gap: '15px' }}>
              <ActionButton to="/smart-qr">{heroBanners[currentBannerIndex]?.button1Text || t.hero.getStarted}</ActionButton>
              <ActionButton to="/watch-demo" variant="outline">{heroBanners[currentBannerIndex]?.button2Text || t.hero.watchDemo}</ActionButton>
            </div>
            
            {heroBanners.length > 1 && (
              <BannerDots>
                {heroBanners.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={currentBannerIndex === idx ? 'active' : ''} 
                    onClick={() => setCurrentBannerIndex(idx)}
                  />
                ))}
              </BannerDots>
            )}
          </div>
          {/* We hide the small preview image as it's now the full background */}
          {!currentBgImage && (
            <HeroImage style={{ animation: 'slideInRight 0.8s ease-out' }}>
              <img 
                src="/assets/v-kawach-packaging.jpg" 
                alt="Banner" 
                style={{ borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.3)' }} 
              />
            </HeroImage>
          )}
        </HeroContainer>
        
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </HeroSection>

      <Section bg="light">
        <SectionTitle>
          <h2>{t.sections.categories.title} <span>{t.sections.categories.highlight}</span></h2>
          <p>{t.sections.categories.subtext}</p>
          <div className="line" />
        </SectionTitle>
        <ScrollWrapper>
          <ScrollButton className="left" onClick={() => scroll(categoriesRef, 'left')}><ChevronLeft /></ScrollButton>
          <CategoryGrid ref={categoriesRef}>
            {categories.map((cat) => {
              return (
                <CategoryCard key={cat.id} to={`/category/${cat.id}`}>
                  <div className="icon-box" style={{ padding: '20px', overflow: 'hidden' }}>
                    {getCategoryIcon(cat.name)}
                  </div>
                  <h3>{cat.name}</h3>
                </CategoryCard>
              );
            })}
            {categories.length === 0 && !loading && (
              <p style={{ textAlign: 'center', gridColumn: '1/-1', color: '#999', padding: '40px' }}>No categories found. Manage them in Admin Panel.</p>
            )}
          </CategoryGrid>
          <ScrollButton className="right" onClick={() => scroll(categoriesRef, 'right')}><ChevronRight /></ScrollButton>
        </ScrollWrapper>
      </Section>

      <Section bg="white">
        <SectionTitle>
          <h2>How It Works <span>3 Easy Steps</span></h2>
          <p>Protecting what matters most is now simpler than ever</p>
          <div className="line" />
        </SectionTitle>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <img src="/assets/v-kawach-steps.jpg" alt="V-Kawach 3 Easy Steps" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
        </div>
      </Section>

      <Section bg="white">
        <SectionTitle>
          <h2>{t.sections.safetyIds.title} <span>{t.sections.safetyIds.highlight}</span></h2>
          <p>{t.sections.safetyIds.subtext}</p>
          <div className="line" />
        </SectionTitle>
        <TabContainer>
          {[
            { id: 'VEHICLE', label: 'Vehicle', icon: <Icons.Car size={18} /> },
            { id: 'PERSONAL', label: 'Personal', icon: <Icons.User size={18} /> },
            { id: 'PETS', label: 'Pets', icon: <Icons.Dog size={18} /> }
          ].map((tab) => (
            <TabButton
              key={tab.id}
              active={activeProductTab === tab.id}
              onClick={() => setActiveProductTab(tab.id)}
              style={{ minWidth: '120px', padding: '10px 20px', fontSize: '0.9rem' }}
            >
              {tab.icon} {tab.label}
            </TabButton>
          ))}
        </TabContainer>

        <ProductGrid>
          {products
            .filter(prod => {
              const name = (prod.name || '').toLowerCase();
              if (activeProductTab === 'VEHICLE') return /\b(vehicle|car|cars|bike|bikes|cycle|parking)\b/i.test(name);
              if (activeProductTab === 'PERSONAL') return /\b(kid|child|woman|laptop|bag|luggage|luggge|gadget|office|corporate|identity|card)\b/i.test(name) && !/\b(car|bike)\b/i.test(name);
              if (activeProductTab === 'PETS') return /\b(pet|dog|cat|animal)\b/i.test(name);
              return true;
            })
            .slice(0, 6)
            .map((prod) => {
              const photos = typeof prod.photos === 'string' ? JSON.parse(prod.photos || "[]") : (prod.photos || []);
              const dynamicData = typeof prod.dynamicData === 'string' ? JSON.parse(prod.dynamicData || "[]") : (prod.dynamicData || []);
              const features = dynamicData.slice(0, 4);
              let imgSrc = photos[0] ? (photos[0].startsWith('http') ? photos[0] : `${apiUrl}${photos[0]}`) : "https://img.icons8.com/fluency/400/security-checked.png";
              if (imgSrc.includes('images.icons8.com')) {
                imgSrc = imgSrc.replace('images.icons8.com', 'img.icons8.com').replace('/bubbles/', '/fluency/');
              }
              return (
                <ModernProductCard key={prod.id}>
                  {prod.isCounterfeit && <div className="badge" style={{ background: '#e74c3c' }}>RECALLED</div>}
                  <Link to={`/product/${prod.id}`} className="img-box">
                    <ProductImageSlider photos={photos} productName={prod.name} apiUrl={apiUrl} />
                  </Link>
                  <div className="content">
                    <h3>{prod.name}</h3>
                    <div className="price-row">
                      <div className="price">₹{prod.mrp || 0} <span>₹{Math.round((prod.mrp || 0) * 1.5)}</span></div>
                      <div className="discount">33% OFF</div>
                    </div>
                  </div>
                  <div className="footer">
                    <ActionButton to={`/product/${prod.id}`} style={{ padding: '10px 15px', fontSize: '0.8rem' }}>VIEW DETAILS</ActionButton>
                    <Button variant="secondary" style={{ padding: '10px 15px' }} onClick={(e) => handleAddToCart(e, prod)}>
                      <ShoppingCart size={18} />
                    </Button>
                  </div>
                </ModernProductCard>
              );
            })}
        </ProductGrid>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <ActionButton to="/smart-qr" variant="outline" style={{ padding: '12px 30px', fontSize: '0.9rem' }}>
            VIEW ALL PRODUCTS <Icons.ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </ActionButton>
        </div>
      </Section>

      <Section bg="light">
        <SectionTitle>
          <h2>{t.sections.services.title} <span>{t.sections.services.highlight}</span></h2>
          <p>{t.sections.services.subtext}</p>
          <div className="line" />
        </SectionTitle>
        <ScrollWrapper>
          <ScrollButton className="left" onClick={() => scroll(featuresRef, 'left')}><ChevronLeft /></ScrollButton>
        <CircularServiceGrid ref={featuresRef}>
            <ServiceCard to="/service/instant-call-masking">
              <div className="icon-wrapper"><Icons.PhoneForwarded size={34} strokeWidth={1.5} /></div>
              <span>Call Masking</span>
            </ServiceCard>
            <ServiceCard to="/service/qr-security">
              <div className="icon-wrapper"><Icons.Scan size={34} strokeWidth={1.5} /></div>
              <span>QR Security</span>
            </ServiceCard>
            <ServiceCard to="/service/emergency-helplines">
              <div className="icon-wrapper"><Icons.PhoneCall size={34} strokeWidth={1.5} /></div>
              <span>Helplines</span>
            </ServiceCard>
            <ServiceCard to="/service/data-privacy">
              <div className="icon-wrapper"><Icons.ShieldCheck size={34} strokeWidth={1.5} /></div>
              <span>Data Privacy</span>
            </ServiceCard>
            <ServiceCard to="/service/verified">
              <div className="icon-wrapper"><Icons.BadgeCheck size={34} strokeWidth={1.5} /></div>
              <span>Verified Identity</span>
            </ServiceCard>
            <ServiceCard to="/service/instant-alerts">
              <div className="icon-wrapper"><Icons.Zap size={34} strokeWidth={1.5} /></div>
              <span>Instant Alerts</span>
            </ServiceCard>
          </CircularServiceGrid>
          <ScrollButton className="right" onClick={() => scroll(featuresRef, 'right')}><ChevronRight /></ScrollButton>
        </ScrollWrapper>
      </Section>

      <Section bg="white">
        <SectionTitle>
          <h2>{t.sections.features.title} <span>{t.sections.features.highlight}</span></h2>
          <p>{t.sections.features.subtext}</p>
          <div className="line" />
        </SectionTitle>

        <ComparisonContainer>
          <TabContainer style={{ marginBottom: '60px' }}>
            {['BIKE SECURITY', 'CAR SECURITY'].map((cat) => (
              <TabButton
                key={cat}
                active={activePlanTab === (cat === 'BIKE SECURITY' ? 'LITE' : 'ELITE')}
                onClick={() => setActivePlanTab(cat === 'BIKE SECURITY' ? 'LITE' : 'ELITE')}
                style={{ 
                  background: activePlanTab === (cat === 'BIKE SECURITY' ? 'LITE' : 'ELITE') ? '#C9A84C' : 'transparent',
                  color: activePlanTab === (cat === 'BIKE SECURITY' ? 'LITE' : 'ELITE') ? '#0b1a33' : 'white',
                  borderColor: activePlanTab === (cat === 'BIKE SECURITY' ? 'LITE' : 'ELITE') ? '#C9A84C' : 'rgba(255,255,255,0.1)',
                  minWidth: '200px'
                }}
              >
                {cat}
              </TabButton>
            ))}
          </TabContainer>

          <ComparisonGrid>
            <ComparisonColumn className="feature-labels">
              <h3>Compare Tiers</h3>
              {[
                'Basic QR Scan',
                'Direct Call (No Masking)',
                'WhatsApp Alert (No Masking)',
                'Privacy Masking',
                'Call Masking (Protected)',
                'WhatsApp Masking (Protected)',
                'Live Location Sharing'
              ].map((f, i) => (
                <div key={i} className="feature-cell label">{f}</div>
              ))}
            </ComparisonColumn>

            {['LITE', 'PRO', 'ELITE'].map((tierName) => {
              const plan = plans.find(p => p.tier?.toUpperCase() === tierName);
              if (!plan) return <ComparisonColumn key={tierName} />;
              
              const planFeatures = (plan.features || []).map(f => f.toLowerCase());
              
              return (
                <ComparisonColumn key={tierName} className={tierName === 'PRO' ? 'featured' : ''}>
                  {tierName === 'PRO' && <div className="popular-badge">Popular</div>}
                  <div className="plan-header">
                    <div className="tier">{tierName}</div>
                    <div className="price">₹{plan.price} <span>/yr</span></div>
                  </div>
                  
                  {[
                    'scan',
                    'direct',
                    'whatsapp alert',
                    'privacy',
                    'call masking',
                    'whatsapp masking',
                    'location'
                  ].map((featKey, i) => {
                    const hasFeature = planFeatures.some(f => f.includes(featKey));
                    return (
                      <div key={i} className="feature-cell">
                        {hasFeature ? <Icons.Check size={20} className="check" /> : <span className="dash">—</span>}
                      </div>
                    );
                  })}

                  <div className="cta-box">
                    <Button 
                      onClick={() => handlePlanCheckout(plan)}
                      style={{ 
                        background: tierName === 'PRO' ? '#C9A84C' : 'transparent',
                        color: tierName === 'PRO' ? '#0b1a33' : '#C9A84C',
                        border: '2px solid #C9A84C'
                      }}
                    >
                      Get {tierName.charAt(0) + tierName.slice(1).toLowerCase()}
                    </Button>
                  </div>
                </ComparisonColumn>
              );
            })}
          </ComparisonGrid>
        </ComparisonContainer>
      </Section>

      <Section bg="white">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          <div>
            <SectionTitle style={{ textAlign: 'left', margin: 0 }}>
              <h2 style={{ fontSize: '3rem' }}>Travel with <span>Absolute Peace</span></h2>
              <p style={{ margin: '25px 0' }}>Never worry about lost luggage again. Our Smart QR tags ensure that your bags are always connected to you, anywhere in the world.</p>
              <div className="line" style={{ margin: '0 0 30px 0' }} />
            </SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px' }}>
                <Icons.Globe size={24} color="#C9A84C" />
                <h4 style={{ margin: '10px 0 5px' }}>Global Reach</h4>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Works worldwide with zero roaming charges for the finder.</p>
              </div>
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px' }}>
                <Icons.ShieldCheck size={24} color="#C9A84C" />
                <h4 style={{ margin: '10px 0 5px' }}>ID Privacy</h4>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Your personal contact details are never exposed to the public.</p>
              </div>
            </div>
            <Button as={Link} to="/smart-qr" variant="primary" style={{ padding: '15px 40px' }}>EXPLORE TAGS</Button>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="/assets/luggage-sticker-red.jpg" alt="Luggage Tags" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }} />
            <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', width: '250px', border: '8px solid white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
              <img src="/assets/luggage-sticker-green.jpg" alt="Luggage Tags" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection>
        <div className="section-header">
          <Icons.Quote size={42} className="quote-icon" />
          <h2><span>What our</span>Customers Say</h2>
        </div>
        <div className="carousel-wrapper">
          <button className="nav-btn" onClick={() => setTestimonialSlide(s => (s - 1 + 8) % 8)}>
            <Icons.ChevronLeft size={20} />
          </button>
          <div className="carousel-viewport">
            <div className="cards" style={{ transform: `translateX(calc(-${testimonialSlide * (100 / (window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1))}%))` }}>
              {[
                { name: 'Swati Singh', loc: 'Bihar', featured: false,
                  text: '"V-KAWACH\'s Pet Safety QR helped me find my lost dog. Someone scanned the QR and <b>connected with me directly</b> — absolutely stress-free!"' },
                { name: 'Rajat Patel', loc: 'Gujarat', featured: true,
                  text: '"V-KAWACH Smart QR Tag has enhanced our vehicle\'s security. In an emergency, anyone can scan the QR and <b>instantly connect with us</b>."' },
                { name: 'Surya Prakash', loc: 'Jaipur', featured: false,
                  text: '"A fire broke out in my car in a crowded market — the Police scanned the V-KAWACH QR and contacted me immediately. This tag <b>saved us from a major loss</b>."' },
                { name: 'Aman Verma', loc: 'Delhi', featured: false,
                  text: '"Wrong parking was a common issue in Delhi\'s crowd. Now anyone scans the QR and informs me, and I move my car. A <b>very useful product</b>!"' },
                { name: 'Priya Sharma', loc: 'Mumbai', featured: true,
                  text: '"My daughter\'s school bag has a V-KAWACH tag. As a mother, I have <b>peace of mind</b> that anyone can reach me instantly in case of need."' },
                { name: 'Vikram Singh', loc: 'Chandigarh', featured: false,
                  text: '"I left my wallet in a cafe. A kind person scanned the QR card inside and called me. <b>Amazing technology</b>!"' },
                { name: 'Neha Gupta', loc: 'Bangalore', featured: false,
                  text: '"I left my laptop in an auto. The driver contacted me through the QR, and I got my valuable data and laptop back safely. <b>Thank you V-KAWACH!</b>"' },
                { name: 'Amit Redhu', loc: 'Haryana', featured: true,
                  text: '"This is very useful for my elderly father. He always carries an <b>emergency QR card</b>, which has reduced our worries about his safety."' }
              ].map((review, i) => (
                <TestimonialCard key={i} className={review.featured ? 'featured' : ''} style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
                  <Icons.Quote size={28} className="quote" />
                  <p dangerouslySetInnerHTML={{ __html: review.text }} />
                  <div className="author">
                    <div className="info">
                      <div className="name">{review.name}</div>
                      <div className="loc">{review.loc}</div>
                    </div>
                  </div>
                </TestimonialCard>
              ))}
            </div>
          </div>
          <button className="nav-btn" onClick={() => setTestimonialSlide(s => (s + 1) % 8)}>
            <Icons.ChevronRight size={20} />
          </button>
        </div>
        <div className="dots">
          {[0,1,2,3,4,5,6,7].map(i => (
            <span key={i} className={testimonialSlide === i ? 'active' : ''} onClick={() => setTestimonialSlide(i)} />
          ))}
        </div>
      </TestimonialsSection>
      

      {/* ── FAQ ── */}
      <FAQSection>
        <div className="faq-inner">
          <div className="faq-header">
            <h2>Frequently Asked Questions<span /></h2>
            <p>V-KAWACH के बारे में सामान्य प्रश्नों के उत्तर पाएं</p>
          </div>
          {[
            { q: 'V-KAWACH Safety QR क्या है?',
              a: 'V-KAWACH Safety QR एक अगली पीढ़ी की डिजिटल सुरक्षा प्रणाली है जिसमें एक QR Tag आपके वाहन, लैपटॉप, बच्चे या पालतू जानवर पर लगाया जाता है। Emergency में कोई भी इसे scan करके आपसे तुरंत और anonymously connect कर सकता है।' },
            { q: 'V-KAWACH QR कैसे काम करता है?',
              a: 'QR scan होने पर एक secure page खुलता है जहाँ scanner अपना नंबर enter करता है। V-KAWACH का call masking system दोनों के नंबर छुपाकर एक safe call connect करता है — आपकी privacy 100% सुरक्षित रहती है।' },
            { q: 'क्या बिना internet के QR scan होगा?',
              a: 'QR scan के लिए scanner के फोन पर internet होना जरूरी है। लेकिन Emergency call का option हमेशा available रहता है जो बिना internet के भी काम करता है।' },
            { q: 'क्या मेरा मोबाइल नंबर सुरक्षित (Safe) रहेगा?',
              a: 'बिल्कुल! V-KAWACH में आपका नंबर कभी किसी को दिखता नहीं है। हमारी Privacy-First Call Masking Technology दोनों parties के नंबर को पूरी तरह छुपा देती है।' },
            { q: 'V-KAWACH QR कहाँ-कहाँ use हो सकता है?',
              a: 'गाड़ी (कार/बाइक), लैपटॉप, बच्चों का बैग, पालतू जानवर का collar, luggage, medical emergency card, corporate ID badge — कहीं भी जहाँ emergency में contact की ज़रूरत हो।' },
          ].map((item, i) => (
            <FAQItem key={i} open={openFaq === i}>
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="q-left">
                  <div className="bar" />
                  <span style={{ fontWeight: '800' }}>{item.q}</span>
                </div>
                <Icons.ChevronDown size={20} />
              </div>
              <div className="faq-a">{item.a}</div>
            </FAQItem>
          ))}
        </div>
      </FAQSection>

      <Section bg="light">
        <AboutContent>
          <h2>{t.about.title} <span>{t.about.highlight}</span></h2>
          <div dangerouslySetInnerHTML={{ __html: t.about.content }} />

          <div className="stats">
            <div className="stat-item">
              <h3>24/7</h3>
              <span>{t.about.stats.monitoring}</span>
            </div>
            <div className="stat-item">
              <h3>Vision</h3>
              <span>Impact 10,000+ Lives</span>
            </div>
            <div className="stat-item">
              <h3>Looking for</h3>
              <span>Partners</span>
            </div>
          </div>
        </AboutContent>
      </Section>

      <ThinAlertBar>
        <ShieldAlert /> V-Kawach Safety QR आपकी सुरक्षा के लिए है, इससे किसी भी प्रकार का payment नहीं किया जा सकता है।
      </ThinAlertBar>
    </>
  );
};

export default Home;
