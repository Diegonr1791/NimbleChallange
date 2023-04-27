import { ChakraBaseProvider, theme } from "@chakra-ui/react";
import Router from "./navigation/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraBaseProvider theme={theme}>
        <Router />
      </ChakraBaseProvider>
    </QueryClientProvider>
  );
}

export default App;
