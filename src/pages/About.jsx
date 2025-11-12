import { styled } from '../stitches.config';
import Container from '../components/Container';
import SEO from '../components/SEO';

const AboutContainer = styled('div', {
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

const StorySection = styled('section', {
  py: '$20',
});

const StoryGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$12',
  alignItems: 'center',
  
  '@lg': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const StoryContent = styled('div', {});

const SectionTitle = styled('h2', {
  fontFamily: '$heading',
  fontSize: '$4xl',
  mb: '$6',
  color: '$black',
  
  '& span': {
    color: '$crimson',
  },
});

const StoryText = styled('p', {
  fontSize: '$lg',
  lineHeight: 1.8,
  color: '$gray700',
  mb: '$6',
});

const StoryImage = styled('div', {
  borderRadius: '$lg',
  overflow: 'hidden',
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  
  '& img': {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  },
});

const ValuesSection = styled('section', {
  py: '$20',
  backgroundColor: '$gray100',
});

const ValuesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  
  '@md': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

const ValueCard = styled('div', {
  backgroundColor: '$white',
  p: '$8',
  borderRadius: '$lg',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  
  '&:hover': {
    transform: 'translateY(-4px)',
  },
});

const ValueIcon = styled('div', {
  fontSize: '$4xl',
  mb: '$4',
});

const ValueTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$xl',
  mb: '$3',
  color: '$black',
});

const ValueDescription = styled('p', {
  color: '$gray600',
  lineHeight: 1.6,
});

const TrainersSection = styled('section', {
  py: '$20',
});

const TrainersGrid = styled('div', {
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

const TrainerCard = styled('div', {
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

const TrainerImage = styled('div', {
  height: '300px',
  background: 'linear-gradient(45deg, $crimson, $black)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$6xl',
  color: '$white',
});

const TrainerInfo = styled('div', {
  p: '$6',
});

const TrainerName = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$xl',
  mb: '$2',
  color: '$black',
});

const TrainerSpecialty = styled('p', {
  color: '$crimson',
  fontWeight: '600',
  mb: '$3',
});

const TrainerDescription = styled('p', {
  color: '$gray600',
  lineHeight: 1.6,
  fontSize: '$sm',
});

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our equipment to our service.',
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Building a supportive community where everyone feels welcome and motivated.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Constantly evolving with the latest fitness trends and technologies.',
    },
  ];
  
  const trainers = [
    {
      name: 'Rajesh Kumar',
      specialty: 'Strength Training & Powerlifting',
      description: 'Certified strength coach with 8+ years experience. Specializes in compound movements and progressive overload.',
      emoji: '💪',
    },
    {
      name: 'Priya Sharma',
      specialty: 'Yoga & Flexibility',
      description: 'Registered yoga instructor with expertise in Hatha and Vinyasa yoga. Focus on mindfulness and mobility.',
      emoji: '🧘‍♀️',
    },
    {
      name: 'Arjun Singh',
      specialty: 'CrossFit & HIIT',
      description: 'Level 2 CrossFit trainer specializing in high-intensity workouts and functional fitness.',
      emoji: '🏃‍♂️',
    },
    {
      name: 'Sneha Patel',
      specialty: 'Nutrition & Wellness',
      description: 'Certified nutritionist helping members achieve their goals through proper diet and lifestyle changes.',
      emoji: '🥗',
    },
    {
      name: 'Vikram Reddy',
      specialty: 'Cardio & Endurance',
      description: 'Former marathon runner turned trainer, specializing in cardiovascular fitness and endurance training.',
      emoji: '🏃',
    },
    {
      name: 'Anita Gupta',
      specialty: 'Zumba & Dance Fitness',
      description: 'Professional dance instructor bringing energy and fun to fitness through Zumba and dance workouts.',
      emoji: '💃',
    },
  ];
  
  return (
    <AboutContainer>
      <SEO 
        title="About FitZone Gym - Our Story, Values & Expert Trainers | Mumbai"
        description="Learn about FitZone Gym's mission, values, and meet our certified trainers. Discover why we're Mumbai's trusted fitness destination since 2019."
        keywords="about FitZone gym, gym story Mumbai, certified trainers, fitness philosophy, gym values, expert trainers Mumbai"
        url="https://fitzonegym.com/about"
      />
      <HeroSection>
        <Container>
          <HeroTitle>
            About <span>FitZone</span>
          </HeroTitle>
          <HeroSubtitle>
            Empowering individuals to achieve their fitness goals through dedication, 
            innovation, and community support since 2019.
          </HeroSubtitle>
        </Container>
      </HeroSection>
      
      <StorySection>
        <Container>
          <StoryGrid>
            <StoryContent>
              <SectionTitle>
                Our <span>Story</span>
              </SectionTitle>
              <StoryText>
                FitZone Gym was founded in 2019 with a simple mission: to create a fitness 
                environment where everyone feels welcome, supported, and motivated to achieve 
                their personal best. What started as a small neighborhood gym has grown into 
                one of Mumbai's most trusted fitness destinations.
              </StoryText>
              <StoryText>
                Our founders, passionate fitness enthusiasts themselves, recognized the need 
                for a gym that combines state-of-the-art equipment with personalized attention 
                and a strong sense of community. Today, we're proud to serve over 500 members 
                from all walks of life.
              </StoryText>
              <StoryText>
                At FitZone, we believe fitness is not just about physical transformation—it's 
                about building confidence, discipline, and a healthier lifestyle that extends 
                beyond the gym walls.
              </StoryText>
            </StoryContent>
            <StoryImage>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="FitZone Gym Interior" 
              />
            </StoryImage>
          </StoryGrid>
        </Container>
      </StorySection>
      
      <ValuesSection>
        <Container>
          <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Our <span>Values</span>
          </SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Container>
      </ValuesSection>
      
      <TrainersSection>
        <Container>
          <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Meet Our <span>Trainers</span>
          </SectionTitle>
          <TrainersGrid>
            {trainers.map((trainer, index) => (
              <TrainerCard key={index}>
                <TrainerImage>
                  {trainer.emoji}
                </TrainerImage>
                <TrainerInfo>
                  <TrainerName>{trainer.name}</TrainerName>
                  <TrainerSpecialty>{trainer.specialty}</TrainerSpecialty>
                  <TrainerDescription>{trainer.description}</TrainerDescription>
                </TrainerInfo>
              </TrainerCard>
            ))}
          </TrainersGrid>
        </Container>
      </TrainersSection>
    </AboutContainer>
  );
};

export default About;
