import { styled } from '@stitches/react';

const WatermarkContainer = styled('div', {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: '#ffffff',
  padding: '12px 16px',
  borderRadius: '8px',
  fontSize: '12px',
  lineHeight: '1.5',
  zIndex: 9999,
  maxWidth: '280px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  
  '@media (max-width: 768px)': {
    bottom: '10px',
    right: '10px',
    maxWidth: '240px',
    fontSize: '11px',
    padding: '10px 12px',
  },
});

const WatermarkTitle = styled('div', {
  fontWeight: 'bold',
  marginBottom: '6px',
  color: '#ff6b6b',
  fontSize: '13px',
});

const WatermarkText = styled('div', {
  marginBottom: '4px',
  color: '#ffffff',
});

const WatermarkLink = styled('a', {
  color: '#4dabf7',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

function Watermark() {
  return (
    <WatermarkContainer>
      <WatermarkTitle>DEMO WEBSITE</WatermarkTitle>
      <WatermarkText>Made by <strong>BytesFlare Infotech</strong></WatermarkText>
      <WatermarkText>
        <WatermarkLink href="mailto:bytesflareinfotechsales@gmail.com">
          bytesflareinfotechsales@gmail.com
        </WatermarkLink>
      </WatermarkText>
      <WatermarkText>
        <WatermarkLink href="tel:+918799196162">
          +91-8799196162
        </WatermarkLink>
      </WatermarkText>
    </WatermarkContainer>
  );
}

export default Watermark;

