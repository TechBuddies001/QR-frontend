
import styled from 'styled-components';
import Section from '../components/Section';
import QuoteForm from '../components/QuoteForm';

const PageHeader = styled.header`
  background: ${({ theme }) => theme.colors.navy};
  color: white;
  padding: 100px 0 60px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const Info = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.navy};
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    opacity: 0.8;
  }
`;

const Badge = styled.span`
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.navy};
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 20px;
`;

const CloudMonitoring = () => {
    return (
        <>
            <PageHeader>
                <h1>Live Cloud Monitoring</h1>
                <p>Secure CCTV Backup & Anti-Theft Protection</p>
            </PageHeader>

            <Section>
                <Container>
                    <Info>
                        <Badge>COMING SOON</Badge>
                        <h2>Secure Your Premises with Cloud Intelligence</h2>
                        <p>
                            Traditional CCTV systems are vulnerable to theft and damage. Our cloud monitoring solution ensures your footage is safe, even if the camera is destroyed.
                        </p>
                        <p>
                            <strong>Features:</strong>
                            <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                <li>Real-time Cloud Backup</li>
                                <li>Motion Detection Alerts</li>
                                <li>Anti-Theft Device Protection</li>
                                <li>Remote Access via Mobile</li>
                            </ul>
                        </p>
                    </Info>
                    <QuoteForm serviceName="Cloud Monitoring" />
                </Container>
            </Section>
        </>
    );
};

export default CloudMonitoring;
