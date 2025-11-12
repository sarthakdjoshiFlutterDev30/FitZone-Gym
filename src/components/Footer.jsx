import { Link } from 'react-router-dom';
import { styled } from '../stitches.config';

const FooterContainer = styled('footer', {
  backgroundColor: '$black',
  color: '$white',
  py: '$12',
});

const FooterContent = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  px: '$4',
  
  '@md': {
    px: '$6',
  },
});

const FooterGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  
  '@md': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
});

const FooterSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const FooterTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$xl',
  color: '$crimson',
  mb: '$2',
});

const FooterLink = styled(Link, {
  color: '$gray300',
  textDecoration: 'none',
  fontSize: '$sm',
  transition: 'color 0.3s ease',
  
  '&:hover': {
    color: '$crimson',
  },
});

const FooterText = styled('p', {
  color: '$gray300',
  fontSize: '$sm',
  lineHeight: 1.6,
});

const SocialLinks = styled('div', {
  display: 'flex',
  gap: '$4',
  mt: '$2',
});

const SocialLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  backgroundColor: '$gray800',
  color: '$white',
  borderRadius: '$full',
  textDecoration: 'none',
  fontSize: '$lg',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    backgroundColor: '$crimson',
    transform: 'translateY(-2px)',
  },
});

const FooterBottom = styled('div', {
  borderTop: '1px solid $gray800',
  mt: '$8',
  pt: '$6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
  
  '@md': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Logo = styled('div', {
  fontFamily: '$heading',
  fontSize: '$2xl',
  fontWeight: 'bold',
  color: '$white',
  
  '& span': {
    color: '$crimson',
  },
});

const Copyright = styled('p', {
  color: '$gray400',
  fontSize: '$sm',
  textAlign: 'center',
  
  '@md': {
    textAlign: 'left',
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterTitle>About FitZone</FooterTitle>
            <FooterText>
              Transform your body and mind at FitZone Gym. We provide world-class fitness 
              facilities, expert trainers, and a supportive community to help you achieve 
              your fitness goals.
            </FooterText>
            <SocialLinks>
              <SocialLink href="https://facebook.com/fitzonegym" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://instagram.com/fitzonegym" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://x.com/fitzonegym" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/programs">Programs</FooterLink>
            <FooterLink to="/membership">Membership</FooterLink>
            <FooterLink to="/gallery">Gallery</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Programs</FooterTitle>
            <FooterLink to="/programs">Strength Training</FooterLink>
            <FooterLink to="/programs">Cardio Workouts</FooterLink>
            <FooterLink to="/programs">Yoga Classes</FooterLink>
            <FooterLink to="/programs">Zumba Dance</FooterLink>
            <FooterLink to="/programs">CrossFit</FooterLink>
            <FooterLink to="/programs">Personal Training</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Contact Info</FooterTitle>
            <FooterText>
              📍 123 Fitness Street<br />
              Mumbai, Maharashtra 400001
            </FooterText>
            <FooterText>
              📞 +91 98765 43210
            </FooterText>
            <FooterText>
              ✉️ info@fitzonegym.com
            </FooterText>
            <FooterText>
              🕒 Mon-Sun: 5:00 AM - 11:00 PM
            </FooterText>
          </FooterSection>
        </FooterGrid>
        
        <FooterBottom>
          <Logo>
            Fit<span>Zone</span>
          </Logo>
          <Copyright>
            © 2024 FitZone Gym. All rights reserved. | <FooterLink to="/privacy">Privacy Policy</FooterLink> | <FooterLink to="/terms">Terms & Conditions</FooterLink>
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
