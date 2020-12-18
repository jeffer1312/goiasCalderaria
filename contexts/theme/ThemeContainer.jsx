import React from "react";
import theme from "../../styles/theme";
import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider as ChackraThemeProvider,
} from "@chakra-ui/core";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
const ThemeContainer = ({ children }) => {
  return (
    <ChackraThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <EmotionThemeProvider theme={{ theme }}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChackraThemeProvider>
  );
};

export default ThemeContainer;
