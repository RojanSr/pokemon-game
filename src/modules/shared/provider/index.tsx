import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    </QueryClientProvider>
  );
};

export default Provider;
