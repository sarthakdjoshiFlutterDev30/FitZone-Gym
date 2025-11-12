import { styled } from '../stitches.config';
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

const Home = () => {
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
  
  const scrollToContact = () => {
    // This would scroll to contact section or navigate to contact page
    window.location.href = '/contact';
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
            <Button variant="primary" size="lg" onClick={scrollToContact}>
              Join Now
            </Button>
            <Button variant="outline" size="lg">
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
            Your fitness goals are just one step away!
          </CTADescription>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Get Started Today
          </Button>
        </Container>
      </CTASection>
    </HomeContainer>
  );
};

export default Home;
