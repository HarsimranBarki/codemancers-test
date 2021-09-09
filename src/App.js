import { ChakraProvider } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
