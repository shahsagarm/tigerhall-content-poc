import {
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import theme from './utils/Theme';
import Content from './pages/Content/Content';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" p={10}>
        <FormControl mb={6} maxW="sm">
          <FormLabel color="white">Search</FormLabel>
          <Input placeholder="Type any keyword" color="white" />
        </FormControl>
        <Content />
      </Container>
    </ChakraProvider>
  );
}

export default App;
