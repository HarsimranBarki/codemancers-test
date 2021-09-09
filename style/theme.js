import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        color: mode("black", "white")(props),
        bg: mode("gray.50", "gray.900")(props),
      },
    }),
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

export default theme;
