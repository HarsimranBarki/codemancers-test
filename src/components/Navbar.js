import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Container, Flex, Link } from "@chakra-ui/layout";
import React from "react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.700");
  const font = useColorModeValue("black", "white");
  return (
    <Box padding="4" bg={bg} shadow="base" color={font}>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/">Social Connect</Link>

          <Button onClick={toggleColorMode} size="sm">
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
