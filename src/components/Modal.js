import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import React, { useEffect, useState } from "react";

const Modal = ({ setGIF }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState();

  const backgoundColor = useColorModeValue("white", "gray.800");

  const handleSelectedGIF = (url) => {
    setGIF(url); // Update Selected GIF
    onClose(); // Close Modal
  };

  const handleGIFSearch = debounce((value) => {
    searchGif(value)
      .then((json) => {
        setGif(json.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, 1000);

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

  useEffect(() => {
    getGifs()
      .then((json) => {
        setGif(json.data);
      })
      .catch((error) => console.log(error));
  }, [setGIF]);
  return <div></div>;
};

export default Modal;
