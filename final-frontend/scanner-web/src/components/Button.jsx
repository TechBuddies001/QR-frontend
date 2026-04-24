
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 12px 24px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid transparent;

  ${({ $variant, theme }) =>
        $variant === 'outline'
            ? `
    background: transparent;
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.navy};
    }
  `
            : $variant === 'secondary'
                ? `
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    &:hover {
      background: ${theme.colors.navyLight};
      transform: translateY(-2px);
    }
  `
                : `
    background: ${theme.colors.gold};
    color: ${theme.colors.navy};
    &:hover {
      background: ${theme.colors.goldHover};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(201, 168, 76, 0.3);
    }
  `}
`;

const Button = ({ children, variant = 'primary', ...props }) => {
    return (
        <StyledButton $variant={variant} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
