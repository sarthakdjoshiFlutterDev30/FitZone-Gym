import { styled } from '../stitches.config';
import Container from '../components/Container';
import Button from '../components/Button';
import SEO from '../components/SEO';

const MembershipContainer = styled('div', {
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

const PricingSection = styled('section', {
  py: '$20',
});

const SectionTitle = styled('h2', {
  fontFamily: '$heading',
  fontSize: '$4xl',
  textAlign: 'center',
  mb: '$4',
  color: '$black',
  
  '& span': {
    color: '$crimson',
  },
});

const SectionSubtitle = styled('p', {
  textAlign: 'center',
  fontSize: '$lg',
  color: '$gray600',
  maxWidth: '600px',
  margin: '0 auto $12',
  lineHeight: 1.6,
});

const PricingGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  maxWidth: '1000px',
  margin: '0 auto',
  
  '@md': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

const PricingCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  p: '$8',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  position: 'relative',
  border: '2px solid transparent',
  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  },
  
  variants: {
    featured: {
      true: {
        border: '2px solid $crimson',
        transform: 'scale(1.05)',
        
        '&:hover': {
          transform: 'scale(1.05) translateY(-8px)',
        },
      },
    },
  },
});

const PopularBadge = styled('div', {
  position: 'absolute',
  top: '-12px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '$crimson',
  color: '$white',
  px: '$4',
  py: '$1',
  borderRadius: '$full',
  fontSize: '$sm',
  fontWeight: 'bold',
});

const PlanName = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$2xl',
  mb: '$2',
  color: '$black',
  textAlign: 'center',
});

const PlanPrice = styled('div', {
  textAlign: 'center',
  mb: '$6',
});

const Price = styled('span', {
  fontFamily: '$heading',
  fontSize: '$4xl',
  color: '$crimson',
  fontWeight: 'bold',
});

const PriceUnit = styled('span', {
  fontSize: '$lg',
  color: '$gray500',
});

const FeaturesList = styled('ul', {
  listStyle: 'none',
  mb: '$8',
  
  '& li': {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    mb: '$3',
    color: '$gray700',
    
    '&::before': {
      content: '✓',
      color: '$crimson',
      fontWeight: 'bold',
      fontSize: '$lg',
      minWidth: '20px',
    },
  },
});

const NotIncluded = styled('li', {
  opacity: 0.5,
  
  '&::before': {
    content: '✗',
    color: '$gray400',
  },
});

const BenefitsSection = styled('section', {
  py: '$20',
  backgroundColor: '$gray100',
});

