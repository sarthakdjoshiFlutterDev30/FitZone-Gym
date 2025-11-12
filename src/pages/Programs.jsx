import { styled } from '../stitches.config';
import Container from '../components/Container';
import Button from '../components/Button';
import SEO from '../components/SEO';

const ProgramsContainer = styled('div', {
  mt: '80px', 
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

const ProgramsSection = styled('section', {
  py: '$20',
});

const ProgramsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  
  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

const ProgramCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  },
});

const ProgramImage = styled('div', {
  height: '250px',
  background: 'linear-gradient(135deg, $crimson, $black)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$6xl',
  color: '$white',
  position: 'relative',
  
  '&::after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.3)',
  },
});

const ProgramContent = styled('div', {
  p: '$6',
});

const ProgramTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$2xl',
  mb: '$3',
  color: '$black',
});

const ProgramDescription = styled('p', {
  color: '$gray600',
  lineHeight: 1.6,
  mb: '$4',
});

const ProgramFeatures = styled('ul', {
  listStyle: 'none',
  mb: '$6',
  
  '& li': {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    mb: '$2',
    color: '$gray700',
    fontSize: '$sm',
    
    '&::before': {
      content: '✓',
      color: '$crimson',
      fontWeight: 'bold',
    },
  },
});

const ProgramPrice = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  mb: '$4',
});

const Price = styled('span', {
  fontFamily: '$heading',
  fontSize: '$xl',
  color: '$crimson',
  fontWeight: 'bold',
});

const Duration = styled('span', {
  color: '$gray500',
  fontSize: '$sm',
});

