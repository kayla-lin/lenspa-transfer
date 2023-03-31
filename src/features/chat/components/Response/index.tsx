import { Button, Container, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Camera from "./Camera";
import Draw from "./Draw";

const Response = () => {
  const [isCamera, setIsCamera] = useState(true);

  const handleToggleCamera = () => {
    setIsCamera(!isCamera);
  };

  return (
    <>
      <Button onClick={handleToggleCamera}>Toggle</Button>
      <Flex h="100vh" w="100%" justify="center" align="center">
        <Container>
          {isCamera ? (
            <Camera setToggleCamera={handleToggleCamera} />
          ) : (
            <Draw setToggleCamera={handleToggleCamera} />
          )}
        </Container>
      </Flex>
      {/* <Draw /> */}
    </>
  );
};

export default Response;
