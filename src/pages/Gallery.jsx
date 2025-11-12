import { useState } from 'react';
import { styled } from '../stitches.config';
import Container from '../components/Container';
import SEO from '../components/SEO';

const GalleryContainer = styled('div', {
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

const FilterSection = styled('section', {
  py: '$12',
  backgroundColor: '$gray100',
});

const FilterButtons = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '$4',
});

const FilterButton = styled('button', {
  px: '$6',
  py: '$3',
  borderRadius: '$full',
  border: '2px solid $gray300',
  backgroundColor: 'transparent',
  color: '$gray700',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    borderColor: '$crimson',
    color: '$crimson',
  },
  
  variants: {
    active: {
      true: {
        backgroundColor: '$crimson',
        borderColor: '$crimson',
        color: '$white',
      },
    },
  },
});

const GallerySection = styled('section', {
  py: '$20',
});

const GalleryGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '$6',
  
  '@md': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  },
});

const GalleryItem = styled('div', {
  position: 'relative',
  borderRadius: '$lg',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
  },
});

const GalleryImage = styled('div', {
  width: '100%',
  height: '300px',
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
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  
  '&:hover::after': {
    opacity: 1,
  },
});

const GalleryOverlay = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
  color: '$white',
  p: '$4',
  transform: 'translateY(100%)',
  transition: 'transform 0.3s ease',
  
  [`${GalleryItem}:hover &`]: {
    transform: 'translateY(0)',
  },
});

const OverlayTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$lg',
  mb: '$1',
});

const OverlayDescription = styled('p', {
  fontSize: '$sm',
  color: '$gray300',
});

