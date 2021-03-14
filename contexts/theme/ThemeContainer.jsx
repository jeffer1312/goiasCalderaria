import React from 'react';
import theme from '../../styles/theme';

import { ChakraProvider } from '@chakra-ui/react';
const ThemeContainer = ({ children }) => {
  return (
    <ChakraProvider value='light' theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default ThemeContainer;
