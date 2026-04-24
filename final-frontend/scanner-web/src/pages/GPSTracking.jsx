
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

const GPSTracking = () => {
    return (
        <>
            <PageHeader>
                <h1>Advanced GPS Tracking</h1>
                <p>Real-time Location & Fleet Management</p>
            </PageHeader>

            <Section>
                <Container>
                    <Info>
                        <Badge>COMING SOON</Badge>
                        <h2>Precision Tracking for Every Asset</h2>
                        <p>
                            Whether it's a fleet of trucks or a personal vehicle, stay connected with real-time location data.
                        </p>
                        <p>
                            <strong>Features:</strong>
                            <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                <li>Live Location Tracking</li>
                                <li>Geofencing Alerts</li>
                                <li>Speed Monitoring</li>
                                <li>Route Playback</li>
                                <li>Fuel Usage Analytics</li>
                            </ul>
                        </p>
                    </Info>
                    <QuoteForm serviceName="GPS Tracking" />
                </Container>
            </Section>
        </>
    );
};

export default GPSTracking;
