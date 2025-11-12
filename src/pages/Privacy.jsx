import { styled } from '../stitches.config';
import Container from '../components/Container';
import SEO from '../components/SEO';

const PrivacyContainer = styled('div', {
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

const Table = styled('table', {
  width: '100%',
  borderCollapse: 'collapse',
  mb: '$6',
  
  '& th, & td': {
    border: '1px solid $gray300',
    p: '$3',
    textAlign: 'left',
  },
  
  '& th': {
    backgroundColor: '$gray100',
    fontWeight: 'bold',
    color: '$black',
  },
  
  '& td': {
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

const ContactBox = styled('div', {
  backgroundColor: '$crimson',
  color: '$white',
  p: '$6',
  borderRadius: '$lg',
  textAlign: 'center',
  mb: '$6',
  
  '& h3': {
    fontFamily: '$heading',
    fontSize: '$xl',
    mb: '$3',
  },
  
  '& p': {
    mb: '$2',
  },
});

const LastUpdated = styled('div', {
  textAlign: 'center',
  mt: '$8',
  pt: '$4',
  borderTop: '1px solid $gray300',
  color: '$gray500',
  fontSize: '$sm',
});

const Privacy = () => {
  return (
    <PrivacyContainer>
      <SEO 
        title="Privacy Policy - FitZone Gym | Data Protection & Member Privacy"
        description="Learn how FitZone Gym protects your personal information. Read our comprehensive privacy policy covering data collection, usage, and your privacy rights."
        keywords="FitZone privacy policy, data protection, member privacy, personal information, GDPR compliance, data security"
        url="https://fitzonegym.com/privacy"
      />
      
      <HeroSection>
        <Container>
          <HeroTitle>
            Privacy <span>Policy</span>
          </HeroTitle>
          <HeroSubtitle>
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information at FitZone Gym.
          </HeroSubtitle>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <ContentWrapper>
            <HighlightBox>
              <strong>Effective Date:</strong> November 12, 2024<br />
              <strong>Last Updated:</strong> November 12, 2024<br /><br />
              This Privacy Policy describes how FitZone Gym ("we," "us," or "our") collects, uses, and protects your personal information when you use our services.
            </HighlightBox>

            <SectionTitle>1. Information We Collect</SectionTitle>
            
            <SubSectionTitle>1.1 Personal Information</SubSectionTitle>
            <Paragraph>
              We collect personal information that you provide to us directly, including:
            </Paragraph>
            <List>
              <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
              <li><strong>Identification:</strong> Date of birth, government-issued ID for verification</li>
              <li><strong>Health Information:</strong> Medical conditions, fitness goals, emergency contacts</li>
              <li><strong>Payment Information:</strong> Credit/debit card details, billing address</li>
              <li><strong>Membership Details:</strong> Membership type, start date, preferences</li>
            </List>

            <SubSectionTitle>1.2 Automatically Collected Information</SubSectionTitle>
            <List>
              <li><strong>Usage Data:</strong> Gym access times, equipment usage, class attendance</li>
              <li><strong>Device Information:</strong> IP address, browser type, device identifiers</li>
              <li><strong>Location Data:</strong> Approximate location when using our mobile app</li>
              <li><strong>Cookies:</strong> Website usage patterns and preferences</li>
            </List>

            <SubSectionTitle>1.3 Third-Party Information</SubSectionTitle>
            <Paragraph>
              We may receive information about you from third parties such as:
            </Paragraph>
            <List>
              <li>Social media platforms (if you connect your accounts)</li>
              <li>Payment processors</li>
              <li>Marketing partners</li>
              <li>Public databases</li>
            </List>

            <SectionTitle>2. How We Use Your Information</SectionTitle>
            
            <SubSectionTitle>2.1 Primary Uses</SubSectionTitle>
            <List>
              <li><strong>Service Delivery:</strong> Provide gym access, classes, and personal training</li>
              <li><strong>Account Management:</strong> Create and maintain your membership account</li>
              <li><strong>Payment Processing:</strong> Process membership fees and other charges</li>
              <li><strong>Communication:</strong> Send important updates, schedules, and notifications</li>
              <li><strong>Safety & Security:</strong> Ensure facility security and member safety</li>
            </List>

            <SubSectionTitle>2.2 Secondary Uses</SubSectionTitle>
            <List>
              <li><strong>Marketing:</strong> Send promotional offers and fitness tips (with consent)</li>
              <li><strong>Analytics:</strong> Improve our services and understand usage patterns</li>
              <li><strong>Legal Compliance:</strong> Meet regulatory requirements and legal obligations</li>
              <li><strong>Research:</strong> Conduct fitness and health research (anonymized data)</li>
            </List>

            <SectionTitle>3. Information Sharing and Disclosure</SectionTitle>
            
            <SubSectionTitle>3.1 We Share Information With:</SubSectionTitle>
            <Table>
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Purpose</th>
                  <th>Data Shared</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Service Providers</td>
                  <td>Payment processing, IT services</td>
                  <td>Contact and payment information</td>
                </tr>
                <tr>
                  <td>Trainers & Staff</td>
                  <td>Provide personalized services</td>
                  <td>Health and fitness information</td>
                </tr>
                <tr>
                  <td>Emergency Contacts</td>
                  <td>Medical emergencies</td>
                  <td>Health and contact information</td>
                </tr>
                <tr>
                  <td>Legal Authorities</td>
                  <td>Legal compliance</td>
                  <td>As required by law</td>
                </tr>
              </tbody>
            </Table>

            <SubSectionTitle>3.2 We Do NOT Share Information With:</SubSectionTitle>
            <List>
              <li>Third-party marketers without your consent</li>
              <li>Social media platforms (unless you connect accounts)</li>
              <li>Insurance companies</li>
              <li>Employers (unless corporate membership)</li>
            </List>

            <SectionTitle>4. Data Security</SectionTitle>
            
            <SubSectionTitle>4.1 Security Measures</SubSectionTitle>
            <List>
              <li><strong>Encryption:</strong> All sensitive data is encrypted in transit and at rest</li>
              <li><strong>Access Controls:</strong> Limited access on a need-to-know basis</li>
              <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
              <li><strong>Staff Training:</strong> Regular privacy and security training for all employees</li>
              <li><strong>Secure Facilities:</strong> Physical security measures for data storage</li>
            </List>

            <SubSectionTitle>4.2 Data Breach Response</SubSectionTitle>
            <Paragraph>
              In the event of a data breach, we will:
            </Paragraph>
            <List>
              <li>Notify affected members within 72 hours</li>
              <li>Report to relevant authorities as required</li>
              <li>Take immediate steps to secure the breach</li>
              <li>Provide support and guidance to affected members</li>
            </List>

            <SectionTitle>5. Your Privacy Rights</SectionTitle>
            
            <SubSectionTitle>5.1 Access and Control</SubSectionTitle>
            <Paragraph>
              You have the right to:
            </Paragraph>
            <List>
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correct:</strong> Update or correct inaccurate information</li>
              <li><strong>Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Restrict:</strong> Limit how we use your information</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Object:</strong> Opt-out of certain uses of your information</li>
            </List>

            <SubSectionTitle>5.2 Marketing Communications</SubSectionTitle>
            <List>
              <li>Opt-out of marketing emails by clicking "unsubscribe"</li>
              <li>Adjust SMS preferences in your account settings</li>
              <li>Contact us to update communication preferences</li>
            </List>

            <SectionTitle>6. Data Retention</SectionTitle>
            
            <SubSectionTitle>6.1 Retention Periods</SubSectionTitle>
            <Table>
              <thead>
                <tr>
                  <th>Data Type</th>
                  <th>Retention Period</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Membership Information</td>
                  <td>7 years after termination</td>
                  <td>Legal and tax requirements</td>
                </tr>
                <tr>
                  <td>Payment Records</td>
                  <td>7 years</td>
                  <td>Financial regulations</td>
                </tr>
                <tr>
                  <td>Health Information</td>
                  <td>3 years after termination</td>
                  <td>Safety and liability</td>
                </tr>
                <tr>
                  <td>Marketing Data</td>
                  <td>Until opt-out</td>
                  <td>Consent-based</td>
                </tr>
              </tbody>
            </Table>

            <SectionTitle>7. Cookies and Tracking</SectionTitle>
            
            <SubSectionTitle>7.1 Types of Cookies</SubSectionTitle>
            <List>
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
              <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </List>

            <SubSectionTitle>7.2 Cookie Management</SubSectionTitle>
            <Paragraph>
              You can control cookies through your browser settings or our cookie preference center. Note that disabling certain cookies may affect website functionality.
            </Paragraph>

            <SectionTitle>8. Third-Party Services</SectionTitle>
            <Paragraph>
              Our website and services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. Please review their privacy policies separately.
            </Paragraph>

            <SectionTitle>9. Children's Privacy</SectionTitle>
            <Paragraph>
              Our services are not intended for children under 16. We do not knowingly collect personal information from children under 16. If you believe we have collected such information, please contact us immediately.
            </Paragraph>

            <SectionTitle>10. International Data Transfers</SectionTitle>
            <Paragraph>
              Your information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place to protect your information during such transfers.
            </Paragraph>

            <SectionTitle>11. Changes to This Policy</SectionTitle>
            <Paragraph>
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or prominent notice on our website. Your continued use of our services constitutes acceptance of the updated policy.
            </Paragraph>

            <ContactBox>
              <h3>Privacy Questions or Concerns?</h3>
              <p><strong>Data Protection Officer:</strong> privacy@fitzonegym.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> 123 Fitness Street, Andheri West, Mumbai, Maharashtra 400058</p>
              <p><strong>Response Time:</strong> We respond to privacy requests within 30 days</p>
            </ContactBox>

            <SectionTitle>12. Legal Basis for Processing</SectionTitle>
            <Paragraph>
              We process your personal information based on:
            </Paragraph>
            <List>
              <li><strong>Contract:</strong> To fulfill our membership agreement with you</li>
              <li><strong>Consent:</strong> For marketing communications and optional services</li>
              <li><strong>Legitimate Interest:</strong> For security, analytics, and service improvement</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </List>

            <LastUpdated>
              <strong>Document Version:</strong> 1.0<br />
              <strong>Last Reviewed:</strong> November 12, 2024<br />
              <strong>Next Review Date:</strong> November 12, 2025
            </LastUpdated>
          </ContentWrapper>
        </Container>
      </ContentSection>
    </PrivacyContainer>
  );
};

export default Privacy;
