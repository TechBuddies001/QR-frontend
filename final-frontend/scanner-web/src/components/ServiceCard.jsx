
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Card = styled(Link)`
  display: block;
  background: white;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.05);
  text-decoration: none;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.gold};

    h3 {
      color: ${({ theme }) => theme.colors.gold};
    }

    .icon-wrapper {
        background-color: ${({ theme }) => theme.colors.gold};
        color: ${({ theme }) => theme.colors.navy};
    }
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.gold};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  transition: all 0.3s ease;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  transition: color 0.3s ease;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 25px;
  line-height: 1.6;
  opacity: 0.8;
`;

const LearnMore = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.navy};
  font-size: 0.9rem;
  position: absolute;
  bottom: 30px;
  left: 30px;
`;

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <Card to={link}>
      <IconWrapper className="icon-wrapper">
        <Icon size={30} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <LearnMore>
        Learn More <ArrowRight size={16} />
      </LearnMore>
    </Card>
  );
};

export default ServiceCard;
