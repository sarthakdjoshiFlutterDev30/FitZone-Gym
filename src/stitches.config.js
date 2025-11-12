import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // FitZone Color Palette
      black: '#000000',
      crimson: '#dc143c',
      white: '#ffffff',
      gray100: '#f5f5f5',
      gray200: '#e5e5e5',
      gray300: '#d4d4d4',
      gray400: '#a3a3a3',
      gray500: '#737373',
      gray600: '#525252',
      gray700: '#404040',
      gray800: '#262626',
      gray900: '#171717',
      
      // Semantic colors
      primary: '$crimson',
      secondary: '$black',
      background: '$white',
      text: '$black',
      textLight: '$gray600',
    },
    fonts: {
      heading: 'Bebas Neue, Oswald, sans-serif',
      body: 'Poppins, Inter, sans-serif',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
    },
    sizes: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      full: '100%',
    },
    radii: {
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  utils: {
    // Margin utilities
    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    
    // Padding utilities
    p: (value) => ({
      padding: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    
    // Size utilities
    size: (value) => ({
      width: value,
      height: value,
    }),
  },
});

// Global styles
export const globalStyles = globalCss({
  '@import': [
    'url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap")'
  ],
  
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  
  'html, body': {
    fontFamily: '$body',
    fontSize: '$base',
    lineHeight: 1.6,
    color: '$text',
    backgroundColor: '$background',
    scrollBehavior: 'smooth',
    width: '100%',
    overflowX: 'hidden',
  },
  
  '#root': {
    width: '100%',
    minHeight: '100vh',
  },
  
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$heading',
    fontWeight: 'bold',
    lineHeight: 1.2,
  },
  
  'a': {
    textDecoration: 'none',
    color: 'inherit',
  },
  
  'button': {
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    fontFamily: 'inherit',
  },
  
  'img': {
    maxWidth: '100%',
    height: 'auto',
  },
});
