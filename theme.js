
import { extendTheme } from "@chakra-ui/react";


const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        bg: "blue.100", 
        color: "white.100",
      },
    },
  },
};


const theme = extendTheme({ config });

export default theme;
