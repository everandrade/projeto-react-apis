import { ChakraProvider } from '@chakra-ui/react'
import Router from "./routes/Router"
import { GlobalStyle } from "./GlobalStyle"


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <GlobalStyle />
        <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;
