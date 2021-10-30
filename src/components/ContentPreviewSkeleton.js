import { Box, Skeleton, Stack, SkeletonText } from '@chakra-ui/react';

const ContentPreviewSkeleton = () => {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden" w="full">
      <Skeleton height="150px" />
      <Stack p={4} spacing={3}>
        <SkeletonText noOfLines={1}></SkeletonText>
        <SkeletonText noOfLines={2}></SkeletonText>
        <SkeletonText noOfLines={1}></SkeletonText>
        <SkeletonText noOfLines={1}></SkeletonText>
        <SkeletonText noOfLines={1}></SkeletonText>
      </Stack>
    </Box>
  );
};

export default ContentPreviewSkeleton;
