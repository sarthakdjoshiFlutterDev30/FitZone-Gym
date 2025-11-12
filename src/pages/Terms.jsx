import { styled } from '../stitches.config';
import Container from '../components/Container';
import SEO from '../components/SEO';

const TermsContainer = styled('div', {
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

const ContentSection = styled('section', {
  py: '$20',
});

const ContentWrapper = styled('div', {
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: '$white',
  p: '$8',
  borderRadius: '$lg',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const SectionTitle = styled('h2', {
  fontFamily: '$heading',
  fontSize: '$2xl',
  mb: '$4',
  color: '$black',
  borderBottom: '2px solid $crimson',
  pb: '$2',
});

const SubSectionTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$xl',
  mb: '$3',
  color: '$crimson',
  mt: '$6',
});

const Paragraph = styled('p', {
  mb: '$4',
  lineHeight: 1.7,
  color: '$gray700',
});

const List = styled('ul', {
  mb: '$4',
  pl: '$6',
  
  '& li': {
    mb: '$2',
    lineHeight: 1.6,
    color: '$gray700',
  },
});

const OrderedList = styled('ol', {
  mb: '$4',
  pl: '$6',
  
  '& li': {
    mb: '$2',
    lineHeight: 1.6,
    color: '$gray700',
  },
});

const HighlightBox = styled('div', {
  backgroundColor: '$gray100',
  p: '$4',
  borderRadius: '$md',
  borderLeft: '4px solid $crimson',
  mb: '$6',
});

const LastUpdated = styled('div', {
  textAlign: 'center',
  mt: '$8',
  pt: '$4',
  borderTop: '1px solid $gray300',
  color: '$gray500',
  fontSize: '$sm',
});

const Terms = () => {
  return (
    <TermsContainer>
      <SEO 
        title="Terms & Conditions - FitZone Gym | Membership Terms & Policies"
        description="Read FitZone Gym's terms and conditions, membership policies, rules and regulations. Understand your rights and responsibilities as a gym member."
        keywords="FitZone terms, gym membership terms, fitness center policies, gym rules, membership agreement, terms and conditions"
        url="https://fitzonegym.com/terms"
      />
      
      <HeroSection>
        <Container>
          <HeroTitle>
            Terms & <span>Conditions</span>
          </HeroTitle>
          <HeroSubtitle>
            Please read these terms and conditions carefully before using our services. 
            By becoming a member, you agree to comply with these terms.
          </HeroSubtitle>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <ContentWrapper>
            <HighlightBox>
              <strong>Important Notice:</strong> These terms and conditions constitute a legally binding agreement between you and FitZone Gym. Please read them carefully and contact us if you have any questions.
            </HighlightBox>

            <SectionTitle>1. Membership Agreement</SectionTitle>
            <Paragraph>
              By signing up for a membership at FitZone Gym, you enter into a binding agreement with us. This agreement governs your use of our facilities, services, and programs.
            </Paragraph>
            
            <SubSectionTitle>1.1 Membership Types</SubSectionTitle>
            <List>
              <li><strong>Basic Plan (₹999/month):</strong> Access to gym floor and basic equipment</li>
              <li><strong>Premium Plan (₹1,999/month):</strong> Full access including group classes</li>
              <li><strong>VIP Plan (₹3,499/month):</strong> All-inclusive with personal training</li>
            </List>

            <SubSectionTitle>1.2 Payment Terms</SubSectionTitle>
            <List>
              <li>Monthly memberships are billed in advance</li>
              <li>Payments are due on the same date each month</li>
              <li>Late payment fees of ₹200 apply after 7 days</li>
              <li>All prices are in Indian Rupees (INR) and inclusive of applicable taxes</li>
            </List>

            <SectionTitle>2. Facility Usage Rules</SectionTitle>
            
            <SubSectionTitle>2.1 General Conduct</SubSectionTitle>
            <List>
              <li>Members must treat all staff, other members, and facilities with respect</li>
              <li>Proper gym attire and closed-toe shoes are mandatory</li>
              <li>Personal hygiene standards must be maintained at all times</li>
              <li>Use of mobile phones is restricted in workout areas</li>
              <li>Photography or videography requires prior written consent</li>
            </List>

            <SubSectionTitle>2.2 Equipment Usage</SubSectionTitle>
            <List>
              <li>Equipment must be used safely and as intended</li>
              <li>Members are responsible for cleaning equipment after use</li>
              <li>Time limits may apply during peak hours</li>
              <li>Report any damaged or malfunctioning equipment immediately</li>
            </List>

            <SectionTitle>3. Health and Safety</SectionTitle>
            
            <SubSectionTitle>3.1 Medical Clearance</SubSectionTitle>
            <Paragraph>
              Members are advised to consult with a healthcare provider before beginning any exercise program. FitZone Gym is not responsible for any health issues that may arise from exercise.
            </Paragraph>

            <SubSectionTitle>3.2 Assumption of Risk</SubSectionTitle>
            <Paragraph>
              Exercise involves inherent risks. By using our facilities, you acknowledge and assume all risks associated with physical activity, including but not limited to injury, illness, or death.
            </Paragraph>

            <SubSectionTitle>3.3 Emergency Procedures</SubSectionTitle>
            <List>
              <li>Report all injuries to staff immediately</li>
              <li>First aid is available on-site during operating hours</li>
              <li>Emergency contact information must be kept current</li>
            </List>

            <SectionTitle>4. Membership Policies</SectionTitle>
            
            <SubSectionTitle>4.1 Cancellation Policy</SubSectionTitle>
            <OrderedList>
              <li>Monthly memberships can be cancelled with 30 days written notice</li>
              <li>Cancellation requests must be submitted in writing or via email</li>
              <li>No refunds for partial months or unused services</li>
              <li>Outstanding dues must be settled before cancellation</li>
            </OrderedList>

            <SubSectionTitle>4.2 Freeze Policy</SubSectionTitle>
            <List>
              <li>Memberships can be frozen for up to 3 months per year</li>
              <li>Medical documentation required for medical freezes</li>
              <li>Freeze fee of ₹500 per month applies</li>
              <li>Minimum freeze period is 1 month</li>
            </List>

            <SubSectionTitle>4.3 Transfer Policy</SubSectionTitle>
            <List>
              <li>Memberships are non-transferable between individuals</li>
              <li>Location transfers may be available (subject to availability)</li>
              <li>Transfer fees may apply</li>
            </List>

            <SectionTitle>5. Guest Policy</SectionTitle>
            <Paragraph>
              Premium and VIP members may bring guests as per their membership benefits. All guests must:
            </Paragraph>
            <List>
              <li>Be accompanied by the member at all times</li>
              <li>Sign a waiver and provide valid identification</li>
              <li>Follow all gym rules and regulations</li>
              <li>Pay applicable guest fees if exceeding monthly limits</li>
            </List>

            <SectionTitle>6. Personal Training and Classes</SectionTitle>
            
            <SubSectionTitle>6.1 Booking and Cancellation</SubSectionTitle>
            <List>
              <li>Sessions must be booked in advance through our app or front desk</li>
              <li>24-hour notice required for cancellations</li>
              <li>Late cancellations or no-shows will be charged</li>
              <li>Make-up sessions subject to trainer availability</li>
            </List>

            <SubSectionTitle>6.2 Group Classes</SubSectionTitle>
            <List>
              <li>Class capacity is limited and booking is recommended</li>
              <li>Arrive 10 minutes early for check-in</li>
              <li>Late arrivals may be denied entry for safety reasons</li>
            </List>

            <SectionTitle>7. Locker and Storage Policy</SectionTitle>
            <List>
              <li>Day-use lockers are available free of charge</li>
              <li>Personal locks must be removed daily</li>
              <li>FitZone Gym is not responsible for lost or stolen items</li>
              <li>Abandoned items will be donated to charity after 30 days</li>
            </List>

            <SectionTitle>8. Disciplinary Actions</SectionTitle>
            <Paragraph>
              Violation of these terms may result in:
            </Paragraph>
            <OrderedList>
              <li>Verbal warning</li>
              <li>Written warning</li>
              <li>Temporary suspension</li>
              <li>Permanent membership termination without refund</li>
            </OrderedList>

            <SectionTitle>9. Limitation of Liability</SectionTitle>
            <Paragraph>
              FitZone Gym's liability is limited to the amount of membership fees paid. We are not liable for indirect, incidental, or consequential damages arising from membership or facility use.
            </Paragraph>

            <SectionTitle>10. Privacy and Data Protection</SectionTitle>
            <Paragraph>
              Your personal information is protected according to our Privacy Policy. We collect and use data only as necessary to provide services and communicate with members.
            </Paragraph>

            <SectionTitle>11. Modifications to Terms</SectionTitle>
            <Paragraph>
              FitZone Gym reserves the right to modify these terms at any time. Members will be notified of significant changes via email or posted notices. Continued use of facilities constitutes acceptance of modified terms.
            </Paragraph>

            <SectionTitle>12. Governing Law</SectionTitle>
            <Paragraph>
              These terms are governed by the laws of Maharashtra, India. Any disputes will be resolved through arbitration in Mumbai, Maharashtra.
            </Paragraph>

            <SectionTitle>13. Contact Information</SectionTitle>
            <Paragraph>
              For questions about these terms or to report violations, contact us at:
            </Paragraph>
            <List>
              <li><strong>Email:</strong> legal@fitzonegym.com</li>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Address:</strong> 123 Fitness Street, Andheri West, Mumbai, Maharashtra 400058</li>
            </List>

            <LastUpdated>
              <strong>Last Updated:</strong> November 12, 2024<br />
              <strong>Effective Date:</strong> November 12, 2024
            </LastUpdated>
          </ContentWrapper>
        </Container>
      </ContentSection>
    </TermsContainer>
  );
};

export default Terms;
