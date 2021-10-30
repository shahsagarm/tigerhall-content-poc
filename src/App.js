import { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import theme from './utils/Theme';
import Content from './pages/Content/Content';
import useDebounce from './hooks/useDebounce';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtering, setFiltering] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const onValueChange = (e) => {
    setFiltering(true);
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setFiltering(false);
  }, [debouncedSearchTerm]);

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" p={10} id="container">
        <FormControl mb={6} maxW="sm">
          <FormLabel color="white">Search</FormLabel>
          <Input
            placeholder="Type any keyword"
            color="white"
            value={searchTerm}
            onChange={onValueChange}
          />
        </FormControl>
        <Content searchTerm={debouncedSearchTerm} filtering={filtering} />
      </Container>
    </ChakraProvider>
  );
};

export default App;
