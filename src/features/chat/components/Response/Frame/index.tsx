import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AppProps {
  children: ReactNode;
  footer: ReactNode;
}

const Frame = ({ children, footer }: AppProps) => {
  return (
    <VStack
      bg="white"
      boxShadow="lg"
      spacing={0}
      borderColor="gray.300"
      borderWidth="1px"
      borderStyle="solid"
      borderRadius="md"
    >
      <HStack w="100%" p={5} justify="center">
        <Text fontWeight={600}>Prompt is written here!</Text>
      </HStack>
      <Box
        overflow="hidden"
        h="500px"
        w="500px"
        borderRadius="md"
        borderColor="gray.300"
        borderWidth="1px"
        borderStyle="solid"
      >
        {children}
      </Box>
      <HStack w="100%">{footer}</HStack>
    </VStack>
  );
};

export default Frame;
