import {
  Box,
  Image,
  AspectRatio,
  Text,
  Stack,
  Divider,
} from '@chakra-ui/react';

import noImage from '../assets/images/no-image.png';

const getImageUrl = (url) => {
  if (url) {
    return url.replace('tigerhall.io/', 'tigerhall.io/resize/250x/');
  }

  return noImage;
};

const ContentPreview = ({ contentDetails }) => {
  const _renderCategories = (categories) => {
    return categories.map((c, index) => {
      if (!index) {
        return c.name;
      }

      return `, ${c.name}`;
    });
  };

  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      bg="white"
      className="content-preview"
    >
      <AspectRatio ratio={2 / 1}>
        <Image src={getImageUrl(contentDetails.image?.uri)} objectFit="cover" />
      </AspectRatio>

      <Divider />

      <Stack p={4} spacing={1}>
        <Text
          color="brand.secondary"
          textTransform="uppercase"
          fontWeight={600}
          fontSize="sm"
          noOfLines={1}
        >
          {_renderCategories(contentDetails.categories)}
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
