import { ChakraProvider, Container } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import theme from "@chakra-ui/theme";
import Navbar from "./components/Navbar";
import Create from "./components/Create";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container my="10">
        <Create />
      </Container>
    </ChakraProvider>
  );
}

export default App;
