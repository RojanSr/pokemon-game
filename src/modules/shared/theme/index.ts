import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f6f8fc",
        fontFamily: "Poppins, Arial, sans-serif",
      },
    },
  },
  colors: {
    primary: {
      red: "#ff5350",
    },
    text: {
      dark: "#061833",
      grey: "#9e9fa1",
    },
  },
});