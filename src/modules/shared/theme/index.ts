import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f6f8fc",
        fontFamily: "Poppins, Arial, sans-serif",
        color: "white",
      },
    },
  },
  colors: {
    primary: {
      red: "#ff5350",
    },
    white: {
      ghost: "#f4f6f9",
      ghost_hover: " #eff2f6",
    },
    text: {
      dark: "#061833",
      grey: "#9e9fa1",
    },
  },
  fonts: {
    heading: `'Nippo', sans-serif`,
    body: `'Nippo', sans-serif`,
  },
  fontWeights: {
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
});
