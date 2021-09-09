import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Container, Flex, Link } from "@chakra-ui/layout";
import React from "react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgoundColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");
  return (
    <Box padding="4" bg={backgoundColor} shadow="base" color={textColor}>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/">Social Connect</Link>

          <Button onClick={toggleColorMode} fontWeight="normal" size="sm">
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
