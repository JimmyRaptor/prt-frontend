import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        bg: "blue.1000",
        color: "white.100",
      },
    },
  },
};

const theme = extendTheme({
  config,
});

export default theme;
