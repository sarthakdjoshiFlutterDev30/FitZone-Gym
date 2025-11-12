import { useState } from 'react';
import { styled, keyframes } from '../stitches.config';
import Container from '../components/Container';
import Button from '../components/Button';
import SEO from '../components/SEO';

const ContactContainer = styled('div', {
  mt: '80px', // Account for fixed header
});

const HeroSection = styled('section', {
  py: '$20',
  backgroundColor: '$black',
  color: '$white',
  textAlign: 'center',
});

const HeroTitle = styled('h1', {
  fontFamily: '$heading',
  fontSize: '$5xl',
  mb: '$4',
  
  '& span': {
    color: '$crimson',
  },
});

const HeroSubtitle = styled('p', {
  fontSize: '$xl',
  color: '$gray300',
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: 1.6,
});

const ContactSection = styled('section', {
  py: '$20',
});

const ContactGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$12',
  
  '@lg': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const ContactInfo = styled('div', {});

const SectionTitle = styled('h2', {
  fontFamily: '$heading',
  fontSize: '$3xl',
  mb: '$6',
  color: '$black',
  
  '& span': {
    color: '$crimson',
  },
});

const InfoGrid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  mb: '$8',
});

const InfoItem = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$4',
});

const InfoIcon = styled('div', {
  fontSize: '$2xl',
  minWidth: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$crimson',
  color: '$white',
  borderRadius: '$full',
});

const InfoContent = styled('div', {
  flex: 1,
});

const InfoTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$lg',
  mb: '$1',
  color: '$black',
});

const InfoText = styled('p', {
  color: '$gray600',
  lineHeight: 1.6,
});

const ContactForm = styled('div', {
  backgroundColor: '$white',
  p: '$8',
  borderRadius: '$lg',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const Label = styled('label', {
  fontSize: '$sm',
  fontWeight: '600',
  color: '$black',
});

const Input = styled('input', {
  px: '$4',
  py: '$3',
  border: '2px solid $gray300',
  borderRadius: '$md',
  fontSize: '$base',
  transition: 'border-color 0.3s ease',
  
  '&:focus': {
    outline: 'none',
    borderColor: '$crimson',
  },
  
  '&::placeholder': {
    color: '$gray400',
  },
});

const TextArea = styled('textarea', {
  px: '$4',
  py: '$3',
  border: '2px solid $gray300',
  borderRadius: '$md',
  fontSize: '$base',
  minHeight: '120px',
  resize: 'vertical',
  fontFamily: 'inherit',
  transition: 'border-color 0.3s ease',
  
  '&:focus': {
    outline: 'none',
    borderColor: '$crimson',
  },
  
  '&::placeholder': {
    color: '$gray400',
  },
});

const MapSection = styled('section', {
  py: '$20',
  backgroundColor: '$gray100',
});

const MapContainer = styled('div', {
  borderRadius: '$lg',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  height: '400px',
  backgroundColor: '$gray300',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$2xl',
  color: '$gray600',
});

const HoursSection = styled('section', {
  py: '$20',
});

const HoursGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  maxWidth: '800px',
  margin: '0 auto',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

const HoursCard = styled('div', {
  backgroundColor: '$white',
  p: '$6',
  borderRadius: '$lg',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
});

const HoursTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$xl',
  mb: '$4',
  color: '$black',
});

const HoursList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const HoursItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  py: '$1',
  borderBottom: '1px solid $gray200',
  
  '&:last-child': {
    borderBottom: 'none',
  },
});

const Day = styled('span', {
  fontWeight: '500',
  color: '$black',
});

const Time = styled('span', {
  color: '$gray600',
});

// Success Animation Keyframes
const slideInUp = keyframes({
  '0%': {
    transform: 'translateY(100px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

const checkmarkAnimation = keyframes({
  '0%': {
    strokeDasharray: '0 100',
  },
  '100%': {
    strokeDasharray: '100 0',
  },
});

const scaleIn = keyframes({
  '0%': {
    transform: 'scale(0)',
    opacity: 0,
  },
  '50%': {
    transform: 'scale(1.1)',
    opacity: 1,
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1,
  },
});

// Success Message Overlay
const SuccessOverlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  animation: `${slideInUp} 0.5s ease-out`,
});

const SuccessCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$xl',
  p: '$8',
  textAlign: 'center',
  maxWidth: '400px',
  width: '90%',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  animation: `${scaleIn} 0.6s ease-out`,
});

const CheckmarkContainer = styled('div', {
  width: '80px',
  height: '80px',
  margin: '0 auto $6',
  position: 'relative',
});

