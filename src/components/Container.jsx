import { styled } from '../stitches.config';

const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  px: '$4',
  
  '@md': {
    px: '$6',
  },
  
  variants: {
    size: {
      sm: {
        maxWidth: '640px',
      },
      md: {
        maxWidth: '768px',
      },
      lg: {
        maxWidth: '1024px',
      },
      xl: {
        maxWidth: '1200px',
      },
      full: {
        maxWidth: '100%',
      },
    },
  },
  
  defaultVariants: {
    size: 'xl',
  },
});

export default Container;
