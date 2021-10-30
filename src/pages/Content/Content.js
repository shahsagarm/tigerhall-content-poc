import { useQuery } from '@apollo/client';
import { SimpleGrid, GridItem, useBreakpointValue } from '@chakra-ui/react';

import { GET_CONTENT_CARDS } from '../../graphql/Queries';
import ContentPreview from '../../components/ContentPreview';
import ContentPreviewSkeleton from '../../components/ContentPreviewSkeleton';
import Alert from '../../components/Alert';

const Content = ({ searchTerm, filtering }) => {
  const contentColSpan = useBreakpointValue({ base: 4, md: 1 });
  const { loading, error, data } = useQuery(GET_CONTENT_CARDS);

  if (error) {
    const alertTitle = 'Unalbe to fetch data!';
    return (
      <Alert alertTitle={alertTitle} alertDescription={error} type="error" />
    );
  }

  if (loading || filtering) {
    return (
      <>
        <SimpleGrid columns={4} columnGap={8} rowGap={8} w="full">
          {Array(4)
            .fill('')
            .map((_, i) => (
              <GridItem colSpan={contentColSpan} key={i}>
                <ContentPreviewSkeleton />
              </GridItem>
            ))}
        </SimpleGrid>
      </>
    );
  }

  const {
    contentCards: { edges },
  } = data;

  let filteredData = edges || [];

  if (searchTerm) {
    filteredData = edges.filter((content) =>
      content.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (!filteredData || !filteredData.length) {
    const alertTitle = 'No data found!';
    return <Alert type="warning" alertTitle={alertTitle} />;
  }

  return (
    <>
      <SimpleGrid columns={4} columnGap={8} rowGap={8} w="full">
        {filteredData.map((edge, index) => (
          <GridItem colSpan={contentColSpan} key={index}>
            <ContentPreview contentDetails={edge} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Content;