const CheckmarkCircle = styled('div', {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '$crimson',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${scaleIn} 0.8s ease-out`,
});

const CheckmarkIcon = styled('svg', {
  width: '40px',
  height: '40px',
  
  '& path': {
    stroke: '$white',
    strokeWidth: '3',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: 'none',
    strokeDasharray: '100',
    strokeDashoffset: '100',
    animation: `${checkmarkAnimation} 0.8s ease-out 0.3s forwards`,
  },
});

const SuccessTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$2xl',
  color: '$black',
  mb: '$3',
});

const SuccessMessage = styled('p', {
  color: '$gray600',
  lineHeight: 1.6,
  mb: '$6',
});

const CloseButton = styled('button', {
  backgroundColor: '$crimson',
  color: '$white',
  border: 'none',
  borderRadius: '$md',
  px: '$6',
  py: '$3',
  fontSize: '$base',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    backgroundColor: '#b91c3c',
    transform: 'translateY(-2px)',
  },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success animation instead of alert
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };
  
  const closeSuccessMessage = () => {
    setShowSuccess(false);
  };
  
  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      content: '123 Fitness Street, Andheri West, Mumbai, Maharashtra 400058',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+91 98765 43210',
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'info@fitzonegym.com',
    },
    {
      icon: '🌐',
      title: 'Website',
      content: 'www.fitzonegym.com',
    },
  ];
  
  const gymHours = [
    { day: 'Monday', time: '5:00 AM - 11:00 PM' },
    { day: 'Tuesday', time: '5:00 AM - 11:00 PM' },
    { day: 'Wednesday', time: '5:00 AM - 11:00 PM' },
    { day: 'Thursday', time: '5:00 AM - 11:00 PM' },
    { day: 'Friday', time: '5:00 AM - 11:00 PM' },
    { day: 'Saturday', time: '6:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '6:00 AM - 10:00 PM' },
  ];
  
  const classHours = [
    { day: 'Yoga Classes', time: '7:00 AM, 6:00 PM' },
    { day: 'Zumba Classes', time: '8:00 AM, 7:00 PM' },
    { day: 'CrossFit', time: '6:00 AM, 5:00 PM' },
    { day: 'Personal Training', time: 'By Appointment' },
  ];
  
  return (
    <ContactContainer>
      <SEO 
        title="Contact FitZone Gym - Get In Touch | Mumbai Fitness Center"
        description="Contact FitZone Gym for membership inquiries, facility tours, and fitness consultations. Located in Andheri West, Mumbai. Call +91 98765 43210 or visit us today!"
        keywords="contact FitZone gym, gym Mumbai contact, fitness center contact, gym address Mumbai, FitZone phone number, gym inquiry"
        url="https://fitzonegym.com/contact"
      />
      <HeroSection>
        <Container>
          <HeroTitle>
            Get In <span>Touch</span>
          </HeroTitle>
          <HeroSubtitle>
            Ready to start your fitness journey? Contact us today for a free consultation 
            and tour of our facilities. We're here to help you achieve your goals!
          </HeroSubtitle>
        </Container>
      </HeroSection>
      
      <ContactSection>
        <Container>
          <ContactGrid>
            <ContactInfo>
              <SectionTitle>
                Contact <span>Information</span>
              </SectionTitle>
              <InfoGrid>
                {contactInfo.map((info, index) => (
                  <InfoItem key={index}>
                    <InfoIcon>{info.icon}</InfoIcon>
                    <InfoContent>
                      <InfoTitle>{info.title}</InfoTitle>
                      <InfoText>{info.content}</InfoText>
                    </InfoContent>
                  </InfoItem>
                ))}
              </InfoGrid>
            </ContactInfo>
            
            <ContactForm>
              <SectionTitle>
                Send Us a <span>Message</span>
              </SectionTitle>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your fitness goals or any questions you have..."
                    required
                  />
                </FormGroup>
                
                <Button type="submit" variant="primary" size="lg">
                  Send Message
                </Button>
              </Form>
            </ContactForm>
          </ContactGrid>
        </Container>
      </ContactSection>
      
      <MapSection>
        <Container>
          <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Find <span>Us</span>
          </SectionTitle>
          <MapContainer>
            🗺️ Interactive Map Coming Soon
            <br />
            <small style={{ fontSize: '1rem', marginTop: '1rem', display: 'block' }}>
              123 Fitness Street, Andheri West, Mumbai
            </small>
          </MapContainer>
        </Container>
      </MapSection>
      
      <HoursSection>
        <Container>
          <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Operating <span>Hours</span>
          </SectionTitle>
          <HoursGrid>
            <HoursCard>
              <HoursTitle>Gym Hours</HoursTitle>
              <HoursList>
                {gymHours.map((item, index) => (
                  <HoursItem key={index}>
                    <Day>{item.day}</Day>
                    <Time>{item.time}</Time>
                  </HoursItem>
                ))}
              </HoursList>
            </HoursCard>
            
            <HoursCard>
              <HoursTitle>Class Schedule</HoursTitle>
              <HoursList>
                {classHours.map((item, index) => (
                  <HoursItem key={index}>
                    <Day>{item.day}</Day>
                    <Time>{item.time}</Time>
                  </HoursItem>
                ))}
              </HoursList>
            </HoursCard>
          </HoursGrid>
        </Container>
      </HoursSection>
      
      {/* Success Message Animation */}
      {showSuccess && (
        <SuccessOverlay onClick={closeSuccessMessage}>
          <SuccessCard onClick={(e) => e.stopPropagation()}>
            <CheckmarkContainer>
              <CheckmarkCircle>
                <CheckmarkIcon viewBox="0 0 100 100">
                  <path d="M20,50 L40,70 L80,30" />
                </CheckmarkIcon>
              </CheckmarkCircle>
            </CheckmarkContainer>
            <SuccessTitle>Message Sent Successfully!</SuccessTitle>
            <SuccessMessage>
              Thank you for reaching out to FitZone Gym! We've received your message 
              and will get back to you within 24 hours. Get ready to start your 
              fitness journey with us!
            </SuccessMessage>
            <CloseButton onClick={closeSuccessMessage}>
              Awesome!
            </CloseButton>
          </SuccessCard>
        </SuccessOverlay>
      )}
    </ContactContainer>
  );
};

export default Contact;
