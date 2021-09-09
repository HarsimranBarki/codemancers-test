import React, { useEffect, useState } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { getTrendingGIFs, searchGIFs } from "../lib/giphy";

const GIFModal = ({ setGIF }) => {
  const [loading, setLoading] = useState();
  const [GIFCollection, setGIFCollection] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const backgoundColor = useColorModeValue("white", "gray.800");

  const handleSelectedGIF = (url) => {
    setGIF(url); // Update Selected GIF
    onClose(); // Close Modal
  };

  const debounce = (fn, time) => {
    let timeoutId;
    return wrapper;
    function wrapper(...args) {
      setLoading(true);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        timeoutId = null;
        fn(...args);
      }, time);
    }
  };

  const handleGIFSearch = debounce((value) => {
    searchGIFs(value)
      .then((json) => {
        setGIFCollection(json.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, 1000);

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
            <Input
              type="text"
              placeholder="Search gif"
              onChange={(e) => handleGIFSearch(e.target.value)}
            />

            <Flex
              flexWrap="wrap"
              mt={5}
              overflowX="hidden"
              overflowY="scroll"
              height="300px"
              justifyContent="center"
            >
              {loading ? (
                <Spinner />
              ) : (
                GIFCollection?.map((g) => {
                  return (
                    <Image
                      type="gif"
                      src={g.images.fixed_width.url}
                      key={uuidv4()}
                      data-id={g.id}
                      boxSize="150px"
                      cursor="pointer"
                      bg={backgoundColor}
                      onClick={() =>
                        handleSelectedGIF(g.images.fixed_width.url)
                      }
                    />
                  );
                })
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GIFModal;
