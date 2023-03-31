import { theme } from "@/lib/chakraUI";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AppProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppProvider;