const TestimonialsSection = styled('section', {
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

const TestimonialsGrid = styled('div', {
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

const TestimonialCard = styled('div', {
  backgroundColor: '$white',
  p: '$6',
  borderRadius: '$lg',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
});

const TestimonialImage = styled('div', {
  width: '80px',
  height: '80px',
  borderRadius: '$full',
  background: 'linear-gradient(45deg, $crimson, $black)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$2xl',
  color: '$white',
  margin: '0 auto $4',
});

const TestimonialText = styled('p', {
  fontSize: '$base',
  lineHeight: 1.6,
  color: '$gray700',
  mb: '$4',
  fontStyle: 'italic',
});

const TestimonialAuthor = styled('div', {
  fontWeight: '600',
  color: '$black',
  mb: '$1',
});

const TestimonialRole = styled('div', {
  fontSize: '$sm',
  color: '$crimson',
});

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'gym', label: 'Gym Floor' },
    { id: 'classes', label: 'Group Classes' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'members', label: 'Members' },
    { id: 'events', label: 'Events' },
  ];
  
  const galleryItems = [
    {
      id: 1,
      category: 'gym',
      title: 'Main Gym Floor',
      description: 'Our spacious main gym floor with premium equipment',
      icon: '🏋️‍♂️',
    },
    {
      id: 2,
      category: 'equipment',
      title: 'Cardio Zone',
      description: 'State-of-the-art cardio equipment with entertainment systems',
      icon: '🏃‍♀️',
    },
    {
      id: 3,
      category: 'classes',
      title: 'Yoga Studio',
      description: 'Peaceful yoga studio for mindfulness and flexibility',
      icon: '🧘‍♀️',
    },
    {
      id: 4,
      category: 'members',
      title: 'Success Story - Rahul',
      description: 'Lost 25kg in 8 months with our guidance',
      icon: '💪',
    },
    {
      id: 5,
      category: 'equipment',
      title: 'Free Weights Area',
      description: 'Complete range of dumbbells and barbells',
      icon: '🏋️',
    },
    {
      id: 6,
      category: 'classes',
      title: 'Zumba Class',
      description: 'High-energy dance fitness sessions',
      icon: '💃',
    },
    {
      id: 7,
      category: 'gym',
      title: 'Functional Training Area',
      description: 'Dedicated space for functional and CrossFit training',
      icon: '🔥',
    },
    {
      id: 8,
      category: 'members',
      title: 'Success Story - Priya',
      description: 'Achieved her dream physique in 6 months',
      icon: '🌟',
    },
    {
      id: 9,
      category: 'events',
      title: 'Fitness Challenge 2024',
      description: 'Annual fitness competition with amazing prizes',
      icon: '🏆',
    },
    {
      id: 10,
      category: 'gym',
      title: 'Locker Rooms',
      description: 'Clean and spacious locker facilities',
      icon: '🚿',
    },
    {
      id: 11,
      category: 'equipment',
      title: 'Strength Machines',
      description: 'Professional-grade strength training machines',
      icon: '⚙️',
    },
    {
      id: 12,
      category: 'events',
      title: 'Nutrition Workshop',
      description: 'Educational sessions on healthy eating habits',
      icon: '🥗',
    },
  ];
  
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      text: 'FitZone transformed my life! Lost 30kg and gained confidence. The trainers are amazing and the community is so supportive.',
      avatar: '👨‍💻',
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Manager',
      text: 'Best gym in Mumbai! The yoga classes are incredible and the facilities are always clean. Highly recommend to everyone.',
      avatar: '👩‍💼',
    },
    {
      name: 'Arjun Singh',
      role: 'Student',
      text: 'Great value for money! The trainers helped me build muscle and improve my overall fitness. The atmosphere is motivating.',
      avatar: '🎓',
    },
    {
      name: 'Sneha Patel',
      role: 'Doctor',
      text: 'Professional environment with knowledgeable staff. The nutrition guidance helped me achieve my health goals effectively.',
      avatar: '👩‍⚕️',
    },
    {
      name: 'Vikram Reddy',
      role: 'Business Owner',
      text: 'Flexible timings and excellent equipment. The personal training sessions are worth every rupee. Highly satisfied!',
      avatar: '👨‍💼',
    },
    {
      name: 'Anita Gupta',
      role: 'Teacher',
      text: 'The Zumba classes are so much fun! Great way to stay fit while enjoying dance. The instructors are energetic and friendly.',
      avatar: '👩‍🏫',
    },
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);
  
  return (
    <GalleryContainer>
      <SEO 
        title="Gym Gallery - Facilities, Equipment & Member Success Stories | FitZone"
        description="Explore FitZone Gym's world-class facilities, modern equipment, and inspiring member transformation stories. See why we're Mumbai's top fitness destination."
        keywords="gym gallery Mumbai, fitness center photos, gym facilities, member transformations, gym equipment, FitZone photos"
        url="https://fitzonegym.com/gallery"
      />
      <HeroSection>
        <Container>
          <HeroTitle>
            Our <span>Gallery</span>
          </HeroTitle>
          <HeroSubtitle>
            Take a virtual tour of our world-class facilities and see the amazing 
            transformations of our members. Your fitness journey starts here!
          </HeroSubtitle>
        </Container>
      </HeroSection>
      
      <FilterSection>
        <Container>
          <FilterButtons>
            {filters.map((filter) => (
              <FilterButton
                key={filter.id}
                active={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </FilterButton>
            ))}
          </FilterButtons>
        </Container>
      </FilterSection>
      
      <GallerySection>
        <Container>
          <GalleryGrid>
            {filteredItems.map((item) => (
              <GalleryItem key={item.id}>
                <GalleryImage>
                  {item.icon}
                </GalleryImage>
                <GalleryOverlay>
                  <OverlayTitle>{item.title}</OverlayTitle>
                  <OverlayDescription>{item.description}</OverlayDescription>
                </GalleryOverlay>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </Container>
      </GallerySection>
      
      <TestimonialsSection>
        <Container>
          <SectionTitle>
            Member <span>Testimonials</span>
          </SectionTitle>
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <TestimonialImage>
                  {testimonial.avatar}
                </TestimonialImage>
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
                <TestimonialRole>{testimonial.role}</TestimonialRole>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </Container>
      </TestimonialsSection>
    </GalleryContainer>
  );
};

export default Gallery;
