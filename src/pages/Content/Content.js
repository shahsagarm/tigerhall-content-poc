import { useEffect, useState } from 'react';
import {
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  useBreakpointValue,
} from '@chakra-ui/react';

import ContentPreview from '../../components/ContentPreview';
import ContentPreviewSkeleton from '../../components/ContentPreviewSkeleton';

const Content = () => {
  const [loading, setLoading] = useState(true);
  const contentColSpan = useBreakpointValue({ base: 4, md: 1 });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <>
        <FormControl mb={6} maxW="sm">
          <FormLabel color="white">Search</FormLabel>
          <Input placeholder="Type any keyword" color="white" />
        </FormControl>
        <SimpleGrid columns={4} columnGap={8} rowGap={8} w="full">
          <GridItem colSpan={contentColSpan}>
            <ContentPreviewSkeleton />
          </GridItem>
          <GridItem colSpan={contentColSpan}>
            <ContentPreviewSkeleton />
          </GridItem>
          <GridItem colSpan={contentColSpan}>
            <ContentPreviewSkeleton />
          </GridItem>
          <GridItem colSpan={contentColSpan}>
            <ContentPreviewSkeleton />
          </GridItem>
        </SimpleGrid>
      </>
    );
  }

  return (
    <>
      <FormControl mb={6} maxW="sm">
        <FormLabel color="white">Search</FormLabel>
        <Input placeholder="Type any keyword" color="white" />
      </FormControl>
      <SimpleGrid columns={4} columnGap={8} rowGap={8} w="full">
        <GridItem colSpan={contentColSpan}>
          <ContentPreview />
        </GridItem>
        <GridItem colSpan={contentColSpan}>
          <ContentPreview />
        </GridItem>
        <GridItem colSpan={contentColSpan}>
          <ContentPreview />
        </GridItem>
        <GridItem colSpan={contentColSpan}>
          <ContentPreview />
        </GridItem>
        <GridItem colSpan={contentColSpan}>
          <ContentPreview />
        </GridItem>
        <GridItem colSpan={contentColSpan}>
          <ContentPreview />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Content;
