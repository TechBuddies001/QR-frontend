
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainContent = styled.main`
  min-height: 100vh;
  padding-top: 0; // Header is overlay for hero effects
`;

const Layout = () => {
    return (
        <>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </>
    );
};

export default Layout;
