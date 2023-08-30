import React from 'react';
import { createTheme, PaletteColor } from '@mui/material';

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface TypographyVariants {
    h1: React.CSSProperties | undefined;
    h2: React.CSSProperties | undefined;
    subtitle1: React.CSSProperties | undefined;
    subtitile2: React.CSSProperties | undefined;
    body1: React.CSSProperties | undefined;
    body2: React.CSSProperties | undefined;
    caption1: React.CSSProperties | undefined;
    caption2: React.CSSProperties | undefined;
  }

  // eslint-disable-next-line no-unused-vars
  interface TypographyVariantsOptions {
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitile2: React.CSSProperties;
    body1: React.CSSProperties;
    body2?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  // eslint-disable-next-line no-unused-vars
  interface TypographyPropsVariantOverrides {
    h1?: true;
    h2?: true;
    subtitle1?: true;
    subtitile2: true;
    body1: true;
    body2?: true;
    caption1?: true;
    caption2: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    accent?: PaletteColor;
    gradient?: PaletteColor;
    alpha?: PaletteColor;
    white?: PaletteColor;
  }
  interface PaletteOptions {
    accent?: PaletteColor;
    gradient?: PaletteColor;
    alpha?: PaletteColor;
    white?: PaletteColor;
  }
}

const fontFaceMontserrat = {
  fontFamily: 'Montserrat',
  src: `url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')`,
};

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    caption1: React.CSSProperties;
  }

  interface TypographyOptions {
    caption1?: React.CSSProperties;
  }
}

const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32],
  palette: {
    primary: {
      main: '#1B877A',
      light: '#B2FFF6',
      dark: '#0B6D62',
      contrastText: '#4ABAAD',
      '300': '#4ABAAD',
      '200': '#77EDDF',
    },
    secondary: {
      main: '#E7FCE0',
      light: '#F5FFF7',
      dark: '#E8FFFC',
    },
    accent: {
      main: '#ED8F02',
      light: '#FF725E',
      dark: '#FF725E',
      contrastText: '#fff',
    },
    gradient: {
      main: 'linear-gradient(143.84deg, #E0FFE5 0%, #FFFAEA 102.58%)',
      light: 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)',
      dark: '',
      contrastText: '',
    },
    alpha: {
      main: '#30A193',
      light: '#30A193',
      dark: '#30A193',
      contrastText: '',
    },
    grey: {
      '400': '#D6D6D6',
      '100': '#F7F7F7',
      '200': '#E9EBE9',
    },
    text: {
      primary: '#373C38',
      secondary: '#656E66',
      disabled: '#94A196',
    },
    white: {
      main: '#FFFFFF',
      light: '#FFFAFA',
      dark: '',
      contrastText: '',
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          '&:last-child': {
            paddingBottom: 0,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': [
            fontFaceMontserrat,
            fontFaceMontserrat,
            fontFaceMontserrat,
          ],
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        root: {
          paddingLeft: '0px',
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: '#F7F7F7',
        },
        text: {
          fill: '#373C38',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          backgroundColor: '#30A193',
          borderRadius: '8px',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#4ABAAD',
          },
        },
        outlined: {
          borderRadius: '8px',
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    allVariants: {
      color: '#373C38',
    },
    h1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '48px',
    },
    h2: {
      fontSize: '20px',
      fontFamily: 'Montserrat',
      fontWeight: 600,
      lineHeight: '30px',
    },
    h3: {
      fontSize: '20px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '30px',
    },
    subtitle1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
    },
    subtitle2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
    },
    body1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '22px',
    },
    body2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '22px',
    },
    caption: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '16px',
    },
    caption1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
});

export default theme;
