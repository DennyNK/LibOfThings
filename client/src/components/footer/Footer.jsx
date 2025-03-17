import { Box, Flex, Text, Link } from '@chakra-ui/react';

export default function Footer() {
   return (
    <Box bg="peach.400" color="white" py={4}>
    <Flex justify="center" direction="column" align="center">
      <Text fontSize="sm">
      The Library of things is a free to use platform. 
      </Text>
      <Flex mt={2} gap={4}>
        <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>
          Created by: Denny NK
        </Link>
      </Flex>
    </Flex>
  </Box>
   );
}