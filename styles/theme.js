import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fonts: {
    body: 'Mulish sans-serif',
    heading: 'Mulish sans-serif',
    mono: 'Mulish sans-serif',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    ligth: 400,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  fontSizes: {
    ...theme.fontSizes,
    '6xl': '54px',
  },
  colors: {
    ...theme.colors,
    green: {
      300: '#BCDE16',
      700: '#129e38',
      800: '#2E4D2E',
    },
    purple: {
      ...theme.colors.purple,
      500: '#8257e5',
    },
    yellow: {
      300: '#fde910',
      500: '#F4F434',
    },
    gray: {
      ...theme.colors.gray,
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214',
    },
  },
};

export default customTheme;
