// Design tokens based on DealSurge.co branding guide

export const colors = {
  // Core Base
  white: '#FFFFFF',
  graphite: '#181A1B',
  
  // Primary Accents
  cyan: '#10B8EC',
  teal: '#24D1C6',
  lime: '#7AD13F',
  red: '#ED4848',
  
  // Secondary & Pop Colors
  yellow: '#FFD600',
  indigo: '#6C47FF',
  pink: '#FF5C8A',
  slate: '#ECEEF1',
  gunmetal: '#2D333A',
  
  // Dark mode body text
  bodyDark: '#ECEEF1',
  bodyBgDark: '#181A1B',
} as const;

export const typography = {
  fontFamily: {
    heading: ['Montserrat', 'system-ui', 'Arial', 'sans-serif'],
    body: ['IBM Plex Sans', 'Montserrat', 'system-ui', 'Arial', 'sans-serif'],
  },
  
  fontSize: {
    // Headings
    h1: '48px',
    h2: '36px',
    h3: '30px',
    h4: '24px',
    h5: '20px',
    h6: '18px',
    
    // Body text
    body: '16px',
    bodyLarge: '18px',
    
    // Slogan/Subheading
    slogan: '22px',
    subheading: '18px',
    
    // Meta/Captions
    caption: '14px',
    meta: '12px',
  },
  
  fontWeight: {
    // Montserrat weights
    headingRegular: '400',
    headingMedium: '500',
    headingSemiBold: '600',
    headingBold: '700',
    
    // IBM Plex Sans weights
    bodyLight: '300',
    bodyRegular: '400',
    bodyMedium: '500',
    bodyItalic: '400', // italic variant
  },
  
  lineHeight: {
    // Headings
    heading: '1.1',
    headingLoose: '1.2',
    
    // Body text
    body: '1.6',
    bodyLoose: '1.75',
    
    // Slogan/Subheading
    slogan: '1.3',
    subheading: '1.4',
  },
  
  letterSpacing: {
    // Headings - tight letter spacing
    heading: '-0.01em',
    headingTight: '-0.02em',
    
    // Slogan/Subheading - slightly increased
    slogan: '0.01em',
    subheading: '0.02em',
    
    // Buttons/CTAs - increased letter spacing
    button: '0.02em',
    cta: '0.04em',
  },
} as const;

export const spacing = {
  // Paragraph spacing
  paragraph: '1.5rem',
  
  // Section spacing
  section: '3rem',
  sectionLarge: '4rem',
  
  // Component spacing
  component: '1rem',
  componentLarge: '2rem',
} as const;

// Export all tokens as a single object for convenience
export const designTokens = {
  colors,
  typography,
  spacing,
} as const;

// Type exports for TypeScript
export type ColorToken = keyof typeof colors;
export type TypographyToken = keyof typeof typography;
export type SpacingToken = keyof typeof spacing; 