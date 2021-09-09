import { theme as chakraTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = {
  ...chakraTheme,

  fonts: {
    ...chakraTheme.fonts,
    html: `Poppins`,
    heading: `Poppins`,
    body: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
    boldest: 800,
  },
  icons: {
    ...chakraTheme.icons,
  },
  colors: {
    ...chakraTheme.colors,
  },
  styles: {
    ...chakraTheme.styles,

    global: (props) => ({
      body: {
        color: mode("#01020A", "white")(props),
        bg: mode("gray.50", "gray.800")(props),
      },
    }),
  },

  initialColorMode: "light",
  useSystemColorMode: false,
};

export default theme;
