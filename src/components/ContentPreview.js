import { Box, Image, AspectRatio, Text, Stack } from '@chakra-ui/react';

const ContentPreview = () => {
  const contentDetails = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'random-image',
    name: 'Mindsets to Lead Business Transformation',
    categories: [
      {
        name: 'Strategic Thinking',
      },
    ],
    experts: [
      {
        firstName: 'Sonia',
        lastName: 'Gupta',
        title: 'MD, Growth & Innovation',
        company: 'Accenture',
      },
    ],
  };

  return (
    <Box borderRadius="md" overflow="hidden" bg="white">
      <AspectRatio ratio={2 / 1}>
        <Image
          src={contentDetails.imageUrl}
          alt={contentDetails.imageAlt}
          objectFit="cover"
        />
      </AspectRatio>

      <Stack p={4} spacing={1}>
        <Text
          color="brand.secondary"
          textTransform="uppercase"
          fontWeight={600}
          fontSize="sm"
          noOfLines={1}
        >
          {contentDetails.categories.map((value) => value.name)}
        </Text>

        <Box
          mt="1"
          color="brand.primary_dark"
          fontSize="lg"
          fontWeight={700}
          as="h5"
          lineHeight="tight"
          noOfLines={2}
        >
          {contentDetails.name}
        </Box>

        <Text
          color="brand.primary"
          fontWeight={500}
          fontSize="xs"
          noOfLines={1}
        >
          {contentDetails.experts.map(
            (value) => `${value.firstName} ${value.lastName}`
          )}
        </Text>
        <Text
          color="brand.primary"
          fontWeight={500}
          fontSize="xs"
          noOfLines={1}
        >
          {contentDetails.experts.map((value) => value.title)}
        </Text>
        <Text
          color="brand.secondary"
          fontWeight={500}
          fontSize="xs"
          noOfLines={1}
        >
          {contentDetails.experts.map((value) => value.company)}
        </Text>
      </Stack>
    </Box>
  );
};

export default ContentPreview;
