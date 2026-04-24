
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ $bg, theme }) => {
    if ($bg === 'light') return theme.colors.background;
    if ($bg === 'white') return theme.colors.white;
    if ($bg) return $bg;
    return theme.colors.white;
  }};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = ({ children, bg = 'white', className }) => {
    return (
        <StyledSection $bg={bg} className={className}>
            <Container>{children}</Container>
        </StyledSection>
    );
};

export default Section;
