import { Box, Flex, Text, Link } from '@chakra-ui/react';

export default function Footer() {
   return (
    <Box bg="peach.400" color="white" py={4}>
    <Flex justify="center" direction="column" align="center">
      <Text fontSize="sm" color="purple.600">
      The Library of things is a free to use platform. 
      </Text>
      <Flex mt={2} gap={4}>
        <Link href="#" color="purple.600" _hover={{ textDecoration: 'underline' }}>
          Created by: Denny NK
        </Link>
      </Flex>
    </Flex>
  </Box>
   );
}