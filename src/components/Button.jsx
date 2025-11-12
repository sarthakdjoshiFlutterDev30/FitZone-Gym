import { styled } from '../stitches.config';

const StyledButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$body',
  fontWeight: '600',
  fontSize: '$base',
  lineHeight: 1,
  textAlign: 'center',
  textDecoration: 'none',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  px: '$6',
  py: '$3',
  
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '$crimson',
        color: '$white',
        
        '&:hover': {
          backgroundColor: '#b91c3c',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(220, 20, 60, 0.3)',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '$crimson',
        border: '2px solid $crimson',
        
        '&:hover': {
          backgroundColor: '$crimson',
          color: '$white',
          transform: 'translateY(-2px)',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$white',
        border: '2px solid $white',
        
        '&:hover': {
          backgroundColor: '$white',
          color: '$black',
          transform: 'translateY(-2px)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$white',
        
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    size: {
      sm: {
        fontSize: '$sm',
        px: '$4',
        py: '$2',
      },
      md: {
        fontSize: '$base',
        px: '$6',
        py: '$3',
      },
      lg: {
        fontSize: '$lg',
        px: '$8',
        py: '$4',
      },
    },
  },
  
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
