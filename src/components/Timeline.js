import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const Timeline = ({ collection }) => {
  const backgroundColor = useColorModeValue("white", "gray.700");
  if (!collection) return;

  /**
   *   userMessage,
        GIF,
        dataOfMessage,
   */
  return (
    <Box my={5}>
      {collection?.map(({ userMessage, GIF, dateOfMessage }) => {
        return (
          <Box
            key={uuidv4()}
            bg={backgroundColor}
            boxShadow="base"
            py={4}
            px={6}
            rounded="5"
            mb={5}
          >
            <Text fontSize="sm" textColor="gray.500">
              {dateOfMessage}
            </Text>
            <Box
              my={3}
              style={{
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
              }}
              onKeyDown={(e) => e.preventDefault()}
              dangerouslySetInnerHTML={{ __html: `${userMessage}` }}
            ></Box>
            <Flex justifyContent="center">
              {GIF && <Image src={GIF} width="100%" rounded="lg" mt={5} />}
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default Timeline;
