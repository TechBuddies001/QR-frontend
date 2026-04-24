import React from 'react';
import styled from 'styled-components';
import { ShieldAlert, Car, Users, Search, ShieldCheck, Ambulance } from 'lucide-react';

const SectionWrapper = styled.section`
  padding: 60px 20px;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
  text-align: left;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const CategoryCard = styled.div`
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-bottom: 3px solid ${({ theme }) => theme.colors.gold};
  border-radius: 12px;
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  }

  svg {
    margin-bottom: 15px;
  }
`;

const CardTitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
  text-transform: uppercase;
`;

const categories = [
  { title: "Accident Safety", icon: <ShieldAlert size={40} color="#0B1A33" /> },
  { title: "Wrong Parking", icon: <Car size={40} color="#C9A84C" /> },
  { title: "Family Safety", icon: <Users size={40} color="#0B1A33" /> },
  { title: "Lost And Found", icon: <Search size={40} color="#C9A84C" /> },
  { title: "Safety Products", icon: <ShieldCheck size={40} color="#0B1A33" /> },
  { title: "Emergency Services", icon: <Ambulance size={40} color="#C9A84C" /> },
];

const TopCategories = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <Title><span>TOP</span> CATEGORIES</Title>
          <Subtitle>Explore our wide range of safety solutions for all your needs</Subtitle>
        </SectionHeader>
        <Grid>
          {categories.map((cat, index) => (
            <CategoryCard key={index}>
              {cat.icon}
              <CardTitle>{cat.title}</CardTitle>
            </CategoryCard>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default TopCategories;
