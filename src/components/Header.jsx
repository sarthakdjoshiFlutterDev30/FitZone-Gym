import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '../stitches.config';
import Button from './Button';

const HeaderContainer = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.95)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(220, 20, 60, 0.3)',
  transition: 'all 0.3s ease',
});

const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
  px: '$4',
  py: '$3',
  
  '@md': {
    px: '$6',
  },
});

const Logo = styled(Link, {
  fontFamily: '$heading',
  fontSize: '$3xl',
  fontWeight: 'bold',
  color: '$white',
  textDecoration: 'none',
  
  '& span': {
    color: '$crimson',
  },
  
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 0.2s ease',
  },
});

const NavLinks = styled('div', {
  display: 'none',
  alignItems: 'center',
  gap: '$6',
  
  '@md': {
    display: 'flex',
  },
});

const NavLink = styled(Link, {
  color: '$white',
  fontSize: '$base',
  fontWeight: '500',
  textDecoration: 'none',
  position: 'relative',
  transition: 'color 0.3s ease',
  
  '&:hover': {
    color: '$crimson',
  },
  
  '&::after': {
    content: '',
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    width: '0%',
    height: '2px',
    backgroundColor: '$crimson',
    transition: 'width 0.3s ease',
  },
  
  '&:hover::after': {
    width: '100%',
  },
  
  variants: {
    active: {
      true: {
        color: '$crimson',
        
        '&::after': {
          width: '100%',
        },
      },
    },
  },
});

const MobileMenuButton = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '24px',
  height: '24px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  outline: 'none',
  
  '@md': {
    display: 'none',
  },
  
  '& span': {
    width: '100%',
    height: '2px',
    backgroundColor: '$white !important',
    transition: 'all 0.3s ease',
    display: 'block',
  },
  
  variants: {
    open: {
      true: {
        '& span:nth-child(1)': {
          transform: 'rotate(45deg) translate(5px, 5px)',
          backgroundColor: '$white !important',
        },
        '& span:nth-child(2)': {
          opacity: 0,
          backgroundColor: '$white !important',
        },
        '& span:nth-child(3)': {
          transform: 'rotate(-45deg) translate(7px, -6px)',
          backgroundColor: '$white !important',
        },
      },
    },
  },
});

const MobileMenu = styled('div', {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.98)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(220, 20, 60, 0.3)',
  transform: 'translateY(-100%)',
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.3s ease',
  
  variants: {
    open: {
      true: {
        transform: 'translateY(0)',
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
});

const MobileNavLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  p: '$6',
});

const MobileNavLink = styled(Link, {
  color: '$white',
  fontSize: '$lg',
  fontWeight: '500',
  textDecoration: 'none',
  py: '$2',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  
  '&:hover': {
    color: '$crimson',
  },
  
  variants: {
    active: {
      true: {
        color: '$crimson',
      },
    },
  },
});

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/membership', label: 'Membership' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          Fit<span>Zone</span>
        </Logo>
        
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              active={location.pathname === item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileMenuButton open={mobileMenuOpen} onClick={toggleMobileMenu}>
          <span />
          <span />
          <span />
        </MobileMenuButton>
      </Nav>
      
      <MobileMenu open={mobileMenuOpen}>
        <MobileNavLinks>
          {navItems.map((item) => (
            <MobileNavLink
              key={item.path}
              to={item.path}
              active={location.pathname === item.path}
              onClick={closeMobileMenu}
            >
              {item.label}
            </MobileNavLink>
          ))}
          <Button variant="primary" size="md" onClick={() => { handleJoinNow(); closeMobileMenu(); }}>
            Join Now
          </Button>
        </MobileNavLinks>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
