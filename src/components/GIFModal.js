import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Flex,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { getTrendingGIFs, searchGIFs } from "../lib/giphy";

const tagLines = [
  "🚴‍♂️ Finding your gifs",
  "🧑‍⚕️ Please be paitient",
  "🏃‍♂️ We will make it quicker",
  "😔 Sorry to keep you waiting",
  "🧗 On top of the mountain Searching",
];

const GIFModal = ({ setGIF }) => {
  const [loading, setLoading] = useState();
  const [GIFCollection, setGIFCollection] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searched, setSearched] = useState("");
  const [offset, setOffset] = useState(0);

  const backgoundColor = useColorModeValue("white", "gray.800");

  const handleSelectedGIF = (url) => {
    setGIF(url); // Update Selected GIF
    onClose(); // Close Modal
  };

  const handleSearchInput = (e) => {
    let value = e.target.value;
    if (value.length === 0) return;
    setSearched(e.target.value);
  };

  const handleGIFSearch = () => {
    if (searched.length === 0) return;
    setLoading(true);
    setOffset(offset + 25);
    searchGIFs(searched, 25, offset)
      .then((json) => {
        setGIFCollection(json.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTrendingGIFs()
      .then((json) => {
        setGIFCollection(json.data);
      })
      .catch((error) => console.log(error));
  }, [setGIF]);
  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<BsFileEarmarkArrowUp />}
        fontWeight="normal"
      >
        GIF
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl" bg={backgoundColor}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="normal">Choose A Gif</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={5}>
            <Flex>
              <Input
                type="text"
                variant="filled"
                placeholder="Search gif"
                name="searchField"
                onChange={(e) => handleSearchInput(e)}
              />
              <IconButton
                icon={<FiSearch />}
                ml={2}
                onClick={() => handleGIFSearch()}
              >
                Search
              </IconButton>
            </Flex>

            <Flex
              flexWrap="wrap"
              mt={5}
              overflowX="hidden"
              overflowY="scroll"
              height="300px"
              justifyContent="center"
            >
              {loading ? (
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Spinner />
                  <Text mt={2}>
                    {tagLines[Math.floor(Math.random() * tagLines.length)]}
                  </Text>
                </Flex>
              ) : (
                GIFCollection?.map((g) => {
                  return (
                    <Image
                      type="gif"
                      src={g.images.downsized.url}
                      key={g.id}
                      data-id={g.id}
                      alt={g.title}
                      boxSize="150px"
                      cursor="pointer"
                      bg={backgoundColor}
                      onClick={() => handleSelectedGIF(g.images.downsized.url)}
                    />
                  );
                })
              )}
            </Flex>
            <Button my={3} size="sm" onClick={() => handleGIFSearch()}>
              Try Different?
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GIFModal;
