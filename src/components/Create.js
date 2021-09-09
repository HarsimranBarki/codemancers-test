import React, { useRef, useState } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex } from "@chakra-ui/layout";
import { Button, CloseButton, Image, Spinner, Text } from "@chakra-ui/react";
import { FaArrowCircleRight } from "react-icons/fa";

const Create = ({ updateTimeline }) => {
  const [GIF, setGIF] = useState(null); // Handle GIF Loaded In TextBox
  const [userMessage, setUserMessage] = useState("");
  const [isGIFLoaded, setIsGIFLoaded] = useState(false);
  const [postButtonDisable, setPostButtonDisable] = useState(false);

  const userMessageElement = useRef(null);

  const backgroundColor = useColorModeValue("white", "gray.900");
  const textAreaBackgroundColor = useColorModeValue("gray.100", "gray.700");

  const handleUserMessage = (e) => {
    let targetHTML = e.currentTarget.outerHTML;
    if (targetHTML.length === 0) return;

    setPostButtonDisable(false);
    setUserMessage(targetHTML);
  };

  const handleCreatePost = () => {
    const todayDate = new Date().toLocaleString([], { hour12: true });
    if (userMessage.length === 0 && GIF === null) return;
    updateTimeline(userMessage, GIF, todayDate);
    userMessageElement.current.innerHTML = "";

    setGIF(null);
    setUserMessage("");
  };

  return (
    <Box bg={backgroundColor} shadow="base" py={4} px={6} rounded="lg">
      <Text fontSize="lg" fontWeight="semibold">
        Create A Post
      </Text>
      <Box rounded="lg" my={3} bg={textAreaBackgroundColor} minHeight="100px">
        <Box
          width="100%"
          border="none"
          placeholder="Type something"
          _focusVisible={{ outline: "none" }}
          contentEditable="true"
          onInput={(e) => handleUserMessage(e)}
          suppressContentEditableWarning={true}
          ref={userMessageElement}
          mb={3}
          py={2}
          px={2}
          rounded="lg"
        ></Box>
      </Box>

      {GIF && (
        <Flex
          justifyContent="center"
          alignItems="center"
          position="relative"
          justifyItems="center"
          width="100%"
          mt={5}
        >
          {!isGIFLoaded ? <Spinner textAlign="center" /> : null}
          <CloseButton
            position="absolute"
            display={isGIFLoaded ? "block" : "none"}
            color="gray.200"
            right="2"
            top="2"
            style={{ background: "rgba(0,0,0,0.3)" }}
            onClick={() => {
              setGIF(null);
              setIsGIFLoaded(false);
            }}
          />
          <Image
            rounded="lg"
            width="100%"
            onLoad={() => setIsGIFLoaded(true)}
            src={GIF}
          />
        </Flex>
      )}

      <Flex mt={5} justifyContent="space-between">
        <Button
          rightIcon={<FaArrowCircleRight />}
          variant="solid"
          colorScheme="facebook"
          fontWeight="normal"
          isDisabled={postButtonDisable}
          onClick={() => handleCreatePost()}
        >
          Post
        </Button>
      </Flex>
    </Box>
  );
};

export default Create;