const SpecialtySection = styled('section', {
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

const SpecialtyGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$12',
  
  '@lg': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const SpecialtyCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  p: '$8',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const SpecialtyTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$2xl',
  mb: '$4',
  color: '$black',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const SpecialtyIcon = styled('span', {
  fontSize: '$3xl',
});

const SpecialtyDescription = styled('p', {
  color: '$gray700',
  lineHeight: 1.6,
  mb: '$4',
});

const SpecialtyBenefits = styled('ul', {
  listStyle: 'none',
  
  '& li': {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    mb: '$2',
    color: '$gray600',
    
    '&::before': {
      content: '•',
      color: '$crimson',
      fontWeight: 'bold',
      fontSize: '$lg',
    },
  },
});

const Programs = () => {
  const programs = [
    {
      title: 'Strength Training',
      description: 'Build muscle mass and increase strength with our comprehensive weight training programs.',
      icon: '🏋️‍♂️',
      features: [
        'Free weights and machines',
        'Progressive overload training',
        'Compound movement focus',
        'Personalized workout plans'
      ],
      price: '₹1,499',
      duration: 'per month',
    },
    {
      title: 'Cardio Workouts',
      description: 'Improve cardiovascular health and burn calories with high-energy cardio sessions.',
      icon: '🏃‍♀️',
      features: [
        'Treadmills and ellipticals',
        'HIIT training sessions',
        'Heart rate monitoring',
        'Fat burning programs'
      ],
      price: '₹999',
      duration: 'per month',
    },
    {
      title: 'Yoga Classes',
      description: 'Find balance and flexibility through traditional and modern yoga practices.',
      icon: '🧘‍♀️',
      features: [
        'Hatha and Vinyasa styles',
        'Meditation sessions',
        'Flexibility improvement',
        'Stress relief techniques'
      ],
      price: '₹799',
      duration: 'per month',
    },
    {
      title: 'Zumba Dance',
      description: 'Dance your way to fitness with energetic Zumba classes that make exercise fun.',
      icon: '💃',
      features: [
        'Latin dance moves',
        'High-energy music',
        'Full-body workout',
        'Social fitness experience'
      ],
      price: '₹699',
      duration: 'per month',
    },
    {
      title: 'CrossFit Training',
      description: 'Challenge yourself with varied, high-intensity functional fitness workouts.',
      icon: '🔥',
      features: [
        'Functional movements',
        'Olympic lifting',
        'Metabolic conditioning',
        'Competition preparation'
      ],
      price: '₹2,499',
      duration: 'per month',
    },
    {
      title: 'Personal Training',
      description: 'Get one-on-one attention with customized training programs for faster results.',
      icon: '👨‍💼',
      features: [
        'Dedicated trainer',
        'Customized workout plans',
        'Nutrition guidance',
        'Progress tracking'
      ],
      price: '₹3,999',
      duration: 'per month',
    },
  ];
  
  const specialties = [
    {
      title: 'Weight Loss Programs',
      icon: '⚖️',
      description: 'Comprehensive weight loss programs combining cardio, strength training, and nutrition guidance to help you achieve sustainable results.',
      benefits: [
        'Customized meal plans',
        'Regular body composition analysis',
        'Metabolic rate optimization',
        'Lifestyle coaching'
      ],
    },
    {
      title: 'Muscle Building',
      icon: '💪',
      description: 'Specialized muscle building programs designed to maximize hypertrophy through progressive overload and proper nutrition.',
      benefits: [
        'Hypertrophy-focused training',
        'Supplement guidance',
        'Recovery optimization',
        'Strength progression tracking'
      ],
    },
  ];
  
  return (
    <ProgramsContainer>
      <SEO 
        title="Fitness Programs - Strength Training, Yoga, Zumba & More | FitZone Gym"
        description="Explore FitZone Gym's diverse fitness programs: Strength Training, Cardio, Yoga, Zumba, CrossFit & Personal Training. Programs starting from ₹699/month."
        keywords="fitness programs Mumbai, strength training, yoga classes, zumba dance, crossfit, personal training, cardio workouts, gym programs"
        url="https://fitzonegym.com/programs"
      />
      <HeroSection>
        <Container>
          <HeroTitle>
            Our <span>Programs</span>
          </HeroTitle>
          <HeroSubtitle>
            Discover the perfect fitness program tailored to your goals, fitness level, 
            and lifestyle. From strength training to yoga, we have something for everyone.
          </HeroSubtitle>
        </Container>
      </HeroSection>
      
      <ProgramsSection>
        <Container>
          <SectionTitle>
            Choose Your <span>Fitness Journey</span>
          </SectionTitle>
          <ProgramsGrid>
            {programs.map((program, index) => (
              <ProgramCard key={index}>
                <ProgramImage>
                  {program.icon}
                </ProgramImage>
                <ProgramContent>
                  <ProgramTitle>{program.title}</ProgramTitle>
                  <ProgramDescription>{program.description}</ProgramDescription>
                  <ProgramFeatures>
                    {program.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ProgramFeatures>
                  <ProgramPrice>
                    <Price>{program.price}</Price>
                    <Duration>{program.duration}</Duration>
                  </ProgramPrice>
                  <Button variant="primary" size="md" style={{ width: '100%' }}>
                    Learn More
                  </Button>
                </ProgramContent>
              </ProgramCard>
            ))}
          </ProgramsGrid>
        </Container>
      </ProgramsSection>
      
      <SpecialtySection>
        <Container>
          <SectionTitle>
            Specialty <span>Programs</span>
          </SectionTitle>
          <SpecialtyGrid>
            {specialties.map((specialty, index) => (
              <SpecialtyCard key={index}>
                <SpecialtyTitle>
                  <SpecialtyIcon>{specialty.icon}</SpecialtyIcon>
                  {specialty.title}
                </SpecialtyTitle>
                <SpecialtyDescription>{specialty.description}</SpecialtyDescription>
                <SpecialtyBenefits>
                  {specialty.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </SpecialtyBenefits>
              </SpecialtyCard>
            ))}
          </SpecialtyGrid>
        </Container>
      </SpecialtySection>
    </ProgramsContainer>
  );
};

export default Programs;