const BenefitsGrid = styled('div', {
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

const BenefitCard = styled('div', {
  backgroundColor: '$white',
  p: '$6',
  borderRadius: '$lg',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const BenefitIcon = styled('div', {
  fontSize: '$4xl',
  mb: '$4',
});

const BenefitTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$lg',
  mb: '$2',
  color: '$black',
});

const BenefitDescription = styled('p', {
  color: '$gray600',
  fontSize: '$sm',
  lineHeight: 1.6,
});

const FAQSection = styled('section', {
  py: '$20',
});

const FAQGrid = styled('div', {
  maxWidth: '800px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

const FAQItem = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  p: '$6',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const FAQQuestion = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$lg',
  mb: '$3',
  color: '$black',
});

const FAQAnswer = styled('p', {
  color: '$gray700',
  lineHeight: 1.6,
});

const Membership = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '₹999',
      features: [
        'Access to gym floor',
        'Basic cardio equipment',
        'Locker facility',
        '1 personal training session per month',
        'Fitness assessment',
      ],
      notIncluded: [
        'Group classes',
        'Unlimited personal training',
        'Nutrition guidance',
        'Premium equipment access',
      ],
      featured: false,
    },
    {
      name: 'Premium Plan',
      price: '₹1,999',
      features: [
        'Unlimited gym access',
        'All cardio & strength equipment',
        'Group classes (Yoga, Zumba)',
        'Locker facility',
        '4 personal training sessions per month',
        'Fitness assessment & tracking',
        'Guest passes (2 per month)',
      ],
      notIncluded: [
        'Unlimited personal training',
        'Nutrition guidance',
        'Massage therapy',
      ],
      featured: true,
    },
    {
      name: 'VIP Plan',
      price: '₹3,499',
      features: [
        'All Premium features',
        'Unlimited personal training',
        'Nutrition guidance & meal plans',
        'Priority booking for classes',
        'Massage therapy (2 sessions/month)',
        'Supplement consultation',
        'Guest passes (5 per month)',
        'Exclusive VIP lounge access',
      ],
      notIncluded: [],
      featured: false,
    },
  ];
  
  const benefits = [
    {
      icon: '🏃‍♂️',
      title: 'No Joining Fee',
      description: 'Start your fitness journey without any upfront costs',
    },
    {
      icon: '🔄',
      title: 'Flexible Plans',
      description: 'Upgrade or downgrade your membership anytime',
    },
    {
      icon: '❄️',
      title: 'Freeze Option',
      description: 'Pause your membership for up to 3 months per year',
    },
    {
      icon: '👥',
      title: 'Guest Passes',
      description: 'Bring friends and family to workout with you',
    },
  ];
  
  const faqs = [
    {
      question: 'Can I cancel my membership anytime?',
      answer: 'Yes, you can cancel your membership with 30 days notice. We believe in flexibility and want you to feel comfortable with your commitment.',
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees! The price you see is what you pay. We believe in transparent pricing with no surprises.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Absolutely! You can upgrade your plan anytime and only pay the prorated difference for the remaining period.',
    },
    {
      question: 'What if I need to freeze my membership?',
      answer: 'Life happens! You can freeze your membership for up to 3 months per year for medical reasons, travel, or other circumstances.',
    },
  ];
  
  const scrollToContact = () => {
    window.location.href = '/contact';
  };
  
  return (
    <MembershipContainer>
      <SEO 
        title="Gym Membership Plans - ₹999 to ₹3499/month | FitZone Gym Mumbai"
        description="Choose from 3 flexible gym membership plans at FitZone: Basic (₹999), Premium (₹1999), VIP (₹3499). No joining fees, flexible terms, premium facilities."
        keywords="gym membership Mumbai, fitness membership plans, gym fees Mumbai, affordable gym membership, FitZone membership, gym pricing INR"
        url="https://fitzonegym.com/membership"
      />
      <HeroSection>
        <Container>
          <HeroTitle>
            Choose Your <span>Membership</span>
          </HeroTitle>
          <HeroSubtitle>
            Flexible membership plans designed to fit your lifestyle and budget. 
            Start your fitness journey today with no joining fees!
          </HeroSubtitle>
        </Container>
      </HeroSection>
      
      <PricingSection>
        <Container>
          <SectionTitle>
            Membership <span>Plans</span>
          </SectionTitle>
          <SectionSubtitle>
            Choose the plan that best fits your fitness goals and lifestyle. 
            All plans include access to our world-class facilities and expert support.
          </SectionSubtitle>
          
          <PricingGrid>
            {plans.map((plan, index) => (
              <PricingCard key={index} featured={plan.featured}>
                {plan.featured && <PopularBadge>Most Popular</PopularBadge>}
                <PlanName>{plan.name}</PlanName>
                <PlanPrice>
                  <Price>{plan.price}</Price>
                  <PriceUnit>/month</PriceUnit>
                </PlanPrice>
                <FeaturesList>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <NotIncluded key={`not-${idx}`}>{feature}</NotIncluded>
                  ))}
                </FeaturesList>
                <Button 
                  variant={plan.featured ? 'primary' : 'secondary'} 
                  size="lg" 
                  style={{ width: '100%' }}
                  onClick={scrollToContact}
                >
                  Join Now
                </Button>
              </PricingCard>
            ))}
          </PricingGrid>
        </Container>
      </PricingSection>
      
      <BenefitsSection>
        <Container>
          <SectionTitle>
            Membership <span>Benefits</span>
          </SectionTitle>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </Container>
      </BenefitsSection>
      
      <FAQSection>
        <Container>
          <SectionTitle>
            Frequently Asked <span>Questions</span>
          </SectionTitle>
          <FAQGrid>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion>{faq.question}</FAQQuestion>
                <FAQAnswer>{faq.answer}</FAQAnswer>
              </FAQItem>
            ))}
          </FAQGrid>
        </Container>
      </FAQSection>
    </MembershipContainer>
  );
};

export default Membership;
