import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ShieldAlert, Car, Users, Search, ShieldCheck, Ambulance } from 'lucide-react';

const SectionWrapper = styled.section`
  padding: 60px 0px 60px 20px;
  background-color: #ffffff;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 30px;
  padding-right: 20px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    padding-right: 0;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 10px;
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Subtitle = styled.p`
  color: #666666;
  font-size: 1rem;
`;

const Divider = styled.div`
  width: 60px;
  height: 4px;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: 2px;
  margin-top: 16px;
`;

/* ---- Mobile Scroll Track ---- */
const ScrollTrack = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 20px;
  padding-right: 20px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow-x: visible;
    padding-right: 0;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const CategoryCard = styled.div`
  flex: 0 0 150px;
  scroll-snap-align: start;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-bottom: 3px solid ${({ theme }) => theme.colors.gold};
  border-radius: 16px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  min-height: 120px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  }

  svg {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    flex: unset;
    border-radius: 12px;
    min-height: 160px;
    padding: 25px 15px;
  }
`;

const CardTitle = styled.h4`
  font-size: 0.7rem;
  font-weight: 800;
  color: #000000;
  margin: 0 0 12px 0;
  text-transform: uppercase;
  line-height: 1.3;
`;

const ViewButton = styled.button`
  background-color: ${({ theme }) => theme.colors.navy};
  color: #ffffff;
  border: none;
  padding: 6px 12px;
  font-size: 0.6rem;
  font-weight: 800;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.navyLight || '#1a2a44'};
  }
`;

/* ---- Dots ---- */
const DotsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  padding-right: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Dot = styled.span`
  display: block;
  width: ${({ $active }) => ($active ? '24px' : '8px')};
  height: 8px;
  border-radius: 4px;
  background: ${({ $active, theme }) => ($active ? theme.colors.gold : '#ddd')};
  transition: all 0.3s ease;
`;

const ScrollHint = styled.p`
  font-size: 0.75rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  margin-top: 15px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #eee;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const categories = [
  { title: "Accident Safety", icon: <ShieldAlert size={28} color="#0B1A33" /> },
  { title: "Wrong Parking",   icon: <Car         size={28} color="#C9A84C" /> },
  { title: "Family Safety",   icon: <Users       size={28} color="#0B1A33" /> },
  { title: "Lost & Found",    icon: <Search      size={28} color="#C9A84C" /> },
  { title: "Safety Products", icon: <ShieldCheck size={28} color="#0B1A33" /> },
  { title: "Emergency",       icon: <Ambulance   size={28} color="#C9A84C" /> },
];

const VISIBLE = 2.4; // how many cards visible at once on mobile

const TopCategories = () => {
  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const totalDots = Math.ceil(categories.length / 1); // one dot per card

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    const idx = Math.round(progress * (categories.length - 1));
    setActiveIdx(idx);
  };

  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <Title><span>Top</span> Categories</Title>
          <Subtitle>Explore our wide range of safety solutions for all your needs</Subtitle>
          <Divider />
        </SectionHeader>

        <ScrollTrack ref={trackRef} onScroll={handleScroll}>
          {categories.map((cat, index) => (
            <CategoryCard key={index}>
              {cat.icon}
              <CardTitle>{cat.title}</CardTitle>
              <ViewButton>Explore</ViewButton>
            </CategoryCard>
          ))}
        </ScrollTrack>

        <ScrollHint>← Swipe to see more →</ScrollHint>

        <DotsRow>
          {categories.map((_, i) => (
            <Dot key={i} $active={i === activeIdx} />
          ))}
        </DotsRow>
      </Container>
    </SectionWrapper>
  );
};

export default TopCategories;
