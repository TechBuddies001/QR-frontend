import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 60px 20px;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 50px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.gold};
  }
`;

const CategoryHeader = styled.div`
  margin-bottom: 30px;
  padding-left: 15px;
  border-left: 4px solid ${({ theme }) => theme.colors.gold};
  
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #333;
    margin: 0;
    text-transform: uppercase;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductCard = styled.div`
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  }
`;

const ImageContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  min-height: 200px;
  
  img {
    max-width: 100%;
    max-height: 150px;
    object-fit: contain;
  }
`;

const FeaturesBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.navy};
  padding: 5px 15px;
  font-size: 0.8rem;
  font-weight: bold;
  display: inline-block;
  margin: 10px 20px 0;
  border-radius: 4px;
`;

const Content = styled.div`
  padding: 15px 20px;
  flex-grow: 1;
  text-align: center;
`;

const ProductTitle = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
  margin: 10px 0 20px;
  text-transform: uppercase;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 20px 20px;
`;

const ActionButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.navy};
  color: #ffffff;
  border: none;
  padding: 10px 5px;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.navyLight};
  }
`;

const products = [
  {
    image: "/assets/car_qr_tag_mockup_1776107740073.png",
    title: "CAR SAFETY QR",
    btn1: "FAMILY ALERT",
    btn2: "FIND LOCATION"
  },
  {
    image: "/assets/car_qr_tag_mockup_1776107740073.png",
    title: "CAR PREMIUM QR",
    btn1: "FIND LOCATION",
    btn2: "ROUTE TRACKING"
  },
  {
    image: "/assets/pet_qr_tag_mockup_1776107762376.png",
    title: "BIKE SAFETY QR",
    btn1: "FAMILY ALERT",
    btn2: "FIND LOCATION"
  },
  {
    image: "/assets/pet_qr_tag_mockup_1776107762376.png",
    title: "BIKE PREMIUM QR",
    btn1: "FAMILY ALERT",
    btn2: "FIND LOCATION"
  }
];

const OurProducts = () => {
  return (
    <SectionWrapper>
      <Container>
        <MainTitle>OUR PRODUCTS</MainTitle>
        
        <CategoryHeader>
          <h3>EMERGENCY / WRONG PARKING SAFETY QR</h3>
        </CategoryHeader>
        
        <Grid>
          {products.map((prod, index) => (
            <ProductCard key={index}>
              <ImageContainer>
                <img src={prod.image} alt={prod.title} />
              </ImageContainer>
              <FeaturesBanner>Features {'>'}{'>'}{'>'}</FeaturesBanner>
              <Content>
                <ProductTitle>{prod.title}</ProductTitle>
              </Content>
              <ButtonGroup>
                <ActionButton>{prod.btn1}</ActionButton>
                <ActionButton>{prod.btn2}</ActionButton>
              </ButtonGroup>
            </ProductCard>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default OurProducts;
