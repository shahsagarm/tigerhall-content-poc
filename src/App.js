import { ChakraProvider, Container } from '@chakra-ui/react';

import theme from './utils/Theme';
import Content from './pages/Content/Content';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" p={10}>
        <Content />
      </Container>
    </ChakraProvider>
  );
}

export default App;
