import { ChakraBaseProvider, theme } from "@chakra-ui/react";
import Router from "./navigation/Router";

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Router />
    </ChakraBaseProvider>
  );
}

export default App;
