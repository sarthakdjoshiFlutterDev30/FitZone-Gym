import { useState } from 'react';
import { styled, keyframes } from '../stitches.config';
import Container from '../components/Container';
import Button from '../components/Button';
import SEO from '../components/SEO';

const HomeContainer = styled('div', {
  mt: '80px', // Account for fixed header
});

const HeroSection = styled('section', {
  position: 'relative',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  color: '$white',
  textAlign: 'center',
});

const HeroContent = styled('div', {
  maxWidth: '800px',
  px: '$4',
});

const HeroTitle = styled('h1', {
  fontFamily: '$heading',
  fontSize: '$5xl',
  fontWeight: 'bold',
  mb: '$4',
  lineHeight: 1.1,
  
  '@md': {
    fontSize: '$7xl',
  },
  
  '& span': {
    color: '$crimson',
  },
});

const HeroSubtitle = styled('p', {
  fontSize: '$xl',
  mb: '$8',
  color: '$gray200',
  lineHeight: 1.6,
  
  '@md': {
    fontSize: '$2xl',
  },
});

const HeroButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  alignItems: 'center',
  
  '@md': {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const FeaturesSection = styled('section', {
  py: '$20',
  backgroundColor: '$gray100',
});

const SectionTitle = styled('h2', {
  fontFamily: '$heading',
  fontSize: '$4xl',
  textAlign: 'center',
  mb: '$12',
  color: '$black',
  
  '& span': {
    color: '$crimson',
  },
});

const FeaturesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  
  '@lg': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
});

const FeatureCard = styled('div', {
  backgroundColor: '$white',
  p: '$6',
  borderRadius: '$lg',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  },
});

const FeatureIcon = styled('div', {
  fontSize: '$5xl',
  mb: '$4',
});

const FeatureTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$xl',
  mb: '$3',
  color: '$black',
});

const FeatureDescription = styled('p', {
  color: '$gray600',
  lineHeight: 1.6,
});

const StatsSection = styled('section', {
  py: '$20',
  backgroundColor: '$black',
  color: '$white',
});

const StatsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  textAlign: 'center',
  
  '@md': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
});

const StatCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StatNumber = styled('div', {
  fontFamily: '$heading',
  fontSize: '$5xl',
  fontWeight: 'bold',
  color: '$crimson',
  mb: '$2',
});

const StatLabel = styled('div', {
  fontSize: '$lg',
  color: '$gray300',
});

const CTASection = styled('section', {
  py: '$20',
  backgroundColor: '$crimson',
  color: '$white',
  textAlign: 'center',
});

const CTATitle = styled('h2', {
  fontFamily: '$heading',
  fontSize: '$4xl',
  mb: '$4',
});

const CTADescription = styled('p', {
  fontSize: '$xl',
  mb: '$8',
  maxWidth: '600px',
  margin: '0 auto $8',
  lineHeight: 1.6,
});

// Story Modal Animations
const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const slideUp = keyframes({
  '0%': {
    transform: 'translateY(100px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

// Story Modal Components
const ModalOverlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  animation: `${fadeIn} 0.3s ease-out`,
  padding: '$4',
});

const ModalContent = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$xl',
  maxWidth: '800px',
  width: '100%',
  maxHeight: '90vh',
  overflow: 'auto',
  animation: `${slideUp} 0.4s ease-out`,
  position: 'relative',
});

const ModalHeader = styled('div', {
  position: 'relative',
  height: '300px',
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '$xl $xl 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
});

const CloseButton = styled('button', {
  position: 'absolute',
  top: '$4',
  right: '$4',
  width: '40px',
  height: '40px',
  borderRadius: '$full',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  border: 'none',
  color: '$white',
  fontSize: '$xl',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'scale(1.1)',
  },
});

const ModalTitle = styled('h2', {
  fontFamily: '$heading',
  fontSize: '$4xl',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
});

const ModalBody = styled('div', {
  p: '$8',
});

const StorySection = styled('div', {
  mb: '$8',
});

const StoryTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$2xl',
  mb: '$4',
  color: '$crimson',
});

const StoryText = styled('p', {
  fontSize: '$base',
  lineHeight: 1.7,
  color: '$gray700',
  mb: '$4',
});

const StoryHighlight = styled('div', {
  backgroundColor: '$gray100',
  p: '$6',
  borderRadius: '$lg',
  borderLeft: '4px solid $crimson',
  mb: '$6',
  
  '& p': {
    fontSize: '$lg',
    fontWeight: '600',
    color: '$black',
    margin: 0,
  },
});

const StoryStats = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '$4',
  mt: '$6',
});

const StoryStat = styled('div', {
  textAlign: 'center',
  p: '$4',
  backgroundColor: '$crimson',
  color: '$white',
  borderRadius: '$lg',
});

const StoryStatNumber = styled('div', {
  fontFamily: '$heading',
  fontSize: '$2xl',
  fontWeight: 'bold',
});

const StoryStatLabel = styled('div', {
  fontSize: '$sm',
});

