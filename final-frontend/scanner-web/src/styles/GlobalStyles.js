
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 
   :root {
    --color-navy: #0B1A33;
    --color-gold: #C9A84C;
    --color-white: #FFFFFF;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }

  body {
    font-family: 'Outfit', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.navy};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }
`;
