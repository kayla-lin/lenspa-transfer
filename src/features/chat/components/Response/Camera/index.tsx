import {
  Box,
  Flex,
  HStack,
  IconButton,
  Spinner,
  Tooltip,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import camera from "../../../utils";
import Frame from "../Frame";
import {
  FiCamera,
  FiPenTool,
  FiRefreshCw,
  FiSend,
  FiUpload,
} from "react-icons/fi";

interface AppProps {
  setToggleCamera: Dispatch<SetStateAction<boolean>>;
}

const Camera = ({ setToggleCamera }: AppProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photoTaken, setPhotoTaken] = useState(false);

  useEffect(() => {
    const loadingCamera = async () => {
      setLoading(true);
      setError(false);
      try {
        await camera.startCamera();
      } catch {
        // No permission given by the user to use the camera
        setError(true);
      }
      setLoading(false);
    };
    loadingCamera();
  }, []);

  const handleTake = () => {
    const photoData = camera.takeSnapshot();
    setPhotoTaken(true);
  };

  const handleRedoPhoto = () => {
    setPhotoTaken(false);
  };

  return (
    <Frame
      footer={
        <>
          {!photoTaken ? (
            <HStack justify="space-between" p={5} w="100%">
              <Tooltip label="Upload a photo">
                <IconButton
                  borderRadius="3xl"
                  aria-label="Upload a photo"
                  icon={<FiUpload />}
                />
              </Tooltip>
              <Tooltip label="Take a photo">
                <IconButton
                  borderRadius="3xl"
                  onClick={handleTake}
                  colorScheme="red"
                  aria-label="Take photo"
                  icon={<FiCamera />}
                />
              </Tooltip>
              <Tooltip label="Switch to draw tool">
                <IconButton
                  borderRadius="3xl"
                  aria-label="Switch to draw tool"
                  icon={<FiPenTool />}
                />
              </Tooltip>
            </HStack>
          ) : (
            <HStack justify="space-between" p={5} w="100%">
              <Tooltip label="Retake photo">
                <IconButton
                  borderRadius="3xl"
                  onClick={handleRedoPhoto}
                  aria-label="Retake photo"
                  icon={<FiRefreshCw />}
                />
              </Tooltip>
              <Tooltip label="Send photo">
                <IconButton
                  colorScheme="red"
                  borderRadius="3xl"
                  aria-label="Send photo"
                  icon={<FiSend />}
                />
              </Tooltip>
            </HStack>
          )}
        </>
      }
    >
      <>
        {loading && (
          <Flex w="100%" h="100%" justify="center" align="center">
            <Spinner />
          </Flex>
        )}
        {error && (
          <Flex w="100%" h="100%" justify="center" align="center">
            <p>Please enable the camera</p>
          </Flex>
        )}
        {/* Toggle between live camera feed */}
        <Box
          as="video"
          w="100%"
          h="500px"
          id="pending"
          objectFit="cover"
          display={photoTaken ? "none" : "block"}
        />
        {/* Finished photo */}
        <Box
          as="canvas"
          w="100%"
          h="500px"
          objectFit="cover"
          id="finished"
          display={photoTaken ? "block" : "none"}
        />
      </>
    </Frame>
  );
};

export default Camera;
