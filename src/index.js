import { ColorModeScript } from "@chakra-ui/color-mode";
import theme from "@chakra-ui/theme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
