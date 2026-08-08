import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import {
  Monitor, Lock, Zap, Clock, Eye, ShieldCheck, Bell, Users,
  Settings, Smartphone, ChevronLeft, ChevronRight, CheckCircle
} from 'lucide-react';

/* ─── Animations ─── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const countUp = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
`;

/* ─── Hero ─── */
const Hero = styled.section`
  position: relative;
  height: 92vh;
  min-height: 560px;
  background: url('/cloud_monitoring_hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(11,26,51,0.88) 0%, rgba(11,26,51,0.55) 100%);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  animation: ${fadeUp} 0.8s ease both;
`;

const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(201,168,76,0.15);
  border: 1px solid rgba(201,168,76,0.4);
  color: #C9A84C;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 900;
  color: white;
  line-height: 1.15;
  max-width: 700px;
  margin-bottom: 16px;

  span { color: #C9A84C; }
`;

const HeroSub = styled.p`
  font-size: 1.15rem;
  color: rgba(255,255,255,0.75);
  max-width: 540px;
  margin-bottom: 36px;
  line-height: 1.7;
`;

const HeroBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #C9A84C;
  color: #0b1a33;
  padding: 16px 36px;
  border-radius: 50px;
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 8px 30px rgba(201,168,76,0.35);

  &:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(201,168,76,0.5); }
`;

/* ─── Stats ─── */
const StatsStrip = styled.section`
  background: white;
  box-shadow: 0 4px 30px rgba(0,0,0,0.06);
  padding: 50px 30px;
`;

const StatsGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 20px;
  text-align: center;

  @media(min-width: 768px) { grid-template-columns: repeat(4, 1fr); }
`;

const StatItem = styled.div`
  animation: ${countUp} 0.6s ease both;
  animation-delay: ${p => p.delay || '0s'};

  .num {
    font-size: 2.6rem;
    font-weight: 900;
    color: #C9A84C;
    line-height: 1;
    margin-bottom: 8px;
  }
  .label {
    font-size: 0.95rem;
    color: #555;
    font-weight: 600;
  }
`;

/* ─── Beyond Surveillance ─── */
const BeyondSection = styled.section`
  padding: 90px 30px;
  background: #f9f9f9;
`;

const BeyondWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  @media(min-width: 768px) { grid-template-columns: 1fr 1fr; align-items: center; }
`;

const BeyondLeft = styled.div`
  h2 { font-size: 2.2rem; font-weight: 900; color: #0b1a33; margin-bottom: 16px;
    span { color: #C9A84C; }
  }
  p { color: #666; line-height: 1.8; font-size: 1.05rem; margin-bottom: 24px; }
  ul { list-style: none; padding: 0; margin: 0;
    li { display: flex; align-items: center; gap: 10px; color: #333; font-weight: 600;
      margin-bottom: 12px;
      svg { color: #C9A84C; flex-shrink: 0; }
    }
  }
`;

const FeatureCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const FCard = styled.div`
  background: ${p => p.dark ? '#0b1a33' : 'white'};
  border-radius: 18px;
  padding: 22px 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: transform 0.3s;
  &:hover { transform: translateY(-4px); }

  .icon { color: ${p => p.dark ? '#C9A84C' : '#C9A84C'}; margin-bottom: 12px; }
  h4 { font-size: 0.95rem; font-weight: 800; color: ${p => p.dark ? 'white' : '#0b1a33'}; margin-bottom: 4px; }
  p { font-size: 0.8rem; color: ${p => p.dark ? 'rgba(255,255,255,0.6)' : '#888'}; }
`;

/* ─── Why Choose ─── */
const WhySection = styled.section`
  padding: 90px 30px;
  background: white;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  h2 { font-size: 2.4rem; font-weight: 900; color: #0b1a33;
    span { color: #C9A84C; }
  }
  p { color: #777; font-size: 1.05rem; max-width: 600px; margin: 16px auto 0; line-height: 1.7; }
`;

const WhyGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  @media(min-width: 600px) { grid-template-columns: repeat(2, 1fr); }
  @media(min-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
`;

const WhyCard = styled.div`
  background: white;
  border: 1px solid #eee;
  border-left: 4px solid #C9A84C;
  border-radius: 16px;
  padding: 30px 24px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  transition: all 0.3s;
  &:hover { box-shadow: 0 10px 40px rgba(0,0,0,0.1); transform: translateY(-4px); }

  .icon-box {
    width: 52px; height: 52px;
    background: rgba(201,168,76,0.12);
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 18px;
    svg { color: #C9A84C; }
  }
  h3 { font-size: 1.05rem; font-weight: 800; color: #0b1a33; margin-bottom: 10px; }
  p { font-size: 0.9rem; color: #666; line-height: 1.7; }
`;

/* ─── Solutions Carousel ─── */
const SolutionsSection = styled.section`
  padding: 90px 30px;
  background: #f9f9f9;
`;

const CarouselWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const CarouselTrack = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media(max-width: 768px) { grid-template-columns: 1fr 1fr; }
  @media(max-width: 480px) { grid-template-columns: 1fr; }
`;

const SolutionCard = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  height: 220px;
  background: ${p => p.bg || '#0b1a33'};
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  transition: transform 0.3s;
  &:hover { transform: scale(1.02); }

  .overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(11,26,51,0.92) 0%, transparent 60%);
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 20px;
  }
  h3 { color: white; font-size: 1rem; font-weight: 800; }
`;

/* ─── Notable Works ─── */
const WorksSection = styled.section`
  padding: 90px 30px;
  background: white;
`;

const WorksGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  @media(min-width: 768px) { grid-template-columns: repeat(4, 1fr); }
`;

const WorkCard = styled.div`
  text-align: center;
  padding: 20px;
  .num { font-size: 2rem; font-weight: 900; color: #C9A84C; 
    border: 2px solid #C9A84C;
    width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    margin: 0 auto 16px; font-size: 1rem; }
  p { font-size: 0.85rem; color: #555; line-height: 1.5; }
`;

/* ─── CTA ─── */
const CTASection = styled.section`
  background: #0b1a33;
  padding: 80px 30px;
  text-align: center;

  h2 { font-size: 2.2rem; font-weight: 900; color: white; margin-bottom: 16px;
    span { color: #C9A84C; }
  }
  p { color: rgba(255,255,255,0.7); font-size: 1.05rem; max-width: 500px; margin: 0 auto 36px; }
`;

const CTABtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #C9A84C;
  color: #0b1a33;
  padding: 16px 40px;
  border-radius: 50px;
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  &:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(201,168,76,0.4); }
`;

/* ─── Component ─── */
const CloudMonitoring = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const whyCards = [
    { icon: <Clock size={24} />, title: '24/7 Vigilance', desc: 'Round-the-clock surveillance with lightning-fast alerts to protect what matters most.' },
    { icon: <Settings size={24} />, title: 'Customized Solutions', desc: 'Security that adapts to your unique needs — because every property is different.' },
    { icon: <Monitor size={24} />, title: 'Next-Level Technology', desc: 'Smart cameras and advanced analytics that detect threats before they surface.' },
    { icon: <ShieldCheck size={24} />, title: 'Experts You Can Trust', desc: 'Years of experience protecting homes and businesses worldwide — your safety is our mission.' },
    { icon: <Bell size={24} />, title: 'Instant Response', desc: 'Our action teams are on-call, ready to respond in a flash to any emergency.' },
    { icon: <Smartphone size={24} />, title: 'Real-Time Peace of Mind', desc: 'Get instant notifications via app, SMS, or call — always stay in the know.' },
  ];

  const solutions = [
    { title: '24/7 Live Vigilance', bg: 'url("/vigilance.jpg") center/cover' },
    { title: 'Shop & Premises Monitoring', bg: 'url("/shop_monitoring.jpg") center/cover' },
    { title: "NRI's Property Protection", bg: 'url("/property_protection.jpg") center/cover' },
  ];

  const works = [
    { num: '01', title: 'AI Detects Intrusion', desc: 'Cameras instantly detect motion, line crossing, or unauthorized entry.' },
    { num: '02', title: 'Alert Sent to Control Room', desc: 'Live feed is immediately sent to our 24/7 monitoring center.' },
    { num: '03', title: 'Expert Verification', desc: 'Our security operators verify the threat in seconds to avoid false alarms.' },
    { num: '04', title: 'Immediate Action', desc: 'We trigger 2-way audio warnings, hooters, or dispatch police/emergency services.' },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <Hero>
        <HeroContent>
          <HeroTag><Eye size={14} /> Tarkshya Cloud Monitoring</HeroTag>
          <HeroTitle>
            {t.cloudNew?.title || 'More Than Surveillance,'}<br />
            <span>{t.cloudNew?.titleHighlight || 'We Take Actions To Secure You.'}</span>
          </HeroTitle>
          <HeroSub>
            {t.cloudNew?.subtitle || 'Advanced AI-powered 24/7 cloud security monitoring...'}
          </HeroSub>
          <HeroBtn to="/contact">
            <ShieldCheck size={18} /> {t.cloudNew?.cta || 'Secure Your Space Today'}
          </HeroBtn>
        </HeroContent>
      </Hero>

      {/* ── Stats ── */}
      <StatsStrip>
        <StatsGrid>
          <StatItem delay="0.1s"><div className="num">5+</div><div className="label">Years Of Trust</div></StatItem>
          <StatItem delay="0.2s"><div className="num">10K+</div><div className="label">Happy Customers</div></StatItem>
          <StatItem delay="0.3s"><div className="num">500Cr+</div><div className="label">Worth Losses Prevented</div></StatItem>
          <StatItem delay="0.4s"><div className="num">24/7</div><div className="label">Monitoring</div></StatItem>
        </StatsGrid>
      </StatsStrip>

      {/* ── Beyond Surveillance ── */}
      <BeyondSection>
        <BeyondWrap>
          <BeyondLeft>
            <h2>Beyond <span>Surveillance</span></h2>
            <p>
              We don't just observe — we protect, predict, and stop threats before they happen.
              Our 24/7 team is always learning and adapting to keep you safe.
            </p>
            <ul>
              <li><CheckCircle size={16} /> Instant Real-time Response</li>
              <li><CheckCircle size={16} /> Smart Threat Detection</li>
              <li><CheckCircle size={16} /> Future-proof Security</li>
              <li><CheckCircle size={16} /> Cloud-backed Footage</li>
            </ul>
          </BeyondLeft>

          <FeatureCardsGrid>
            <FCard>
              <div className="icon"><Monitor size={28} /></div>
              <h4>Live Surveillance</h4>
              <p>Smart detection systems</p>
            </FCard>
            <FCard>
              <div className="icon"><Lock size={28} /></div>
              <h4>Military Grade</h4>
              <p>Unbreakable encryption</p>
            </FCard>
            <FCard dark>
              <div className="icon"><Zap size={28} /></div>
              <h4>Lightning Fast Response</h4>
              <p>Instant alerts & response</p>
            </FCard>
            <FCard>
              <div className="icon"><Clock size={28} /></div>
              <h4>Always On</h4>
              <p>24/7 protection</p>
            </FCard>
          </FeatureCardsGrid>
        </BeyondWrap>
      </BeyondSection>

      {/* ── Why Choose ── */}
      <WhySection>
        <SectionTitle>
          <h2>Why to Choose <span>Tarkshya</span></h2>
          <p>Protect what matters most with our comprehensive cloud security surveillance solutions and expert protection services.</p>
        </SectionTitle>
        <WhyGrid>
          {whyCards.map((c, i) => (
            <WhyCard key={i}>
              <div className="icon-box">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </WhyCard>
          ))}
        </WhyGrid>
      </WhySection>

      {/* ── Core Solutions ── */}
      <SolutionsSection>
        <SectionTitle>
          <h2>Our Core <span>Security Solutions</span></h2>
          <p>Tailored security for every need — homes, shops, NRI properties, and more.</p>
        </SectionTitle>
        <CarouselWrapper>
          <CarouselTrack>
            {solutions.map((s, i) => (
              <SolutionCard key={i} bg={s.bg}>
                <div className="overlay">
                  <h3>{s.title}</h3>
                </div>
              </SolutionCard>
            ))}
          </CarouselTrack>
        </CarouselWrapper>
      </SolutionsSection>

      {/* ── How It Works ── */}
      <WorksSection>
        <SectionTitle>
          <h2>How Our <span>Monitoring Works</span></h2>
          <p>A seamless 4-step process to ensure your premises are always secure.</p>
        </SectionTitle>
        <WorksGrid>
          {works.map((w, i) => (
            <WorkCard key={i} active={i === 2}>
              <div className="num">{w.num}</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0b1a33', marginBottom: '8px' }}>{w.title}</h3>
              <p>{w.desc}</p>
            </WorkCard>
          ))}
        </WorksGrid>
      </WorksSection>

      {/* ── CTA ── */}
      <CTASection>
        <h2>Ready to Level Up Your <span>Security?</span></h2>
        <p>Join thousands of Indian homes and businesses protected by Tarkshya's cloud monitoring network.</p>
        <CTABtn href="tel:+919412300716">
          <ShieldCheck size={18} /> Call Us Now: +91 94123 00716
        </CTABtn>
      </CTASection>
    </>
  );
};

export default CloudMonitoring;