const Home = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);
  
  const features = [
    {
      icon: '🏋️‍♂️',
      title: 'Certified Trainers',
      description: 'Expert trainers with years of experience to guide your fitness journey.',
    },
    {
      icon: '💪',
      title: 'Modern Equipment',
      description: 'State-of-the-art fitness equipment for all your workout needs.',
    },
    {
      icon: '🕒',
      title: '24/7 Access',
      description: 'Work out anytime that fits your schedule with round-the-clock access.',
    },
    {
      icon: '💰',
      title: 'Affordable Plans',
      description: 'Flexible membership plans that fit your budget and lifestyle.',
    },
  ];
  
  const stats = [
    { number: '500+', label: 'Happy Members' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '100+', label: 'Workout Programs' },
    { number: '5+', label: 'Years Experience' },
  ];
  
  const handleWatchStory = () => {
    setShowStoryModal(true);
  };
  
  const closeStoryModal = () => {
    setShowStoryModal(false);
  };
  
  return (
    <HomeContainer>
      <SEO 
        title="FitZone Gym - Transform Your Body & Mind | Best Gym in Mumbai"
        description="Join FitZone Gym, Mumbai's premier fitness destination. Expert trainers, modern equipment, group classes, and affordable membership plans starting at ₹999/month. Transform your life today!"
        keywords="gym Mumbai, fitness center Mumbai, personal training, yoga classes, zumba, crossfit, strength training, cardio, membership plans, FitZone, Andheri gym"
        url="https://fitzonegym.com"
      />
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            Transform Your Body at <span>FitZone</span>
          </HeroTitle>
          <HeroSubtitle>
            Join India's premier fitness destination and unlock your potential with 
            world-class equipment, expert trainers, and a supportive community.
          </HeroSubtitle>
          <HeroButtons>
            <Button variant="primary" size="lg" onClick={handleWatchStory}>
              Watch Our Story
            </Button>
          </HeroButtons>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <Container>
          <SectionTitle>
            Why Choose <span>FitZone</span>?
          </SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
      
      <StatsSection>
        <Container>
          <SectionTitle style={{ color: 'white', marginBottom: '3rem' }}>
            Our <span>Achievements</span>
          </SectionTitle>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard key={index}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>
      
      <CTASection>
        <Container>
          <CTATitle>Ready to Start Your Fitness Journey?</CTATitle>
          <CTADescription>
            Join thousands of satisfied members who have transformed their lives at FitZone. 
            Your fitness goals are just one step away! Visit our membership page to explore our plans.
          </CTADescription>
        </Container>
      </CTASection>
      
      {/* Story Modal */}
      {showStoryModal && (
        <ModalOverlay onClick={closeStoryModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <CloseButton onClick={closeStoryModal}>×</CloseButton>
              <ModalTitle>The FitZone Story</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <StorySection>
                <StoryTitle>Our Journey Began in 2019</StoryTitle>
                <StoryText>
                  FitZone Gym was born from a simple yet powerful vision: to create a fitness sanctuary 
                  where every individual, regardless of their fitness level, could embark on a 
                  transformative journey towards better health and wellness.
                </StoryText>
                <StoryText>
                  Founded by fitness enthusiasts Rajesh and Priya, who themselves struggled to find 
                  a gym that combined professional expertise with a welcoming community atmosphere, 
                  FitZone started as a modest 2,000 sq ft facility in Andheri West, Mumbai.
                </StoryText>
              </StorySection>

              <StoryHighlight>
                <p>"We wanted to create more than just a gym – we wanted to build a community where fitness dreams become reality."</p>
              </StoryHighlight>

              <StorySection>
                <StoryTitle>Growing Beyond Expectations</StoryTitle>
                <StoryText>
                  What started with 50 members in our first month has grown into a thriving community 
                  of over 500 fitness enthusiasts. Our success lies not just in our state-of-the-art 
                  equipment or expert trainers, but in our commitment to treating every member as family.
                </StoryText>
                <StoryText>
                  From our humble beginnings, we've expanded our facility to 8,000 sq ft, added 
                  specialized zones for CrossFit, yoga, and functional training, and assembled a 
                  team of 50+ certified trainers who share our passion for helping others succeed.
                </StoryText>
              </StorySection>

              <StorySection>
                <StoryTitle>Our Mission Today</StoryTitle>
                <StoryText>
                  Today, FitZone stands as Mumbai's premier fitness destination, but our core mission 
                  remains unchanged: to empower individuals to unlock their potential through fitness, 
                  build lasting healthy habits, and create a supportive community that celebrates 
                  every victory, no matter how small.
                </StoryText>
                <StoryText>
                  We believe that fitness is not a destination but a journey, and we're honored to 
                  be part of thousands of transformation stories. Every drop of sweat, every personal 
                  record, and every smile of achievement in our gym reinforces why we do what we do.
                </StoryText>
              </StorySection>

              <StoryStats>
                <StoryStat>
                  <StoryStatNumber>500+</StoryStatNumber>
                  <StoryStatLabel>Lives Transformed</StoryStatLabel>
                </StoryStat>
                <StoryStat>
                  <StoryStatNumber>50+</StoryStatNumber>
                  <StoryStatLabel>Expert Trainers</StoryStatLabel>
                </StoryStat>
                <StoryStat>
                  <StoryStatNumber>8000</StoryStatNumber>
                  <StoryStatLabel>Sq Ft Facility</StoryStatLabel>
                </StoryStat>
                <StoryStat>
                  <StoryStatNumber>5+</StoryStatNumber>
                  <StoryStatLabel>Years of Excellence</StoryStatLabel>
                </StoryStat>
              </StoryStats>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </HomeContainer>
  );
};

export default Home;
